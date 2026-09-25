import { Component, computed, inject, model, signal, ElementRef, viewChild } from '@angular/core';
import { Dialog } from '@openng/optimus-ui/dialog';
import { Button } from '@openng/optimus-ui/button';
import { XVStorage } from '../../../app.config';
import { FirebaseTarjetasService } from '../../../services/firebase-tarjetas';
import { token_de } from '../../../models/mensaje';
import { estado_de, integrantes_de, sin_indefinidos, TarjetaConId } from '../../../models/tarjeta';

type Estado = 'pidiendo' | 'escaneando' | 'encontrada' | 'desconocida' | 'error';

/** El cuadro se reduce antes de analizarlo: mas chico es mas rapido y alcanza. */
const ANCHO_ANALISIS = 480;

@Component({
  imports: [Dialog, Button],
  selector: 'xv-escaner',
  styleUrl: './escaner.scss',
  templateUrl: './escaner.html',
})
export class Escaner {

  private readonly servicio = inject(FirebaseTarjetasService)

  public readonly abierto = model<boolean>(false)

  private readonly video  = viewChild<ElementRef<HTMLVideoElement>>('video')
  private readonly lienzo = viewChild<ElementRef<HTMLCanvasElement>>('lienzo')

  protected readonly estado   = signal<Estado>('pidiendo')
  protected readonly mensaje  = signal<string>('')
  protected readonly leido    = signal<string | null>(null)
  protected readonly marcando = signal<string | null>(null)

  private flujo: MediaStream | null = null
  private cuadro = 0

  protected readonly tarjeta = computed<TarjetaConId | null>(() => {
    const token = this.leido()
    if(!token) return null
    return (XVStorage.tarjetas() ?? []).find(t => t.id === token) ?? null
  })

  protected readonly integrantes = computed(() => {
    const t = this.tarjeta()
    return t ? integrantes_de(t) : []
  })

  protected readonly ingreso_de = (persona_id: string): string | null =>
    this.tarjeta()?.personas?.find(p => p.id === persona_id)?.ingreso ?? null

  protected readonly hay_sin_confirmar = computed(() =>
    this.integrantes().some(i => i.estado !== 'confirmado')
  )

  protected readonly confirmados = computed(() => {
    const t = this.tarjeta()
    if(!t) return 0
    const e = estado_de(t)
    return e.tipo === 'respondida' ? e.confirmados : 0
  })

  // ------------------------------------------------------------ camara

  protected readonly iniciar = async () => {
    this.estado.set('pidiendo')
    this.mensaje.set('')
    this.leido.set(null)

    if(!navigator.mediaDevices?.getUserMedia) {
      return this.fallar('Este navegador no permite usar la cámara.')
    }

    try {
      // La camara de atras es la que se usa para escanear.
      this.flujo = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
        audio: false
      })
    }
    catch(e: any) {
      const codigo = e?.name
      if(codigo === 'NotAllowedError')  return this.fallar('No nos diste permiso para usar la cámara. Habilitalo en el navegador y volvé a intentar.')
      if(codigo === 'NotFoundError')    return this.fallar('No encontramos ninguna cámara en este dispositivo.')
      if(codigo === 'NotReadableError') return this.fallar('La cámara está siendo usada por otra aplicación.')
      console.error('[escaner]', e)
      return this.fallar('No pudimos abrir la cámara.')
    }

    // El elemento se dibuja recien cuando Angular actualiza la vista, que
    // puede ocurrir despues de que el permiso se concede. Se espera a que este.
    const video = await this.esperar_video()
    if(!video) return this.fallar('No pudimos mostrar la cámara en pantalla.')

    video.srcObject = this.flujo
    this.estado.set('escaneando')

    // En iOS reproducir puede fallar si el elemento no es visible todavia:
    // por eso se marca 'escaneando' antes, y si igual falla se reintenta.
    try { await video.play() }
    catch {
      await new Promise(r => setTimeout(r, 120))
      try { await video.play() } catch { /* algunos navegadores arrancan solos */ }
    }

    this.buscar()
  }

  private readonly esperar_video = async (): Promise<HTMLVideoElement | null> => {
    for(let intento = 0; intento < 30; intento++) {
      const video = this.video()?.nativeElement
      if(video) return video
      await new Promise(r => setTimeout(r, 50))
    }
    return null
  }

  /** Un cuadro por vez: se dibuja, se analiza, y si no hay QR se pide el siguiente. */
  private readonly buscar = () => {
    this.cuadro = requestAnimationFrame(async () => {
      if(this.estado() !== 'escaneando') return

      const video  = this.video()?.nativeElement
      const lienzo = this.lienzo()?.nativeElement

      if(!video || !lienzo || video.readyState !== video.HAVE_ENOUGH_DATA) return this.buscar()

      const escala = ANCHO_ANALISIS / video.videoWidth
      lienzo.width  = ANCHO_ANALISIS
      lienzo.height = Math.round(video.videoHeight * escala)

      const ctx = lienzo.getContext('2d', { willReadFrequently: true })
      if(!ctx) return this.buscar()

      ctx.drawImage(video, 0, 0, lienzo.width, lienzo.height)
      const imagen = ctx.getImageData(0, 0, lienzo.width, lienzo.height)

      // jsQR se carga recien acá: quien nunca escanea no lo descarga.
      const { default: jsQR } = await import('jsqr')
      const codigo = jsQR(imagen.data, imagen.width, imagen.height, { inversionAttempts: 'dontInvert' })

      if(!codigo?.data) return this.buscar()

      const token = token_de(codigo.data)
      if(!token) return this.buscar()   // un QR ajeno: se ignora y se sigue

      this.detener()
      this.leido.set(token)
      this.estado.set(this.tarjeta() ? 'encontrada' : 'desconocida')
    })
  }

  private readonly fallar = (texto: string) => {
    this.mensaje.set(texto)
    this.estado.set('error')
  }

  /** Apagar la camara: sin esto la luz del telefono queda prendida. */
  protected readonly detener = () => {
    cancelAnimationFrame(this.cuadro)
    this.flujo?.getTracks().forEach(t => t.stop())
    this.flujo = null

    const video = this.video()?.nativeElement
    if(video) video.srcObject = null
  }

  protected readonly cerrar = () => {
    this.detener()
    this.abierto.set(false)
  }

  // ------------------------------------------------------------ ingreso

  /**
   * Solo entra quien confirmo. La lista de confirmados es el numero que se le
   * dio al salon: dejar pasar a alguien por fuera romperia esa cuenta y ademas
   * lo dejaria invisible, marcado como que entro pero fuera de toda lista.
   */
  protected readonly puede_ingresar = (persona_id: string): boolean =>
    this.tarjeta()?.personas?.find(p => p.id === persona_id)?.confirmado === true

  protected readonly alternar_ingreso = async (persona_id: string) => {
    const t = this.tarjeta()
    if(!t || this.marcando() || !this.puede_ingresar(persona_id)) return

    this.marcando.set(persona_id)
    const entra = !this.ingreso_de(persona_id)
    const ahora = new Date().toISOString()

    const personas = (t.personas ?? []).map(p =>
      p.id === persona_id
        ? sin_indefinidos({ ...p, ingreso: entra ? ahora : undefined })
        : p
    )

    try { await this.servicio.update(t.id, { personas }) }
    catch(e) { console.error('[ingreso]', e); this.mensaje.set('No pudimos registrar el ingreso.') }
    finally { this.marcando.set(null) }
  }

}
