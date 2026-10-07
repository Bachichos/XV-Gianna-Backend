import { Component, computed, DestroyRef, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { toDataURL } from 'qrcode';
import { Button } from '@openng/optimus-ui/button';
import { Dialog } from '@openng/optimus-ui/dialog';
import { XVLayout } from '../../components/design/xv-layout/xv-layout';
import { XVConfirmar } from '../../components/xv-confirmar/xv-confirmar';
import { XVStorage } from '../../app.config';
import { FirebaseAlbumService, FotoGuardada } from '../../services/firebase-album';
import { clave_nueva, ConfigAlbum, DatosMision, link_album, Mision, MISIONES, misiones_con, TextosMision, ventana } from '../../models/album';
import { instante, partes } from '../../models/fechas';
import { FormsModule } from '@angular/forms';
import { InputText } from '@openng/optimus-ui/inputtext';
import { URL_INVITACION } from '../../models/mensaje';
import { armar_zip } from '../../models/zip';
import { descargar_cartel } from './cartel-pdf';

type Filtro = 'todas' | 'libres' | Mision

/** Una foto lista para la grilla: sus datos, la miniatura como URL y como se lee. */
type Vista = {
  f:       FotoGuardada
  url:     string
  mision:  DatosMision | null
  cuando:  string
}

/** Descargar, dado un Blob o un data URL. */
const bajar = (contenido: Blob | string, nombre: string) => {
  const url = typeof contenido === 'string' ? contenido : URL.createObjectURL(contenido)
  const a = Object.assign(document.createElement('a'), { href: url, download: nombre })
  document.body.append(a); a.click(); a.remove()
  if(typeof contenido !== 'string') setTimeout(() => URL.revokeObjectURL(url), 2000)
}

/** "ana-maria": para los nombres de archivo del zip. */
const sin_raros = (texto: string) =>
  texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

/**
 * El album de fotos de la fiesta (frontend/docs/album-de-fotos.md): el QR
 * para el salon y las fotos que van subiendo los invitados.
 *
 * A diferencia del resto, la escucha vive aca y no en app.ts: son cientos
 * de miniaturas, y solo tiene sentido bajarlas al entrar al album, no en
 * cada sesion.
 */
@Component({
  imports: [XVLayout, Button, Dialog, XVConfirmar, FormsModule, InputText],
  selector: 'app-album',
  styleUrl: './album.scss',
  templateUrl: './album.html',
})
export class AlbumPage {

  private readonly servicio = inject(FirebaseAlbumService)

  protected readonly error = signal<string | null>(null)

  /** null = cargando; undefined = todavia no se genero el QR. */
  protected readonly clave = toSignal(this.servicio.get_clave().pipe(catchError(e => {
    console.error('[album]', e)
    this.error.set('No pudimos leer el álbum. Revise la conexión y los permisos.')
    return of(undefined)
  })), { initialValue: null })

  private readonly crudas = toSignal(this.servicio.get_fotos().pipe(catchError(e => {
    console.error('[album]', e)
    this.error.set('No pudimos leer las fotos. Revise la conexión y los permisos.')
    return of([] as FotoGuardada[])
  })), { initialValue: null })

  /** Los ajustes publicos: ventana y textos de las misiones. null = cargando. */
  private readonly config = toSignal(this.servicio.get_config().pipe(catchError(e => {
    console.error('[album]', e)
    return of(undefined)
  })), { initialValue: null })

  protected readonly cargando = computed(() => this.clave() === null || this.crudas() === null || this.config() === null)

  protected readonly festejada = computed(() => XVStorage.configuracion().evento.festejada || 'la fiesta')
  private   readonly zona      = computed(() => XVStorage.configuracion().evento.zona)
  /** Las misiones con los textos del backoffice encima de los de fabrica. */
  protected readonly misiones  = computed(() => misiones_con(this.config()))

  // ------------------------------------------------------------ las fotos

  /**
   * Las miniaturas, como URLs del navegador. Se guardan por foto: si se
   * crearan de nuevo en cada cambio de la lista, la grilla parpadearia y la
   * memoria se llenaria de copias.
   */
  private readonly urls = new Map<string, string>()

  protected readonly fotos = computed((): Vista[] => {
    const lista = [...(this.crudas() ?? [])].sort((a, b) => b.creada_ms - a.creada_ms)
    const vigentes = new Set<string>()
    const vistas = lista.map(f => {
      const clave = `${f.id}@${f.creada_ms}`
      vigentes.add(clave)
      let url = this.urls.get(clave)
      if(!url) {
        url = URL.createObjectURL(new Blob([f.miniatura.toUint8Array() as BlobPart], { type: 'image/jpeg' }))
        this.urls.set(clave, url)
      }
      return { f, url, mision: this.misiones().find(m => m.id === f.mision) ?? null, cuando: this.hora(f.creada_ms) }
    })
    // Las que ya no estan (se borraron, o se reemplazo una mision): se sueltan.
    for(const [clave, url] of this.urls) if(!vigentes.has(clave)) { URL.revokeObjectURL(url); this.urls.delete(clave) }
    return vistas
  })

  protected readonly filtro = signal<Filtro>('todas')

  protected readonly filtradas = computed(() => {
    const f = this.filtro()
    return this.fotos().filter(v => f === 'todas' || (f === 'libres' ? !v.f.mision : v.f.mision === f))
  })

  /** Cuantas hay de cada cosa, para los botones del filtro y el resumen. */
  protected readonly cuentas = computed(() => {
    const fotos = this.fotos()
    return {
      todas:     fotos.length,
      libres:    fotos.filter(v => !v.f.mision).length,
      telefonos: new Set(fotos.map(v => v.f.uid)).size,
      por_mision: Object.fromEntries(MISIONES.map(m => [m.id, fotos.filter(v => v.f.mision === m.id).length])) as Record<Mision, number>,
    }
  })

  private readonly hora = (ms: number) =>
    new Intl.DateTimeFormat('es-AR', { timeZone: this.zona(), weekday: 'short', day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit' })
      .format(new Date(ms)).replace(',', '')

  // ------------------------------------------------------------ el QR

  /** El link del QR: siempre la invitacion publicada, que es lo que se imprime. */
  protected readonly link = computed(() => {
    const c = this.clave()
    return c ? link_album(URL_INVITACION, c.clave) : ''
  })

  protected readonly qr = signal<string | null>(null)

  /** La hora de ahora, al minuto: para "Abierto ahora" / "Abre en 5 días". */
  private readonly ahora = signal(Date.now())

  /** Un instante, como se lee: { dia: "sábado 3 de abril", hora: "09:30" }, en la hora de la fiesta. */
  private readonly partes_de = (ms: number) => {
    const p = Object.fromEntries(new Intl.DateTimeFormat('es-AR', {
      timeZone: this.zona(), weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    }).formatToParts(new Date(ms)).map(x => [x.type, x.value]))
    return { dia: `${p['weekday']} ${p['day']} de ${p['month']}`, hora: `${p['hour']}:${p['minute']}` }
  }

  /** "5 días", "3 horas", "20 minutos": lo que falta, redondeado a lo que importa. */
  private readonly cuanto = (ms: number) => {
    const min = Math.round(ms / 60_000), horas = Math.round(min / 60), dias = Math.round(horas / 24)
    return dias >= 2 ? `${dias} días` : horas >= 2 ? `${horas} horas` : min >= 2 ? `${min} minutos` : 'un momento'
  }

  /** Cuando abre y cierra el album, y en que punto esta ahora. */
  protected readonly ventana = computed(() => {
    const c = this.clave()
    if(!c) return null
    const ahora = this.ahora()
    const estado = ahora < c.desde_ms ? { tipo: 'antes',   texto: `Abre en ${this.cuanto(c.desde_ms - ahora)}` }
                 : ahora < c.hasta_ms ? { tipo: 'abierto', texto: `Abierto ahora · cierra en ${this.cuanto(c.hasta_ms - ahora)}` }
                 :                      { tipo: 'cerrado', texto: 'Cerrado' }
    return { abre: this.partes_de(c.desde_ms), cierra: this.partes_de(c.hasta_ms), estado }
  })

  constructor() {
    // El QR se dibuja de nuevo solo si cambia el link (la clave).
    effect(() => {
      const link = this.link()
      this.qr.set(null)
      if(!link) return
      // Correccion alta: impreso, se lee igual con una mancha o con poca luz.
      toDataURL(link, { errorCorrectionLevel: 'H', margin: 2, width: 1024, color: { dark: '#1c2735ff', light: '#ffffffff' } })
        .then(png => { if(this.link() === link) this.qr.set(png) })
        .catch(e => console.error('[qr]', e))
    })

    const reloj = setInterval(() => this.ahora.set(Date.now()), 60_000)
    inject(DestroyRef).onDestroy(() => {
      clearInterval(reloj)
      for(const url of this.urls.values()) URL.revokeObjectURL(url)
      this.cerrar_foto()
    })
  }

  protected readonly guardando = signal(false)

  private readonly escribir = async (accion: () => Promise<void>, error: string) => {
    if(this.guardando()) return
    this.guardando.set(true)
    this.error.set(null)
    try { await accion() }
    catch(e) {
      console.error('[album]', e)
      this.error.set(error)
    }
    finally { this.guardando.set(false) }
  }

  private readonly ventana_de_la_fiesta = () => ventana(new Date(XVStorage.configuracion().evento.fecha))

  /**
   * Una clave nueva: el QR queda listo para imprimir. La primera vez, con la
   * ventana de la fiesta; al cambiarla, con las fechas que ya estaban (las
   * pudieron haber elegido a mano en Ajustes).
   */
  protected readonly generar = () => this.escribir(async () => {
    const c = this.clave()
    const fechas = c ? { desde_ms: c.desde_ms, hasta_ms: c.hasta_ms } : this.ventana_de_la_fiesta()
    await this.servicio.guardar_clave({ clave: clave_nueva(), ...fechas })
    this.cambiando.set(false)
  }, 'No pudimos generar el código. Revise la conexión y vuelva a intentar.')

  /** Cambiar la clave: el QR impreso deja de servir. */
  protected readonly cambiando = signal(false)

  protected readonly copiado = signal(false)
  protected readonly copiar = async () => {
    try {
      await navigator.clipboard.writeText(this.link())
      this.copiado.set(true)
      setTimeout(() => this.copiado.set(false), 2000)
    }
    catch(e) { console.error('[copiar]', e) }
  }

  protected readonly descargar_qr = () => { const png = this.qr(); if(png) bajar(png, 'qr-album.png') }

  protected readonly armando_cartel = signal(false)
  protected readonly descargar_cartel = async () => {
    const png = this.qr()
    if(!png || this.armando_cartel()) return
    this.armando_cartel.set(true)
    try { await descargar_cartel(png, this.festejada(), this.misiones()) }
    catch(e) {
      console.error('[cartel]', e)
      this.error.set('No pudimos armar el cartel. Vuelva a intentar.')
    }
    finally { this.armando_cartel.set(false) }
  }

  // ------------------------------------------------------------ ajustes

  /**
   * Lo que se edita en Ajustes: los textos de cada mision (vacio = el de
   * fabrica) y desde / hasta, en dia y hora sueltos, en la hora de la fiesta.
   */
  protected aj = this.ajustes_vacios()
  protected readonly ajustes_abiertos = signal(false)
  protected readonly MISIONES_DE_FABRICA = MISIONES

  private ajustes_vacios() {
    return {
      misiones: Object.fromEntries(MISIONES.map(m => [m.id, { titulo: '', detalle: '' }])) as Record<Mision, Required<TextosMision>>,
      desde_dia: '', desde_hora: '', hasta_dia: '', hasta_hora: '',
    }
  }

  /** El formulario, desde lo guardado (o desde la ventana de la fiesta, si nunca se guardo). */
  protected readonly abrir_ajustes = () => {
    const config = this.config(), zona = this.zona()
    const fechas = this.clave() ?? config ?? this.ventana_de_la_fiesta()
    const desde = partes(new Date(fechas.desde_ms).toISOString(), zona)
    const hasta = partes(new Date(fechas.hasta_ms).toISOString(), zona)
    this.aj = {
      misiones: Object.fromEntries(MISIONES.map(m => [m.id, {
        titulo:  config?.misiones?.[m.id]?.titulo  ?? '',
        detalle: config?.misiones?.[m.id]?.detalle ?? '',
      }])) as Record<Mision, Required<TextosMision>>,
      desde_dia: desde.dia, desde_hora: desde.hora, hasta_dia: hasta.dia, hasta_hora: hasta.hora,
    }
    this.error_ajustes.set(null)
    this.ajustes_abiertos.set(true)
  }

  protected readonly fechas_de_la_fiesta = () => {
    const v = this.ventana_de_la_fiesta(), zona = this.zona()
    const desde = partes(new Date(v.desde_ms).toISOString(), zona), hasta = partes(new Date(v.hasta_ms).toISOString(), zona)
    Object.assign(this.aj, { desde_dia: desde.dia, desde_hora: desde.hora, hasta_dia: hasta.dia, hasta_hora: hasta.hora })
  }

  protected readonly error_ajustes = signal<string | null>(null)

  /** Debajo de las fechas de Ajustes, en vivo: "Queda abierto 7 días y 12 horas." */
  protected readonly resumen_ajustes = (): { texto: string, error: boolean } => {
    const a = this.aj, zona = this.zona()
    if(!a.desde_dia || !a.desde_hora || !a.hasta_dia || !a.hasta_hora) return { texto: 'Complete las dos fechas con su hora.', error: true }
    const ms = new Date(instante(a.hasta_dia, a.hasta_hora, zona)).getTime() - new Date(instante(a.desde_dia, a.desde_hora, zona)).getTime()
    if(ms <= 0) return { texto: 'La fecha de cierre tiene que ser después de la de apertura.', error: true }
    const horas = Math.round(ms / 3_600_000), dias = Math.floor(horas / 24), resto = horas % 24
    const partes = [dias ? `${dias} ${dias === 1 ? 'día' : 'días'}` : '', resto ? `${resto} ${resto === 1 ? 'hora' : 'horas'}` : ''].filter(Boolean)
    return { texto: `Queda abierto ${partes.join(' y ') || 'menos de una hora'}.`, error: false }
  }

  protected readonly guardar_ajustes = () => {
    const a = this.aj, zona = this.zona()
    if(!a.desde_dia || !a.desde_hora || !a.hasta_dia || !a.hasta_hora) {
      this.error_ajustes.set('Complete las dos fechas con su hora.')
      return
    }
    const desde_ms = new Date(instante(a.desde_dia, a.desde_hora, zona)).getTime()
    const hasta_ms = new Date(instante(a.hasta_dia, a.hasta_hora, zona)).getTime()
    if(hasta_ms <= desde_ms) {
      this.error_ajustes.set('"Hasta" tiene que ser después de "desde".')
      return
    }
    // Solo los textos escritos: vacio = el de fabrica, y no se guarda.
    const misiones: ConfigAlbum['misiones'] = {}
    for(const m of MISIONES) {
      const t = a.misiones[m.id], titulo = t.titulo.trim(), detalle = t.detalle.trim()
      if(titulo || detalle) misiones[m.id] = { ...(titulo ? { titulo } : {}), ...(detalle ? { detalle } : {}) }
    }
    this.error_ajustes.set(null)
    return this.escribir(async () => {
      await this.servicio.guardar_ajustes({ desde_ms, hasta_ms, misiones })
      this.ajustes_abiertos.set(false)
    }, 'No pudimos guardar los ajustes. Revise la conexión y vuelva a intentar.')
  }

  // ------------------------------------------------------------ ver una foto

  protected readonly viendo  = signal<Vista | null>(null)
  protected readonly grande  = signal<string | null>(null)
  protected readonly bajando = signal(false)

  protected readonly ver = async (v: Vista) => {
    this.cerrar_foto()
    this.viendo.set(v)
    this.bajando.set(true)
    try {
      const datos = await this.servicio.bajar_original(v.f.id)
      // Si mientras bajaba se abrio otra, esta ya no corresponde.
      if(datos && this.viendo() === v)
        this.grande.set(URL.createObjectURL(new Blob([datos as BlobPart], { type: 'image/jpeg' })))
    }
    catch(e) {
      console.error('[album]', e)
      this.error.set('No pudimos bajar la foto. Revise la conexión y vuelva a intentar.')
    }
    finally { this.bajando.set(false) }
  }

  protected readonly cerrar_foto = () => {
    const url = this.grande()
    if(url) URL.revokeObjectURL(url)
    this.grande.set(null)
    this.viendo.set(null)
  }

  protected readonly nombre_archivo = (v: Vista, n?: number) =>
    [n != null ? String(n).padStart(3, '0') : '', v.mision ? v.mision.id : 'libre', v.f.nombre ? sin_raros(v.f.nombre) : '']
      .filter(Boolean).join('-') + '.jpg'

  protected readonly descargar_foto = () => {
    const v = this.viendo(), url = this.grande()
    if(v && url) bajar(url, this.nombre_archivo(v))
  }

  protected readonly a_eliminar = signal<Vista | null>(null)

  protected readonly eliminar = () => this.escribir(async () => {
    const v = this.a_eliminar()
    if(!v) return
    await this.servicio.borrar(v.f.id)
    if(this.viendo()?.f.id === v.f.id) this.cerrar_foto()
    this.a_eliminar.set(null)
  }, 'No pudimos eliminar la foto. Revise la conexión y vuelva a intentar.')

  // ------------------------------------------------------------ descargar todas

  /** Mientras arma el zip: cuantas lleva de cuantas. */
  protected readonly progreso = signal<{ hechas: number, total: number } | null>(null)

  /** Todas las fotos enteras en un .zip, de la mas vieja a la mas nueva. De a una: con poca señal, mejor lento que fallar todo. */
  protected readonly descargar_todas = async () => {
    if(this.progreso()) return
    const fotos = [...this.fotos()].reverse()
    this.progreso.set({ hechas: 0, total: fotos.length })
    this.error.set(null)
    try {
      const archivos = []
      for(const [i, v] of fotos.entries()) {
        const datos = await this.servicio.bajar_original(v.f.id)
        if(datos) archivos.push({ nombre: this.nombre_archivo(v, i + 1), datos, fecha: new Date(v.f.creada_ms) })
        this.progreso.set({ hechas: i + 1, total: fotos.length })
      }
      bajar(armar_zip(archivos), `album-${sin_raros(this.festejada()) || 'fiesta'}.zip`)
    }
    catch(e) {
      console.error('[album]', e)
      this.error.set('No pudimos bajar todas las fotos. Revise la conexión y vuelva a intentar.')
    }
    finally { this.progreso.set(null) }
  }
}
