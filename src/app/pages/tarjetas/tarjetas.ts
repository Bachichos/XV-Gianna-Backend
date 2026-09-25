import { Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Select } from '@openng/optimus-ui/select';
import { InputText } from '@openng/optimus-ui/inputtext';
import { IconField } from '@openng/optimus-ui/iconfield';
import { InputIcon } from '@openng/optimus-ui/inputicon';
import { Button } from '@openng/optimus-ui/button';
import { TarjetaFormulario } from './tarjeta-formulario/tarjeta-formulario';
import { TarjetaEliminar } from './tarjeta-eliminar/tarjeta-eliminar';
import { TarjetaCancelar } from './tarjeta-cancelar/tarjeta-cancelar';
import { TarjetaRespuestas } from './tarjeta-respuestas/tarjeta-respuestas';
import { TarjetaQr } from './tarjeta-qr/tarjeta-qr';
import { link_whatsapp, mensaje_de } from '../../models/mensaje';
import { FirebaseTarjetasService } from '../../services/firebase-tarjetas';
import { CATEGORIAS, cupos_de, estado_de, EstadoRsvp, Integrante, integrantes_de, se_puede_eliminar, se_puede_cancelar, se_puede_enviar, esta_cancelada, TarjetaConId } from '../../models/tarjeta';
import { XVLayout } from "../../components/design/xv-layout/xv-layout";
import { XVStorage } from '../../app.config';
import { sin_acentos } from '../../models/texto';

const TODAS = 'todas';

/** El orden alfabetico elegido sobrevive a la recarga, como el riel del menu. */
const CLAVE_ORDEN = 'xv-tarjetas-orden';

/**
 * Interruptor unico del envio. En false el boton se ve pero no se puede tocar:
 * abrir WhatsApp marca la tarjeta como enviada, y eso no se deshace solo.
 * Cuando arranque el calendario de envios, poner true.
 */
const ENVIOS_HABILITADOS = false;

/** Los estados por los que tiene sentido filtrar el dia del envio. */
const ESTADOS = [
  { etiqueta: 'Todos los estados',    valor: 'todas' },
  { etiqueta: 'Pendientes de envío',  valor: 'sin_enviar' },
  { etiqueta: 'Enviadas sin responder', valor: 'sin_responder' },
  { etiqueta: 'Con confirmaciones',   valor: 'respondidas' },
  { etiqueta: 'Rechazadas',           valor: 'rechazadas' },
  { etiqueta: 'Canceladas',           valor: 'canceladas' }
];

/** Una fila ya masticada: la tarjeta y todo lo derivado, calculado una sola vez. */
export type Fila = {
  tarjeta:     TarjetaConId
  estado:      EstadoRsvp
  integrantes: Integrante[]
  cancelada:   boolean
  link:        string
}

@Component({
  imports: [DatePipe, FormsModule, Select, InputText, IconField, InputIcon, Button, TarjetaFormulario, TarjetaEliminar, TarjetaCancelar, TarjetaRespuestas, TarjetaQr, XVLayout],
  selector: 'app-tarjetas',
  styleUrl: './tarjetas.scss',
  templateUrl: './tarjetas.html',
})
export class TarjetasPage {

  /** La escucha vive en app.ts: aca solo se lee lo que dejo en XVStorage. */
  public readonly cargando = computed(() => XVStorage.tarjetas() === null);
  public readonly lista    = computed(() => XVStorage.tarjetas() ?? []);
  /** Las canceladas siguen visibles pero no cuentan en ningun total. */
  public readonly activas  = computed(() => this.lista().filter(t => !esta_cancelada(t)));
  public readonly total    = computed(() => this.activas().length);
  public readonly canceladas = computed(() => this.lista().length - this.activas().length);
  public readonly error    = XVStorage.error_tarjetas.asReadonly();


  /** Estado del modal: null = alta, con valor = edicion. */
  protected readonly formulario_abierto = signal(false)
  protected readonly editando           = signal<TarjetaConId | null>(null)

