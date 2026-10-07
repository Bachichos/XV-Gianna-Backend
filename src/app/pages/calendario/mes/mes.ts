import { Component, computed, input, model, output, signal } from '@angular/core';
import { CitaConId, hoja_del_mes, mover_mes } from '../../../models/citas';
import { hoy } from '../../../models/fechas';

/** Cuantas citas se escriben en un dia, en la compu. Las demas, "+2 más". */
const POR_DIA = 3

/**
 * La hoja de un mes, de lunes a domingo. En la compu cada dia muestra sus
 * citas escritas; en el telefono no entran, y van como puntitos.
 *
 * Tocar un dia con citas lo elige (la pagina muestra sus citas debajo);
 * tocar uno vacio pide una cita nueva para ese dia. Tocar una cita escrita
 * la abre para editar.
 */
@Component({
  selector: 'xv-mes',
  styleUrl: './mes.scss',
  templateUrl: './mes.html',
})
export class XVMes {

  public readonly citas = input.required<CitaConId[]>()
  public readonly zona  = input.required<string>()
  /** AAAA-MM-DD del dia de la fiesta: lleva un destello. */
  public readonly fiesta = input<string | null>(null)

  /** El dia elegido, AAAA-MM-DD. Doble via: la pagina muestra sus citas. */
  public readonly elegido = model<string | null>(null)

  public readonly editar = output<CitaConId>()
  public readonly nueva  = output<string>()

  protected readonly POR_DIA = POR_DIA
  protected readonly SEMANA  = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

  /** El mes que se ve, AAAA-MM. Arranca en el de hoy. */
  protected readonly mes = signal(hoy().slice(0, 7))
  protected readonly hoy = hoy()

  protected readonly hoja = computed(() => hoja_del_mes(this.mes(), this.citas(), this.zona()))

  /** Otro mes: el dia elegido era del anterior, se suelta. */
  private readonly ir_a = (mes: string) => {
    this.mes.set(mes)
    this.elegido.set(null)
  }

  protected readonly anterior  = () => this.ir_a(mover_mes(this.mes(), -1))
  protected readonly siguiente = () => this.ir_a(mover_mes(this.mes(), 1))
  protected readonly a_hoy     = () => this.ir_a(this.hoy.slice(0, 7))

  protected readonly es_mes_actual = computed(() => this.mes() === this.hoy.slice(0, 7))

  protected readonly tocar_dia = (fecha: string, cuantas: number) => {
    if(cuantas === 0) this.nueva.emit(fecha)
    else this.elegido.set(this.elegido() === fecha ? null : fecha)
  }

  /** "lunes 12 de octubre, 2 citas", para quien usa lector de pantalla. */
  protected readonly etiqueta = (fecha: string, cuantas: number): string => {
    const dia = new Intl.DateTimeFormat('es-AR', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' })
      .format(new Date(`${fecha}T12:00:00Z`))
    return cuantas === 0 ? `${dia}, sin citas: agregar una`
      : `${dia}, ${cuantas} ${cuantas === 1 ? 'cita' : 'citas'}`
  }
}
