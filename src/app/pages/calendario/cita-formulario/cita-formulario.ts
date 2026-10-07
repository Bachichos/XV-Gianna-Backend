import { Component, computed, inject, input, model, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Dialog } from '@openng/optimus-ui/dialog';
import { Button } from '@openng/optimus-ui/button';
import { Select } from '@openng/optimus-ui/select';
import { InputText } from '@openng/optimus-ui/inputtext';
import { Textarea } from '@openng/optimus-ui/textarea';
import { ToggleSwitch } from '@openng/optimus-ui/toggleswitch';
import { XVStorage } from '../../../app.config';
import { FirebaseCitasService } from '../../../services/firebase-citas';
import { Cita, cita_vacia, CitaConId, DURACIONES, nombre_de_tipo, RECORDATORIOS } from '../../../models/citas';
import { usar_o_agregar } from '../../../models/listas';
import { XVConfirmar } from '../../../components/xv-confirmar/xv-confirmar';
import { XVAvisoCampo } from '../../../components/xv-aviso-campo/xv-aviso-campo';

/** El valor del desplegable de tipos que abre el campo para escribir uno nuevo. */
const NUEVO_TIPO = '__nuevo__'

/** Un desplegable no se lleva bien con null como valor: "sin aviso" va como -1. */
const SIN_AVISO = -1

/** Alta y edicion de una cita. */
@Component({
  imports: [ReactiveFormsModule, Dialog, Button, Select, InputText, Textarea, ToggleSwitch, XVConfirmar, XVAvisoCampo],
  selector: 'xv-cita-formulario',
  styleUrl: './cita-formulario.scss',
  templateUrl: './cita-formulario.html',
})
export class CitaFormulario {

  private readonly fb       = inject(FormBuilder)
  private readonly servicio = inject(FirebaseCitasService)

  /** Doble via con la pagina: [(abierto)]="abierto" */
  public readonly abierto = model<boolean>(false)

  /** null = alta. Con valor = edicion. */
  public readonly cita = input<CitaConId | null>(null)

  /** Para un alta: el dia que se toco en la vista del mes. null = hoy. */
  public readonly fecha = input<string | null>(null)

  protected readonly es_edicion = computed(() => this.cita() !== null)

  protected readonly guardando = signal(false)
  protected readonly error     = signal<string | null>(null)
  protected readonly confirmar = signal(false)
  /** Se quiso guardar con algo en rojo: que se diga, aunque el campo quede lejos. */
  protected readonly bloqueado = signal(false)

  // ------------------------------------------------------------ opciones

  protected readonly opciones_tipo = computed(() => [
    ...(XVStorage.tipos_cita() ?? []).map(t => ({ etiqueta: t.nombre, valor: t.id })),
    { etiqueta: '+ Nuevo tipo', valor: NUEVO_TIPO },
  ])

  protected readonly opciones_duracion     = DURACIONES
  protected readonly opciones_recordatorio = RECORDATORIOS.map(r => ({ etiqueta: r.etiqueta, valor: r.valor ?? SIN_AVISO }))

  // ------------------------------------------------------------ formulario

  protected readonly formulario = this.fb.nonNullable.group({
    titulo:       ['', [Validators.required, Validators.maxLength(80)]],
    tipo:         ['', [Validators.required]],
    tipo_nuevo:   ['', [Validators.maxLength(40)]],
    fecha:        ['', [Validators.required]],
    todo_el_dia:  [false],
    hora:         ['10:00'],
    duracion:     [60],
    lugar:        ['', [Validators.maxLength(120)]],
    recordatorio: [1440],
    notas:        ['', [Validators.maxLength(5000)]],
  })

  protected readonly es_tipo_nuevo = () => this.formulario.controls.tipo.value === NUEVO_TIPO
  protected readonly todo_el_dia   = () => this.formulario.controls.todo_el_dia.value

