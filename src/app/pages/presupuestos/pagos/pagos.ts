import { Component, computed, effect, inject, input, signal, untracked } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '@openng/optimus-ui/button';
import { InputText } from '@openng/optimus-ui/inputtext';
import { InputNumber } from '@openng/optimus-ui/inputnumber';
import { XVStorage } from '../../../app.config';
import { FirebasePresupuestosService } from '../../../services/firebase-presupuestos';
import { FirebaseArchivosService } from '../../../services/firebase-archivos';
import { ArchivoPreparado } from '../../../models/archivos';
import { SelectorArchivo } from '../selector-archivo/selector-archivo';
import { XVConfirmar } from '../../../components/xv-confirmar/xv-confirmar';
import { XVAvisoCampo } from '../../../components/xv-aviso-campo/xv-aviso-campo';
import {
  a_centavos, Adjunto, de_centavos, falta, formatear, monto_de as monto_del_presupuesto, Pago, pagado, siguiente_id_pago,
} from '../../../models/presupuestos';
import { hoy } from '../../../models/fechas';
import { abrir_adjunto } from '../abrir-adjunto';

/**
 * Los pagos de un presupuesto elegido, dentro de su pantalla: cuanto se
 * pago (con una barra), la lista y, abajo, el formulario para cargar uno
 * nuevo o corregir uno. Cada pago se guarda en el momento, no hace falta
 * un "guardar todo".
 */
@Component({
  imports: [ReactiveFormsModule, Button, InputText, InputNumber, SelectorArchivo, XVConfirmar, XVAvisoCampo],
  selector: 'xv-pagos',
  styleUrl: './pagos.scss',
  templateUrl: './pagos.html',
})
export class XVPagos {

  private readonly fb       = inject(FormBuilder)
  private readonly servicio = inject(FirebasePresupuestosService)
  private readonly archivos = inject(FirebaseArchivosService)

  /** El id del presupuesto: se lee en vivo de XVStorage, asi la lista se ve al dia. */
  public readonly presupuesto_id = input<string | null>(null)

  protected readonly presupuesto = computed(() =>
    (XVStorage.presupuestos() ?? []).find(p => p.id === this.presupuesto_id()) ?? null)

  /** Los pagos, del mas viejo al mas nuevo. */
  protected readonly pagos = computed(() =>
    [...(this.presupuesto()?.pagos ?? [])].sort((a, b) => a.fecha.localeCompare(b.fecha)))

  protected readonly resumen = computed(() => {
    const p = this.presupuesto()
    if(!p) return null
    return {
      total:  monto_del_presupuesto(p),
      pagado: formatear(pagado(p), p.moneda),
      falta:  formatear(falta(p), p.moneda),
      /** Cuanto de la barra se llena, de 0 a 100. Sin monto, no hay barra. */
      avance: p.centavos ? Math.min(100, Math.round(pagado(p) / p.centavos * 100)) : null,
    }
  })

  constructor() {
    // Otro presupuesto (se entro a otro desde "otros del rubro"): el
    // formulario vuelve a empezar, sin arrastrar un pago a medio cargar.
    effect(() => {
      this.presupuesto_id()
      untracked(() => this.limpiar())
    })
  }

  protected readonly guardando = signal(false)
  protected readonly error     = signal<string | null>(null)
  /** El id del pago que se esta corrigiendo; null = uno nuevo. */
  protected readonly editando  = signal<string | null>(null)
  /** El pago que pide confirmacion para borrarse. */
  protected readonly a_borrar  = signal<Pago | null>(null)
  protected readonly abriendo  = signal<string | null>(null)

  protected readonly monto_de = (g: Pago) => formatear(g.centavos, this.presupuesto()?.moneda ?? 'ARS')
  protected readonly fecha_de = (g: Pago) => g.fecha.split('-').reverse().join('/')

  // ------------------------------------------------------------ formulario

  protected readonly formulario = this.fb.nonNullable.group({
    fecha:    ['', [Validators.required]],
    concepto: ['', [Validators.required, Validators.maxLength(60)]],
    monto:    [null as number | null, [Validators.required, Validators.min(0.01)]],
  })

  protected readonly comprobante_actual = signal<Adjunto | null>(null)
  protected readonly comprobante_nuevo  = signal<ArchivoPreparado | null>(null)
  protected readonly preparando         = signal(false)

