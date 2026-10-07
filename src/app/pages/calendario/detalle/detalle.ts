import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { Button } from '@openng/optimus-ui/button';
import { XVLayout } from '../../../components/design/xv-layout/xv-layout';
import { XVStorage } from '../../../app.config';
import { aviso_legible, horario_legible, icono_de_tipo, nombre_de_tipo, ya_paso } from '../../../models/citas';
import { link_mapa } from '../../../models/presupuestos';
import { a_google, a_ics, en_telefono } from '../al-telefono';
import { CitaFormulario } from '../cita-formulario/cita-formulario';
import { FirebaseCitasService } from '../../../services/firebase-citas';

/**
 * Una cita, en su propia pantalla: cuando, donde, las notas enteras y
 * pasarla al telefono. Se lee en vivo de XVStorage, como la lista.
 */
@Component({
  imports: [RouterLink, Button, XVLayout, CitaFormulario],
  selector: 'app-cita',
  styleUrl: './detalle.scss',
  templateUrl: './detalle.html',
})
export class CitaPage {

  private readonly id = toSignal(inject(ActivatedRoute).paramMap.pipe(map(p => p.get('id'))), { initialValue: null })

  protected readonly cargando = computed(() => XVStorage.citas() === null || XVStorage.tipos_cita() === null)
  protected readonly c        = computed(() => (XVStorage.citas() ?? []).find(x => x.id === this.id()) ?? null)
  private   readonly zona     = computed(() => XVStorage.configuracion().evento.zona)

  protected readonly tipo     = computed(() => { const c = this.c(); return c ? nombre_de_tipo(c.tipo, XVStorage.tipos_cita() ?? []) : '' })
  protected readonly icono    = computed(() => icono_de_tipo(this.c()?.tipo ?? ''))
  protected readonly horario  = computed(() => { const c = this.c(); return c ? horario_legible(c) : '' })
  protected readonly aviso    = computed(() => { const c = this.c(); return c ? aviso_legible(c) : '' })
  protected readonly pasada   = computed(() => { const c = this.c(); return c ? ya_paso(c, this.zona()) : false })
  protected readonly telefono = computed(() => { const c = this.c(); return c ? en_telefono(c) : 'no' })
  protected readonly mapa     = computed(() => link_mapa(this.c()?.lugar ?? ''))

  /** "Martes 6 de octubre de 2026" */
  protected readonly fecha = computed(() => {
    const c = this.c()
    if(!c) return ''
    const t = new Intl.DateTimeFormat('es-AR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
      .format(new Date(`${c.fecha}T12:00:00Z`))
    return t.charAt(0).toUpperCase() + t.slice(1)
  })

  protected readonly a_google = () => { const c = this.c(); if(c) a_google(c, this.zona()) }
  protected readonly a_ics    = () => { const c = this.c(); if(c) a_ics(c, this.zona()) }

  protected readonly formulario_abierto = signal(false)

  private readonly servicio = inject(FirebaseCitasService)
  protected readonly marcando = signal(false)

  /** Lista o no: se guarda en el momento. */
  protected readonly marcar_lista = async () => {
    const c = this.c()
    if(!c || this.marcando()) return
    this.marcando.set(true)
    try { await this.servicio.guardar(c.id, { ...c, lista: !c.lista || undefined }) }
    catch(e) { console.error('[cita]', e) }
    finally { this.marcando.set(false) }
  }
}
