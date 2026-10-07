import { Component, computed, inject, input, model, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Dialog } from '@openng/optimus-ui/dialog';
import { Button } from '@openng/optimus-ui/button';
import { Select } from '@openng/optimus-ui/select';
import { SelectButton } from '@openng/optimus-ui/selectbutton';
import { InputText } from '@openng/optimus-ui/inputtext';
import { InputNumber } from '@openng/optimus-ui/inputnumber';
import { Textarea } from '@openng/optimus-ui/textarea';
import { XVStorage } from '../../../app.config';
import { FirebasePresupuestosService } from '../../../services/firebase-presupuestos';
import { FirebaseArchivosService } from '../../../services/firebase-archivos';
import { ArchivoPreparado } from '../../../models/archivos';
import { SelectorArchivo } from '../selector-archivo/selector-archivo';
import { XVConfirmar } from '../../../components/xv-confirmar/xv-confirmar';
import { XVAvisoCampo } from '../../../components/xv-aviso-campo/xv-aviso-campo';
import {
  a_centavos, Adjunto, de_centavos, ESTADOS, EstadoPresupuesto, formatear, Moneda, MONEDAS,
  pagado, Presupuesto, PresupuestoConId, presupuesto_vacio,
} from '../../../models/presupuestos';
import { usar_o_agregar } from '../../../models/listas';

/** El valor del desplegable de rubros que abre el campo para escribir uno nuevo. */
const NUEVO_RUBRO = '__nuevo__'

/** Lo que pide confirmacion antes de hacerse. */
type Confirmar = 'estado' | null

/**
 * Alta y edicion de un presupuesto. Los pagos no se editan aca (van en la
 * pantalla del presupuesto): el formulario los conserva tal cual. Eliminar
 * tampoco: se hace desde la lista o desde la pantalla, con su papelera.
 */
@Component({
  imports: [ReactiveFormsModule, Dialog, Button, Select, SelectButton, InputText, InputNumber, Textarea, SelectorArchivo, XVConfirmar, XVAvisoCampo],
  selector: 'xv-presupuesto-formulario',
  styleUrl: './presupuesto-formulario.scss',
  templateUrl: './presupuesto-formulario.html',
})
export class PresupuestoFormulario {

  private readonly fb       = inject(FormBuilder)
  private readonly servicio = inject(FirebasePresupuestosService)
  private readonly archivos = inject(FirebaseArchivosService)

  /** Doble via con la pagina: [(abierto)]="abierto" */
  public readonly abierto = model<boolean>(false)

  /** null = alta. Con valor = edicion. */
  public readonly presupuesto = input<PresupuestoConId | null>(null)

  protected readonly es_edicion = computed(() => this.presupuesto() !== null)

  protected readonly guardando = signal(false)
  protected readonly error     = signal<string | null>(null)
  protected readonly confirmar = signal<Confirmar>(null)
  /** Se quiso guardar con algo en rojo: que se diga, aunque el campo quede lejos. */
  protected readonly bloqueado = signal(false)

  // ------------------------------------------------------------ opciones

  protected readonly opciones_rubro = computed(() => [
    ...(XVStorage.rubros() ?? []).map(r => ({ etiqueta: r.nombre, valor: r.id })),
    { etiqueta: '+ Nuevo rubro', valor: NUEVO_RUBRO },
  ])
  protected readonly opciones_estado = ESTADOS
  protected readonly opciones_moneda = MONEDAS
  /** Con una sola moneda, no hay nada que elegir: el campo no se muestra. */
  protected readonly varias_monedas  = MONEDAS.length > 1

  // ------------------------------------------------------------ formulario

  protected readonly formulario = this.fb.nonNullable.group({
    rubro:       ['', [Validators.required]],
    rubro_nuevo: ['', [Validators.maxLength(40)]],
    proveedor:   ['', [Validators.required, Validators.maxLength(80)]],
    contacto:    ['', [Validators.maxLength(120)]],
    direccion:   ['', [Validators.maxLength(200)]],
    moneda:      ['ARS' as Moneda],
    /** En pesos, con decimales: al guardar pasa a centavos. Vacio = todavia sin monto. */
    monto:       [null as number | null, [Validators.min(0)]],
    /** Se completa con hoy; si se borra, queda sin fecha. */
    fecha:       [''],
    estado:      ['pendiente' as EstadoPresupuesto],
    notas:       ['', [Validators.maxLength(5000)]],
  })

  protected readonly es_rubro_nuevo = () => this.formulario.controls.rubro.value === NUEVO_RUBRO

  // ------------------------------------------------------------ archivo