  /** Si con este pago se paga de mas, cuanto. Avisa, no impide: puede haber un extra. */
  protected readonly excede = (): string | null => {
    const p = this.presupuesto()
    if(!p || p.centavos == null) return null
    const otros = p.pagos.filter(g => g.id !== this.editando()).reduce((s, g) => s + g.centavos, 0)
    const sobra = otros + a_centavos(this.formulario.controls.monto.value) - p.centavos
    return sobra > 0 ? formatear(sobra, p.moneda) : null
  }

  /** El formulario vacio, listo para un pago nuevo. */
  protected readonly limpiar = () => {
    this.editando.set(null)
    this.a_borrar.set(null)
    this.error.set(null)
    this.comprobante_actual.set(null)
    this.comprobante_nuevo.set(null)
    this.formulario.reset({ fecha: hoy(), concepto: this.pagos().length ? '' : 'Seña', monto: null })
  }

  protected readonly corregir = (g: Pago) => {
    this.limpiar()
    this.editando.set(g.id)
    this.comprobante_actual.set(g.comprobante ?? null)
    this.formulario.reset({ fecha: g.fecha, concepto: g.concepto, monto: de_centavos(g.centavos) })
  }

  // ------------------------------------------------------------ guardar y borrar

  protected readonly guardar = async () => {
    this.formulario.markAllAsTouched()
    const p = this.presupuesto()
    if(!p || this.formulario.invalid || this.guardando() || this.preparando()) return

    this.guardando.set(true)
    this.error.set(null)
    const anterior = p.pagos.find(g => g.id === this.editando())
    let subido: Adjunto | null = null

    try {
      const nuevo = this.comprobante_nuevo()
      if(nuevo) subido = await this.archivos.subir(nuevo)

      const v = this.formulario.getRawValue()
      const pago: Pago = {
        id:          anterior?.id ?? siguiente_id_pago(p.pagos),
        fecha:       v.fecha,
        concepto:    v.concepto.trim(),
        centavos:    a_centavos(v.monto),
        comprobante: subido ?? this.comprobante_actual() ?? undefined,
      }
      const pagos = anterior ? p.pagos.map(g => g.id === pago.id ? pago : g) : [...p.pagos, pago]
      await this.servicio.guardar(p.id, { ...p, pagos })

      // El comprobante viejo, recien con el pago ya guardado sin el.
      const viejo = anterior?.comprobante
      if(viejo && viejo.id !== pago.comprobante?.id)
        await this.archivos.borrar(viejo.id).catch(e => console.warn('[archivo] no se pudo borrar el viejo', e))

      this.limpiar()
    }
    catch(e) {
      console.error('[pago]', e)
      if(subido) this.archivos.borrar(subido.id).catch(() => {})
      this.error.set('No pudimos guardar el pago. Revise la conexión y vuelva a intentar.')
    }
    finally { this.guardando.set(false) }
  }

  /** Borra el pago ya confirmado (a_borrar) y despues su comprobante. */
  protected readonly borrar = async () => {
    const p = this.presupuesto()
    const g = this.a_borrar()
    if(!p || !g || this.guardando()) return

    this.guardando.set(true)
    this.error.set(null)
    try {
      await this.servicio.guardar(p.id, { ...p, pagos: p.pagos.filter(x => x.id !== g.id) })
      if(g.comprobante) await this.archivos.borrar(g.comprobante.id).catch(e => console.warn('[archivo]', e))
      if(this.editando() === g.id) this.limpiar()
      this.a_borrar.set(null)
    }
    catch(e) {
      console.error('[pago]', e)
      this.error.set('No pudimos borrar el pago. Revise la conexión y vuelva a intentar.')
    }
    finally { this.guardando.set(false) }
  }

  protected readonly abrir = async (adjunto: Adjunto) => {
    if(this.abriendo()) return
    this.abriendo.set(adjunto.id)
    this.error.set(null)
    try { await abrir_adjunto(this.archivos, adjunto) }
    catch(e) {
      console.error('[archivo]', e)
      this.error.set(`No pudimos abrir «${adjunto.nombre}». Revise la conexión y vuelva a intentar.`)
    }
    finally { this.abriendo.set(null) }
  }
}
