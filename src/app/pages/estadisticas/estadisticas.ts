import { Component, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { XVLayout } from "../../components/design/xv-layout/xv-layout";
import { XVStorage } from '../../app.config';
import { esta_cancelada, integrantes_de, TarjetaConId } from '../../models/tarjeta';
import { link_recordatorio } from '../../models/mensaje';

/** Cuantas personas hay en cada estado. Base de todos los numeros de la pantalla. */
type Conteo = {
  total:       number
  confirmados: number
  rechazados:  number
  pendientes:  number
}

const contar = (tarjetas: TarjetaConId[]): Conteo =>
  tarjetas.reduce((c, t) => {
    for(const p of integrantes_de(t)) {
      c.total++
      if(p.estado === 'confirmado')     c.confirmados++
      else if(p.estado === 'rechazado') c.rechazados++
      else                              c.pendientes++
    }
    return c
  }, { total: 0, confirmados: 0, rechazados: 0, pendientes: 0 })

const SIN_CATEGORIA = 'Sin categoría'

/** Una tarjeta que salio y todavia le falta alguien por responder. */
export type SinResponder = {
  tarjeta:    TarjetaConId
  pendientes: number
  total:      number
  /** Respondio por algunos y le faltan otros. */
  parcial:    boolean
  link:       string
}

@Component({
  imports: [XVLayout, DatePipe],
  selector: 'app-estadisticas',
  styleUrl: './estadisticas.scss',
  templateUrl: './estadisticas.html',
})
export class EstadisticasPage {

  /** La escucha vive en app.ts: aca solo se lee lo que dejo en XVStorage. */
  protected readonly cargando = computed(() => XVStorage.tarjetas() === null)
  protected readonly error    = XVStorage.error_tarjetas.asReadonly()

  /** Las canceladas no cuentan en ningun numero. */
  private readonly activas = computed(() =>
    (XVStorage.tarjetas() ?? []).filter(t => !esta_cancelada(t))
  )

  protected readonly personas = computed(() => contar(this.activas()))

  /** La noche de la fiesta: cuantos de los confirmados ya cruzaron la puerta. */
  protected readonly ingresaron = computed(() =>
    this.activas().reduce((n, t) =>
      n + (t.personas ?? []).filter(p => p.confirmado === true && !!p.ingreso).length, 0)
  )

  protected readonly tarjetas = computed(() => {
    const activas = this.activas()
    const enviadas = activas.filter(t => !!t.fecha_envio).length
    return {
      total:       activas.length,
      enviadas,
      sin_enviar:  activas.length - enviadas,
      // Con al menos una persona respondida.
      respondidas: activas.filter(t => (t.personas ?? []).some(p => p.confirmado != null)).length,
    }
  })

  /** Personas que ya respondieron, sobre el total: la barra de avance. */
  protected readonly avance = computed(() => {
    const c = this.personas()
    const respondieron = c.confirmados + c.rechazados
    const pct = (n: number) => c.total ? n / c.total * 100 : 0
    return {
      respondieron,
      porcentaje:  Math.round(pct(respondieron)),
      confirmados: pct(c.confirmados),
      rechazados:  pct(c.rechazados),
    }
  })

  /** El instante del cierre, de la configuracion de la fiesta. */
  private readonly instante_cierre = computed(() => new Date(XVStorage.configuracion().evento.cierre).getTime())

  /** El ultimo dia para responder: el anterior al instante del cierre. */
  protected readonly cierre = computed(() => new Date(this.instante_cierre() - 1))

  /** Dias hasta el cierre. Se calcula al abrir la pantalla: no hace falta un reloj. */
  protected readonly dias_al_cierre = computed(() => Math.ceil((this.instante_cierre() - Date.now()) / 86_400_000))

  /**
   * Por categoria, con las fijas siempre en su orden. Si alguna tarjeta
   * tiene una categoria que no esta en la lista, aparece al final.
   */
  protected readonly por_categoria = computed(() => {
    const activas = this.activas()
    const categoria = (t: TarjetaConId) => t.categoria || SIN_CATEGORIA

    const nombres: string[] = [...XVStorage.configuracion().evento.categorias]
    for(const t of activas)
      if(!nombres.includes(categoria(t))) nombres.push(categoria(t))

    return nombres.map(nombre => {
      const c = contar(activas.filter(t => categoria(t) === nombre))
      const pct = (n: number) => c.total ? n / c.total * 100 : 0
      return { nombre, ...c, barra: { confirmados: pct(c.confirmados), rechazados: pct(c.rechazados) } }
    })
  })

  /**
   * A quien mandarle recordatorio: las enviadas con alguien sin responder.
   * Primero las que salieron hace mas tiempo: son las que mas esperaron.
   */
  protected readonly sin_responder = computed<SinResponder[]>(() =>
    this.activas()
      .filter(t => !!t.fecha_envio)
      .map(t => {
        const c = contar([t])
        return {
          tarjeta:    t,
          pendientes: c.pendientes,
          total:      c.total,
          parcial:    c.pendientes > 0 && c.pendientes < c.total,
          link:       link_recordatorio(t, XVStorage.configuracion().evento),
        }
      })
      .filter(f => f.pendientes > 0)
      .sort((a, b) => (a.tarjeta.fecha_envio ?? '').localeCompare(b.tarjeta.fecha_envio ?? ''))
  )

  /**
   * En personas: cuantas respondieron, cuantas no, y de las que no, cuantas
   * ya tienen la invitacion (se les puede recordar) y cuantas todavia no.
   */
  protected readonly faltan = computed(() => {
    const activas = this.activas()
    const enviadas    = contar(activas.filter(t => !!t.fecha_envio))
    const sin_enviar  = contar(activas.filter(t => !t.fecha_envio))
    const todas       = this.personas()
    return {
      respondieron:   todas.confirmados + todas.rechazados,
      sin_responder:  todas.pendientes,
      con_invitacion: enviadas.pendientes,
      sin_invitacion: sin_enviar.pendientes,
    }
  })
}