  /** El que ya tenia guardado. null si no tenia, o si se quito. */
  protected readonly archivo_actual = signal<Adjunto | null>(null)
  /** El elegido ahora, ya achicado: se sube recien al guardar. */
  protected readonly archivo_nuevo  = signal<ArchivoPreparado | null>(null)
  protected readonly preparando     = signal(false)

  // ------------------------------------------------------------ abrir

  /** Lo dispara el (onShow) del dialogo: cada vez que se abre, con lo que corresponda. */
  protected readonly reiniciar = () => {
    const p = this.presupuesto()
    const base = p ?? presupuesto_vacio(XVStorage.rubros()?.[0]?.id ?? '')

    this.error.set(null)
    this.guardando.set(false)
    this.confirmar.set(null)
    this.bloqueado.set(false)
    this.archivo_actual.set(p?.archivo ?? null)
    this.archivo_nuevo.set(null)

    this.formulario.reset({
      rubro:       base.rubro,
      rubro_nuevo: '',
      proveedor:   base.proveedor,
      contacto:    base.contacto,
      direccion:   base.direccion ?? '',
      moneda:      base.moneda,
      monto:       base.centavos == null ? null : de_centavos(base.centavos),
      fecha:       base.fecha,
      estado:      base.estado,
      notas:       base.notas,
    })
  }

  protected readonly cerrar = () => this.abierto.set(false)

  // ------------------------------------------------------------ avisos

  /** "$ 300.000" si deja de estar elegido con pagos cargados; si no, null. */
  protected readonly pagado_en_juego = (): string | null => {
    const p = this.presupuesto()
    if(!p || p.estado !== 'elegido' || this.formulario.controls.estado.value === 'elegido') return null
    const total = pagado(p)
    return total > 0 ? formatear(total, p.moneda) : null
  }

  // ------------------------------------------------------------ guardar

  protected readonly guardar = async () => {
    this.formulario.markAllAsTouched()
    const falta = this.formulario.invalid || (this.es_rubro_nuevo() && !this.formulario.controls.rubro_nuevo.value.trim())
    this.bloqueado.set(falta)
    if(falta || this.guardando() || this.preparando()) return

    // Dejar de elegir uno con pagos: primero se pregunta.
    if(this.pagado_en_juego() && this.confirmar() !== 'estado') {
      this.confirmar.set('estado')
      return
    }

    this.guardando.set(true)
    this.error.set(null)
    const existente = this.presupuesto()
    let subido: Adjunto | null = null

    try {
      const rubro = await this.rubro_elegido()

      // El archivo nuevo se sube antes: el presupuesto tiene que guardar su id.
      const nuevo = this.archivo_nuevo()
      if(nuevo) subido = await this.archivos.subir(nuevo)

      const v = this.formulario.getRawValue()
      const presupuesto: Presupuesto = {
        rubro,
        proveedor: v.proveedor.trim(),
        contacto:  v.contacto.trim(),
        direccion: v.direccion.trim() || undefined,
        moneda:    v.moneda,
        centavos:  v.monto == null ? null : a_centavos(v.monto),
        fecha:     v.fecha,
        estado:    v.estado,
        notas:     v.notas.trim(),
        archivo:   subido ?? this.archivo_actual() ?? undefined,
        pagos:     existente?.pagos ?? [],
      }

      if(existente) await this.servicio.guardar(existente.id, presupuesto)
      else          await this.servicio.crear(presupuesto)

      // El archivo viejo se borra recien ahora, con el presupuesto ya
      // guardado sin el: si se borrara antes y algo fallara, quedaria un
      // clip que no abre.
      const viejo = existente?.archivo
      if(viejo && viejo.id !== presupuesto.archivo?.id)
        await this.archivos.borrar(viejo.id).catch(e => console.warn('[archivo] no se pudo borrar el viejo', e))

      this.confirmar.set(null)
      this.abierto.set(false)
    }
    catch(e) {
      console.error('[presupuesto]', e)
      // Si se alcanzo a subir el archivo pero no se guardo el presupuesto, sobra.
      if(subido) this.archivos.borrar(subido.id).catch(() => {})
      this.error.set('No pudimos guardar el presupuesto. Revise la conexión y vuelva a intentar.')
      this.confirmar.set(null)
    }
    finally { this.guardando.set(false) }
  }

  /** El id del rubro elegido. Si es uno nuevo, primero lo agrega a la lista (o usa el que ya se llame igual). */
  private readonly rubro_elegido = async (): Promise<string> => {
    const v = this.formulario.getRawValue()
    if(v.rubro !== NUEVO_RUBRO) return v.rubro

    const { id, lista_nueva } = usar_o_agregar(v.rubro_nuevo, XVStorage.rubros() ?? [], 'r')
    if(lista_nueva) await this.servicio.guardar_rubros(lista_nueva)
    return id
  }
}