  protected readonly nueva = () => {
    this.editando.set(null)
    this.formulario_abierto.set(true)
  }

  protected readonly editar = (t: TarjetaConId) => {
    this.editando.set(t)
    this.formulario_abierto.set(true)
  }

  protected readonly eliminar_abierto = signal(false)
  protected readonly eliminando       = signal<TarjetaConId | null>(null)

  private readonly servicio = inject(FirebaseTarjetasService)

  protected readonly se_puede_eliminar = se_puede_eliminar
  protected readonly se_puede_enviar   = se_puede_enviar
  protected readonly se_puede_cancelar = se_puede_cancelar
  protected readonly mensaje_de        = mensaje_de

  protected readonly enviando = signal<string | null>(null)

  /**
   * El link abre WhatsApp por su cuenta (es un ancla, no un window.open).
   * Aca solo queda registrado que la invitacion salio: WhatsApp no le
   * devuelve nada a la app, asi que este es el unico registro posible.
   */
  protected readonly marcar_enviada = async (t: TarjetaConId) => {
    if(!se_puede_enviar(t) || this.enviando()) return
    this.enviando.set(t.id)
    try {
      await this.servicio.update(t.id, { fecha_envio: new Date().toISOString() })
    }
    catch(e) { console.error('[envio]', e) }
    finally { this.enviando.set(null) }
  }

  protected readonly qr_abierto = signal(false)
  protected readonly mostrando  = signal<TarjetaConId | null>(null)

  protected readonly ver_qr = (t: TarjetaConId) => {
    this.mostrando.set(t)
    this.qr_abierto.set(true)
  }

  protected readonly respuestas_abierto = signal(false)
  protected readonly respondiendo       = signal<TarjetaConId | null>(null)

  protected readonly responder = (t: TarjetaConId) => {
    if(esta_cancelada(t)) return
    this.respondiendo.set(t)
    this.respuestas_abierto.set(true)
  }

  protected readonly cancelar_abierto = signal(false)
  protected readonly cancelando       = signal<TarjetaConId | null>(null)

  protected readonly cancelar = (t: TarjetaConId) => {
    this.cancelando.set(t)
    this.cancelar_abierto.set(true)
  }

  protected readonly vista_previa_abierta = signal(false)

  protected readonly eliminar = (t: TarjetaConId) => {
    if(!se_puede_eliminar(t)) return
    this.eliminando.set(t)
    this.eliminar_abierto.set(true)
  }

  protected readonly envios_habilitados = ENVIOS_HABILITADOS

  protected readonly busqueda  = signal('')
  protected readonly categoria = signal<string>(TODAS)

  /** Un solo boton que da la vuelta: todas -> grupos -> individuales -> todas. */
  protected readonly tamano = signal<'todas' | 'grupo' | 'sola'>('todas')

  protected readonly alternar_tamano = () =>
    this.tamano.update(t => t === 'todas' ? 'grupo' : t === 'grupo' ? 'sola' : 'todas')

  /** Lo que el boton muestra y dice en cada vuelta. */
  protected readonly TAMANOS = {
    todas: { icono: 'pi-users', texto: 'Todas las invitaciones' },
    grupo: { icono: 'pi-users', texto: 'Solo las de más de una persona' },
    sola:  { icono: 'pi-user',  texto: 'Solo las de una sola persona' }
  } as const

  protected readonly opciones_categoria = [
    { etiqueta: 'Todas las categorías', valor: TODAS },
    ...CATEGORIAS.map(c => ({ etiqueta: c, valor: c }))
  ]

  /** Cupos totales: las personas con nombre mas los acompanantes sin nombre. */
  protected readonly personas = computed(() =>
    this.activas().reduce((suma, t) => suma + cupos_de(t), 0)
  )

  protected readonly respondidas = computed(() =>
    this.activas().filter(t => !!t.fecha_confirmacion).length
  )

  protected readonly enviadas = computed(() =>
    this.activas().filter(t => !!t.fecha_envio).length
  )

