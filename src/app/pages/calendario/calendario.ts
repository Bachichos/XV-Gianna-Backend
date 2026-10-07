import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { Button } from '@openng/optimus-ui/button';
import { XVLayout } from '../../components/design/xv-layout/xv-layout';
import { XVDialogoLista } from '../../components/xv-dialogo-lista/xv-dialogo-lista';
import { FirebaseCitasService } from '../../services/firebase-citas';
import { contar_usos } from '../../models/listas';
import { CitaFormulario } from './cita-formulario/cita-formulario';
import { XVMes } from './mes/mes';
import { partes } from '../../models/fechas';
import { XVStorage } from '../../app.config';
import { aviso_corto, aviso_legible, bloque_fecha, CitaConId, cuando_legible, fecha_corta, horario_legible, icono_de_tipo, Mes, nombre_de_tipo, por_mes, proxima, ya_paso } from '../../models/citas';
import { guardar_vista, leer_vista, Vista } from './navegador';
import { a_google, a_ics, en_telefono, EnTelefono } from './al-telefono';
import { SelectButton } from '@openng/optimus-ui/selectbutton';
import { FormsModule } from '@angular/forms';

/** Una cita ya masticada para su tarjeta: todo lo que se muestra, calculado una vez. */
type Fila = {
  c:        CitaConId
  cuando:   string
  tipo:     string
  icono:    string
  fecha:    ReturnType<typeof bloque_fecha>
  horario:  string
  aviso:    string
  /** Para la tarjeta plegable: "1 día antes", "Martes 06/10/2026", "14:00 (1 hora)". */
  aviso_corto: string
  fecha_corta: string
  hora_corta:  string
  telefono: EnTelefono
  pasada:   boolean
}

/**
 * Las citas de la organizacion: prueba de vestido, maquillaje... Arriba las
 * que vienen, agrupadas por mes; abajo, apagadas, las que ya pasaron. La
 * escucha vive en app.ts: aca se lee XVStorage.
 */
@Component({
  imports: [XVLayout, NgTemplateOutlet, FormsModule, RouterLink, Button, SelectButton, CitaFormulario, XVDialogoLista, XVMes],
  selector: 'app-calendario',
  styleUrl: './calendario.scss',
  templateUrl: './calendario.html',
})
export class CalendarioPage {

  protected readonly cargando = computed(() => XVStorage.citas() === null || XVStorage.tipos_cita() === null)
  protected readonly error    = XVStorage.error_citas.asReadonly()

  protected readonly citas = computed(() => XVStorage.citas() ?? [])
  protected readonly zona  = computed(() => XVStorage.configuracion().evento.zona)

  private readonly a_fila = (c: CitaConId): Fila => ({
    c,
    cuando:   cuando_legible(c),
    tipo:     nombre_de_tipo(c.tipo, XVStorage.tipos_cita() ?? []),
    icono:    icono_de_tipo(c.tipo),
    fecha:    bloque_fecha(c),
    horario:  horario_legible(c),
    aviso:    aviso_legible(c),
    aviso_corto: aviso_corto(c),
    fecha_corta: fecha_corta(c),
    hora_corta:  horario_legible(c).replace(' hs', ''),
    telefono: en_telefono(c),
    pasada:   ya_paso(c, this.zona()),
  })

  /** Las que vienen, por mes. */
  protected readonly meses = computed(() => {
    const zona = this.zona()
    return por_mes(this.citas().filter(c => !ya_paso(c, zona)), zona)
      .map((m: Mes) => ({ clave: m.clave, titulo: m.titulo, filas: m.citas.map(this.a_fila) }))
  })

  /** Las que ya pasaron: la mas reciente primero. */
  protected readonly pasadas = computed(() => {
    const zona = this.zona()
    return por_mes(this.citas().filter(c => ya_paso(c, zona)), zona)
      .flatMap(m => m.citas).reverse().map(this.a_fila)
  })

  protected readonly proxima = computed(() => {
    const c = proxima(this.citas(), this.zona())
    return c ? this.a_fila(c) : null
  })

  // ------------------------------------------------------------ plegar y desplegar

