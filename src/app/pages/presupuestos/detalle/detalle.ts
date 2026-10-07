import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { Button } from '@openng/optimus-ui/button';
import { XVLayout } from '../../../components/design/xv-layout/xv-layout';
import { XVStorage } from '../../../app.config';
import { FirebasePresupuestosService } from '../../../services/firebase-presupuestos';
import { FirebaseArchivosService } from '../../../services/firebase-archivos';
import { peso_legible, restaurar } from '../../../models/archivos';
import { enlaces_de } from '../../../models/contacto';
import { Adjunto, link_mapa, monto_de, nombre_de_rubro } from '../../../models/presupuestos';
import { abrir_adjunto } from '../abrir-adjunto';
import { XVEstado } from '../estado/estado';
import { XVPagos } from '../pagos/pagos';
import { PresupuestoFormulario } from '../presupuesto-formulario/presupuesto-formulario';

/**
 * Un presupuesto, en su propia pantalla: el monto, el contacto con sus
 * botones, los pagos, las notas y el archivo. Se lee en vivo de
 * XVStorage, como la lista.
 */
@Component({
  imports: [RouterLink, Button, XVLayout, XVEstado, XVPagos, PresupuestoFormulario],
  selector: 'app-presupuesto',
  styleUrl: './detalle.scss',
  templateUrl: './detalle.html',
})
export class PresupuestoPage {

  private readonly servicio = inject(FirebasePresupuestosService)
  private readonly archivos = inject(FirebaseArchivosService)

  /** El id de la URL: /presupuestos/{id}. */
  private readonly id = toSignal(inject(ActivatedRoute).paramMap.pipe(map(p => p.get('id'))), { initialValue: null })

  protected readonly cargando = computed(() => XVStorage.presupuestos() === null || XVStorage.rubros() === null)

  protected readonly p = computed(() => (XVStorage.presupuestos() ?? []).find(x => x.id === this.id()) ?? null)

  protected readonly rubro = computed(() => {
    const p = this.p()
    return p ? nombre_de_rubro(p.rubro, XVStorage.rubros() ?? []) : ''
  })

  protected readonly monto = computed(() => {
    const p = this.p()
    return p ? monto_de(p) : ''
  })

  /** "12/10/2026", o '' si no tiene fecha. */
  protected readonly fecha = computed(() => this.p()?.fecha.split('-').reverse().join('/') ?? '')

  protected readonly enlaces = computed(() => enlaces_de(this.p()?.contacto ?? ''))

  protected readonly mapa = computed(() => link_mapa(this.p()?.direccion ?? ''))

  protected readonly peso_legible = peso_legible
  protected readonly error = signal<string | null>(null)

  // ------------------------------------------------------------ el archivo

  /** Si el archivo es una foto, se baja al entrar y se ve en la pantalla. */
  protected readonly vista_previa = signal<string | null>(null)
  protected readonly abriendo     = signal(false)

  /**
   * El id de la foto, o null. Un texto y no el presupuesto entero: asi la
   * foto se baja solo cuando cambia de verdad, y no cada vez que se carga
   * un pago o se edita una nota.
   */
  private readonly foto = computed(() => {
    const a = this.p()?.archivo
    return a?.tipo.startsWith('image/') ? a.id : null
  })

  constructor() {
    effect(onCleanup => {
      const id = this.foto()
      this.vista_previa.set(null)
      if(!id) return

      // Si se cambia de presupuesto antes de que termine de bajar, esta
      // foto ya no corresponde: se descarta.
      let vigente = true
      let url: string | null = null
      this.archivos.bajar(id)
        .then(async bajado => {
          if(!bajado || !vigente) return
          url = URL.createObjectURL(await restaurar(bajado.datos, bajado.guardado))
          if(vigente) this.vista_previa.set(url)
          else URL.revokeObjectURL(url)
        })
        .catch(e => console.warn('[vista previa]', e))
      onCleanup(() => {
        vigente = false
        if(url) URL.revokeObjectURL(url)
      })
    })
  }

  protected readonly abrir = async (adjunto: Adjunto) => {
    if(this.abriendo()) return
    this.abriendo.set(true)
    this.error.set(null)
    try { await abrir_adjunto(this.archivos, adjunto) }
    catch(e) {
      console.error('[archivo]', e)
      this.error.set(`No pudimos abrir «${adjunto.nombre}». Revise la conexión y vuelva a intentar.`)
    }
    finally { this.abriendo.set(false) }
  }

  // ------------------------------------------------------------ acciones

  protected readonly formulario_abierto = signal(false)
  protected readonly guardando = signal(false)

  /** Pasarlo a elegido sin abrir el formulario: es lo que hace falta para cargar pagos. */
  protected readonly elegir = async () => {
    const p = this.p()
    if(!p || this.guardando()) return
    this.guardando.set(true)
    this.error.set(null)
    try { await this.servicio.guardar(p.id, { ...p, estado: 'elegido' }) }
    catch(e) {
      console.error('[presupuesto]', e)
      this.error.set('No pudimos marcarlo como elegido. Revise la conexión y vuelva a intentar.')
    }
    finally { this.guardando.set(false) }
  }
}
