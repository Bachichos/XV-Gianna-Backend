import { Component, computed, inject, signal } from '@angular/core';
import { Button } from '@openng/optimus-ui/button';
import { RouterLink } from '@angular/router';
import { XVLayout } from '../../components/design/xv-layout/xv-layout';
import { PresupuestoFormulario } from './presupuesto-formulario/presupuesto-formulario';
import { XVDialogoLista } from '../../components/xv-dialogo-lista/xv-dialogo-lista';
import { FirebasePresupuestosService } from '../../services/firebase-presupuestos';
import { contar_usos } from '../../models/listas';
import { XVEstado } from './estado/estado';
import { XVConfirmar } from '../../components/xv-confirmar/xv-confirmar';
import { XVStorage } from '../../app.config';
import {
  archivos_de, falta, ordenar, formatear, Moneda, monto_de, pagado, PresupuestoConId,
  Rubro, rubros_sin_elegir, totales,
} from '../../models/presupuestos';

/** Una fila ya masticada: el presupuesto y sus numeros, calculados una vez. */
type Fila = {
  p:       PresupuestoConId
  monto:   string
  /** Solo en los elegidos. avance: de 0 a 100; null si no tiene monto contra que medir. */
  pagos:   { pagado: string, falta: string, avance: number | null } | null
}

type Grupo = { id: string, nombre: string, filas: Fila[] }

/**
 * Los presupuestos de la fiesta: cuanto sale cada cosa, cual se eligio y
 * cuanto se le pago. La escucha vive en app.ts: aca se lee XVStorage.
 */
@Component({
  imports: [XVLayout, Button, PresupuestoFormulario, XVDialogoLista, XVEstado, XVConfirmar, RouterLink],
  selector: 'app-presupuestos',
  styleUrl: './presupuestos.scss',
  templateUrl: './presupuestos.html',
})
export class PresupuestosPage {

  protected readonly cargando = computed(() => XVStorage.presupuestos() === null || XVStorage.rubros() === null)
  protected readonly error    = XVStorage.error_presupuestos.asReadonly()

  protected readonly presupuestos = computed(() => XVStorage.presupuestos() ?? [])
  protected readonly rubros       = computed(() => XVStorage.rubros() ?? [])

  /** Lo elegido, lo pagado y lo que falta, una linea por moneda. */
  protected readonly resumen = computed(() =>
    Object.entries(totales(this.presupuestos())).map(([moneda, t]) => ({
      elegido: formatear(t.elegido, moneda as Moneda),
      pagado:  formatear(t.pagado,  moneda as Moneda),
      falta:   formatear(t.falta,   moneda as Moneda),
    })))

  /** "Fotografía, DJ / Música": rubros con presupuestos pero ninguno elegido. */
  protected readonly sin_elegir = computed(() =>
    rubros_sin_elegir(this.rubros(), this.presupuestos()).map(r => r.nombre).join(', '))

  /**
   * Un grupo por rubro, en el orden de la lista de rubros; los que no
   * tienen presupuestos no aparecen. Si un presupuesto quedo con un rubro
   * que ya no existe, va al final, en "Sin rubro": que nunca desaparezca.
   */
  protected readonly grupos = computed((): Grupo[] => {
    const a_fila = (p: PresupuestoConId): Fila => ({
      p,
      monto: monto_de(p),
      pagos: p.estado === 'elegido'
        ? {
            pagado: formatear(pagado(p), p.moneda),
            falta:  formatear(falta(p), p.moneda),
            avance: p.centavos ? Math.min(100, Math.round(pagado(p) / p.centavos * 100)) : null,
          }
        : null,
    })
    const rubros = this.rubros()
    const grupos = rubros
      .map(r => ({ id: r.id, nombre: r.nombre, filas: ordenar(this.presupuestos().filter(p => p.rubro === r.id)).map(a_fila) }))
      .filter(g => g.filas.length > 0)

    const huerfanos = this.presupuestos().filter(p => !rubros.some(r => r.id === p.rubro))
    if(huerfanos.length) grupos.push({ id: '', nombre: 'Sin rubro', filas: ordenar(huerfanos).map(a_fila) })
    return grupos
  })

  // ------------------------------------------------------------ formulario

  protected readonly formulario_abierto = signal(false)
  /** null = alta. */
  protected readonly editando = signal<PresupuestoConId | null>(null)

  protected readonly nuevo = () => {
    this.editando.set(null)
    this.formulario_abierto.set(true)
  }

  protected readonly editar = (p: PresupuestoConId) => {
    this.editando.set(p)
    this.formulario_abierto.set(true)
  }

  protected readonly rubros_abierto = signal(false)
  /** Cuantos presupuestos usa cada rubro: con alguno, no se puede quitar. */
  protected readonly usos_rubros    = computed(() => contar_usos(this.presupuestos().map(p => p.rubro)))
  protected readonly guardar_rubros = (lista: Rubro[]) => this.servicio.guardar_rubros(lista)

  // ------------------------------------------------------------ eliminar

  private readonly servicio = inject(FirebasePresupuestosService)

  protected readonly a_eliminar = signal<PresupuestoConId | null>(null)
  protected readonly eliminando = signal(false)
  protected readonly error_eliminar = signal<string | null>(null)

  protected readonly cuantos_archivos = (p: PresupuestoConId) => archivos_de(p).length

  protected readonly eliminar = async () => {
    const p = this.a_eliminar()
    if(!p || this.eliminando()) return
    this.eliminando.set(true)
    this.error_eliminar.set(null)
    try {
      await this.servicio.borrar(p)
      this.a_eliminar.set(null)
    }
    catch(e) {
      console.error('[presupuesto]', e)
      this.error_eliminar.set('No pudimos eliminar el presupuesto. Revise la conexión y vuelva a intentar.')
    }
    finally { this.eliminando.set(false) }
  }
}