  constructor() {
    // Elegir el tipo propone el titulo ("Prueba de vestido"), si todavia
    // esta vacio o tenia el del tipo anterior: lo escrito a mano no se pisa.
    let tipo_anterior = ''
    this.formulario.controls.tipo.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(id => {
        const titulo  = this.formulario.controls.titulo
        const anterior = tipo_anterior && tipo_anterior !== NUEVO_TIPO ? nombre_de_tipo(tipo_anterior, XVStorage.tipos_cita() ?? []) : ''
        if(id && id !== NUEVO_TIPO && (!titulo.value.trim() || titulo.value === anterior))
          titulo.setValue(nombre_de_tipo(id, XVStorage.tipos_cita() ?? []))
        tipo_anterior = id
      })
  }

  /** Lo dispara el (onShow) del dialogo: cada vez que se abre, con lo que corresponda. */
  protected readonly reiniciar = () => {
    const c = this.cita()
    const base = c ?? { ...cita_vacia(''), ...(this.fecha() ? { fecha: this.fecha()! } : {}) }

    this.error.set(null)
    this.guardando.set(false)
    this.confirmar.set(false)
    this.bloqueado.set(false)

    this.formulario.reset({
      titulo:       base.titulo,
      tipo:         base.tipo,
      tipo_nuevo:   '',
      fecha:        base.fecha,
      todo_el_dia:  base.hora === null,
      hora:         base.hora ?? '10:00',
      duracion:     base.duracion,
      lugar:        base.lugar,
      recordatorio: base.recordatorio ?? SIN_AVISO,
      notas:        base.notas,
    })
  }

  protected readonly cerrar = () => this.abierto.set(false)

  // ------------------------------------------------------------ guardar

  protected readonly guardar = async () => {
    this.formulario.markAllAsTouched()
    const v = this.formulario.getRawValue()
    const falta = this.formulario.invalid
      || (this.es_tipo_nuevo() && !v.tipo_nuevo.trim())
      || (!v.todo_el_dia && !v.hora)
    this.bloqueado.set(falta)
    if(falta || this.guardando()) return

    this.guardando.set(true)
    this.error.set(null)
    const existente = this.cita()

    try {
      const cita: Cita = {
        titulo:       v.titulo.trim(),
        tipo:         await this.tipo_elegido(),
        fecha:        v.fecha,
        hora:         v.todo_el_dia ? null : v.hora,
        duracion:     v.duracion,
        lugar:        v.lugar.trim(),
        notas:        v.notas.trim(),
        recordatorio: v.recordatorio === SIN_AVISO ? null : v.recordatorio,
        // El formulario no la toca: se marca desde la tarjeta. Sin esto, editar la borraria.
        lista:        existente?.lista || undefined,
      }
      if(existente) await this.servicio.guardar(existente.id, cita)
      else          await this.servicio.crear(cita)
      this.abierto.set(false)
    }
    catch(e) {
      console.error('[cita]', e)
      this.error.set('No pudimos guardar la cita. Revise la conexión y vuelva a intentar.')
    }
    finally { this.guardando.set(false) }
  }

  /** El id del tipo elegido. Si es uno nuevo, primero lo agrega a la lista (o usa el que ya se llame igual). */
  private readonly tipo_elegido = async (): Promise<string> => {
    const v = this.formulario.getRawValue()
    if(v.tipo !== NUEVO_TIPO) return v.tipo
    const { id, lista_nueva } = usar_o_agregar(v.tipo_nuevo, XVStorage.tipos_cita() ?? [], 't')
    if(lista_nueva) await this.servicio.guardar_tipos(lista_nueva)
    return id
  }

  // ------------------------------------------------------------ eliminar

  /** Primer toque: pregunta. Segundo: elimina. */
  protected readonly eliminar = async () => {
    const c = this.cita()
    if(!c || this.guardando()) return
    if(!this.confirmar()) { this.confirmar.set(true); return }

    this.guardando.set(true)
    this.error.set(null)
    try {
      await this.servicio.borrar(c.id)
      this.confirmar.set(false)
      this.abierto.set(false)
    }
    catch(e) {
      console.error('[cita]', e)
      this.error.set('No pudimos eliminar la cita. Revise la conexión y vuelva a intentar.')
      this.confirmar.set(false)
    }
    finally { this.guardando.set(false) }
  }
}