  protected readonly filtradas = computed<TarjetaConId[]>(() => {
    const texto = sin_acentos(this.busqueda())
    const cat   = this.categoria()

    return this.lista().filter(t => {
      const por_categoria = cat === TODAS || t.categoria === cat
      if(!por_categoria) return false
      if(!this.coincide_estado(t)) return false
      const tam = this.tamano()
      if(tam === 'grupo' && cupos_de(t) <= 1)  return false
      if(tam === 'sola'  && cupos_de(t) !== 1) return false
      if(!texto) return true

      return sin_acentos(t.nombre_mostrar ?? '').includes(texto)
          || (t.numero_telefono ?? '').includes(texto)
          || (t.personas ?? []).some(p => sin_acentos(p.nombre ?? '').includes(texto))
    })
  })

  /** 'az' o 'za'. Firestore devuelve la coleccion sin orden util (por id). */
  protected readonly orden = signal<'az' | 'za'>(
    localStorage.getItem(CLAVE_ORDEN) === 'za' ? 'za' : 'az'
  )

  protected readonly alternar_orden = () => {
    const orden = this.orden() === 'az' ? 'za' : 'az'
    this.orden.set(orden)
    localStorage.setItem(CLAVE_ORDEN, orden)
  }

  protected readonly ordenadas = computed<TarjetaConId[]>(() => {
    const al_reves = this.orden() === 'za' ? -1 : 1

    // Copia: sort() muta, y el array viene de un computed compartido.
    return [...this.filtradas()].sort((a, b) =>
      al_reves * (a.nombre_mostrar ?? '').localeCompare(b.nombre_mostrar ?? '', 'es', { sensitivity: 'base' })
    )
  })

  protected readonly filas = computed<Fila[]>(() =>
    this.ordenadas().map(t => ({
      tarjeta:     t,
      estado:      estado_de(t),
      integrantes: integrantes_de(t),
      cancelada:   esta_cancelada(t),
      link:        link_whatsapp(t)
    }))
  )

  protected readonly estado_filtro    = signal<string>(TODAS)
  protected readonly opciones_estado   = ESTADOS

  /**
   * Personas, no tarjetas. Cuenta sobre lo que hay a la vista: sin filtros es
   * el total de la fiesta, y con un filtro puesto responde por ese recorte.
   * Las canceladas nunca cuentan.
   */
  protected readonly conteo_personas = computed(() => {
    let confirmados = 0, rechazados = 0, pendientes = 0

    for(const f of this.filas()) {
      if(f.cancelada) continue
      for(const p of f.integrantes) {
        if(p.estado === 'confirmado')     confirmados++
        else if(p.estado === 'rechazado') rechazados++
        else                              pendientes++
      }
    }

    return { confirmados, rechazados, pendientes }
  })

  protected readonly hay_filtro = computed(() =>
    this.busqueda().trim() !== '' || this.categoria() !== TODAS
      || this.estado_filtro() !== TODAS || this.tamano() !== 'todas'
  )

  protected readonly limpiar_filtros = () => {
    this.busqueda.set('')
    this.categoria.set(TODAS)
    this.estado_filtro.set(TODAS)
    this.tamano.set('todas')
  }

  /**
   * Las canceladas solo aparecen con "Todos los estados" o con su propio
   * filtro: en cualquier otro ensuciarian la vista de trabajo.
   */
  private readonly coincide_estado = (t: TarjetaConId): boolean => {
    const f = this.estado_filtro()
    if(f === TODAS) return true
    if(f === 'canceladas') return esta_cancelada(t)
    if(esta_cancelada(t)) return false

    if(f === 'sin_enviar') return !t.fecha_envio

    const e = estado_de(t)
    if(f === 'sin_responder') return !!t.fecha_envio && e.tipo === 'pendiente'
    if(f === 'respondidas')   return e.tipo === 'respondida'
    if(f === 'rechazadas')    return e.tipo === 'rechazada'
    return true
  }

}