  /** Lo que se toco a mano: id -> abierta o no. Lo que no se toco, sigue la regla de abajo. */
  private readonly desplegadas = signal<Record<string, boolean>>({})

  /** La proxima cita arranca desplegada; las demas, plegadas. */
  protected readonly abierta = (c: CitaConId): boolean =>
    this.desplegadas()[c.id] ?? c.id === this.proxima()?.c.id

  protected readonly alternar = (c: CitaConId) =>
    this.desplegadas.update(d => ({ ...d, [c.id]: !this.abierta(c) }))

  // ------------------------------------------------------------ al telefono (al-telefono.ts)

  // ------------------------------------------------------------ marcar lista

  private readonly servicio = inject(FirebaseCitasService)
  /** El id de la cita que se esta marcando, para el boton. */
  protected readonly marcando = signal<string | null>(null)

  /** Lista o no: se guarda en el momento. Volver a tocar la desmarca. */
  protected readonly marcar_lista = async (c: CitaConId) => {
    if(this.marcando()) return
    this.marcando.set(c.id)
    try { await this.servicio.guardar(c.id, { ...c, lista: !c.lista || undefined }) }
    catch(e) { console.error('[cita]', e) }
    finally { this.marcando.set(null) }
  }

  protected readonly a_google = (c: CitaConId) => a_google(c, this.zona())
  protected readonly a_ics    = (c: CitaConId) => a_ics(c, this.zona())

  // ------------------------------------------------------------ formulario

  protected readonly formulario_abierto = signal(false)
  /** null = alta. */
  protected readonly editando = signal<CitaConId | null>(null)
  /** Para un alta desde el mes: el dia que se toco. */
  protected readonly fecha_nueva = signal<string | null>(null)

  protected readonly nueva = (fecha: string | null = null) => {
    this.editando.set(null)
    this.fecha_nueva.set(fecha)
    this.formulario_abierto.set(true)
  }

  protected readonly editar = (c: CitaConId) => {
    this.editando.set(c)
    this.formulario_abierto.set(true)
  }

  // ------------------------------------------------------------ la vista

  protected readonly VISTAS: { valor: Vista, etiqueta: string }[] = [
    { valor: 'mes',   etiqueta: 'Mes' },
    { valor: 'lista', etiqueta: 'Lista' },
  ]

  /** Mes o lista. Se recuerda en este navegador (navegador.ts). */
  protected readonly vista = signal<Vista>(leer_vista())

  protected readonly elegir_vista = (v: Vista) => {
    this.vista.set(v)
    guardar_vista(v)
  }

  // ------------------------------------------------------------ el mes

  /** AAAA-MM-DD del dia de la fiesta, en su zona: lleva un destello en el mes. */
  protected readonly dia_fiesta = computed(() => {
    const e = XVStorage.configuracion().evento
    return partes(e.fecha, e.zona).dia
  })

  /** El dia elegido en el mes: sus citas se ven debajo. */
  protected readonly dia_elegido = signal<string | null>(null)

  protected readonly citas_del_dia = computed(() => {
    const dia = this.dia_elegido()
    if(!dia) return []
    return por_mes(this.citas().filter(c => c.fecha === dia), this.zona()).flatMap(m => m.citas).map(this.a_fila)
  })

  /** "Lunes 12 de octubre" */
  protected readonly titulo_del_dia = computed(() => {
    const dia = this.dia_elegido()
    if(!dia) return ''
    const t = new Intl.DateTimeFormat('es-AR', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' })
      .format(new Date(`${dia}T12:00:00Z`))
    return t.charAt(0).toUpperCase() + t.slice(1)
  })

  // ------------------------------------------------------------ tipos

  protected readonly tipos_abierto = signal(false)
  protected readonly tipos         = computed(() => XVStorage.tipos_cita() ?? [])
  /** Cuantas citas usa cada tipo: con alguna, no se puede quitar. */
  protected readonly usos_tipos    = computed(() => contar_usos(this.citas().map(c => c.tipo)))
  protected readonly guardar_tipos = (lista: Parameters<FirebaseCitasService['guardar_tipos']>[0]) => this.servicio.guardar_tipos(lista)
}
