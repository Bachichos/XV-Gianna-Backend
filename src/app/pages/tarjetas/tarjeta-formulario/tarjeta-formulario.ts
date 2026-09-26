import { Component, computed, inject, input, model, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormArray, FormBuilder, FormControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Dialog } from '@openng/optimus-ui/dialog';
import { Button } from '@openng/optimus-ui/button';
import { Select } from '@openng/optimus-ui/select';
import { InputText } from '@openng/optimus-ui/inputtext';
import { FirebaseTarjetasService } from '../../../services/firebase-tarjetas';
import { XVStorage } from '../../../app.config';
import { estado_de, fusionar_personas, integrantes_de, siguiente_id_persona, Persona, Tarjeta, TarjetaConId } from '../../../models/tarjeta';

/**
 * El prefijo es solo una ayuda para escribir: lo que se guarda sigue siendo el
 * numero entero en un unico campo. Argentina lleva el 9 adentro porque es lo
 * que wa.me exige para los moviles; sin el, el link abre un chat vacio. No hay
 * opcion de fijo: las invitaciones se mandan por WhatsApp, o sea a moviles.
 */
const PREFIJOS = [
    { pais: 'Argentina', bandera: 'ar',   etiqueta: '+54 9',     valor: '549' },
    { pais: 'España',    bandera: 'es',   etiqueta: '+34',       valor: '34'  },
    { pais: 'Otro país', bandera: 'otro', etiqueta: 'Otro país', valor: ''    }
];

const PREFIJO_POR_DEFECTO = '549';

/** Al editar hay que deshacer la union. Gana el prefijo mas largo que encaje. */
const partir_telefono = (numero: string): { prefijo: string, resto: string } => {
    const candidatos = PREFIJOS.map(p => p.valor)
                               .filter(Boolean)
                               .sort((a, b) => b.length - a.length);

    const prefijo = candidatos.find(p => numero.startsWith(p) && numero.length > p.length) ?? '';
    return { prefijo, resto: numero.slice(prefijo.length) };
};

/** Solo digitos, con codigo de pais y sin el +. Es lo que pide wa.me. */
const telefono_valido = (c: AbstractControl): ValidationErrors | null => {
    const v = (c.value ?? '') as string;
    if(!v) return null;
    // El campo guarda la parte local: lo que se valida es el numero completo.
    const prefijo = (c.parent?.get('prefijo')?.value ?? '') as string;
    return /^\d{10,15}$/.test(prefijo + v) ? null : { telefono: true };
};

@Component({
  imports: [ReactiveFormsModule, Dialog, Button, Select, InputText],
  selector: 'xv-tarjeta-formulario',
  styleUrl: './tarjeta-formulario.scss',
  templateUrl: './tarjeta-formulario.html',
})
export class TarjetaFormulario {

  private readonly fb       = inject(FormBuilder)
  private readonly servicio = inject(FirebaseTarjetasService)

  /** Doble via con la pagina: [(abierto)]="abierto" */
  public readonly abierto = model<boolean>(false)

  /** null = alta. Con valor = edicion. */
  public readonly tarjeta = input<TarjetaConId | null>(null)

  public readonly guardado = output<string>()

  protected readonly guardando = signal(false)
  protected readonly error     = signal<string | null>(null)

  protected readonly es_edicion = computed(() => this.tarjeta() !== null)

  /**
   * Las categorias de la configuracion. Si la tarjeta que se edita tiene una
   * que ya no esta (se cambio el nombre), se ofrece igual: si no, el
   * formulario la perderia sin avisar.
   */
  protected readonly opciones_categoria = computed(() => {
    const nombres = [...XVStorage.configuracion().evento.categorias]
    const actual = this.tarjeta()?.categoria
    if(actual && !nombres.includes(actual)) nombres.push(actual)
    return nombres.map(c => ({ etiqueta: c, valor: c }))
  })
  protected readonly opciones_prefijo   = PREFIJOS

  /** Lo que respondio el invitado: se muestra, no se toca. */
  protected readonly respuesta = computed(() => {
    const t = this.tarjeta()
    return t ? estado_de(t) : null
  })

  protected readonly integrantes = computed(() => {
    const t = this.tarjeta()
    return t ? integrantes_de(t) : []
  })

  protected readonly formulario = this.fb.nonNullable.group({
    nombre_mostrar:   ['', [Validators.required, Validators.maxLength(60)]],
    categoria:        ['', [Validators.required]],
    prefijo:          [PREFIJO_POR_DEFECTO],
    /** Solo la parte local: al guardar se le pega el prefijo. */
    numero_telefono:  ['', [Validators.required, telefono_valido]],
    /**
     * Solo los nombres. Los ids van aparte, en un array paralelo, y las filas
     * se enlazan con [formControl] en vez de [formGroupName]: asi el enlace
     * apunta a la instancia del control y no a una posicion, que es lo que
     * hacia que la primera fila quedara conectada a un control viejo.
     */
    personas:         this.fb.array<FormControl<string>>([])
  })

  private ids: string[] = []

  constructor() {
    // Cambiar de pais cambia el largo del numero completo: el campo tiene que
    // volver a validarse solo, o queda en rojo (o en verde) por el pais viejo.
    this.formulario.controls.prefijo.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.formulario.controls.numero_telefono.updateValueAndValidity())
  }

  protected get personas(): FormArray<FormControl<string>> {
    return this.formulario.controls.personas
  }

  /**
   * Lo dispara el (onShow) del dialogo, que es el unico momento garantizado:
   * ocurre cada vez que se abre, sin depender de en que orden se actualicen
   * las senales del padre.
   */
  protected readonly reiniciar = () => {
    const t = this.tarjeta()

    this.error.set(null)
    this.guardando.set(false)

    // reset() borra valores, touched y dirty de una sola vez. patchValue no:
    // dejaba el formulario en rojo con los datos de la tarjeta anterior.
    this.personas.clear()
    this.ids = []

    // Un alta arranca en Argentina; una edicion, en el pais que ya tenia.
    const telefono = t?.numero_telefono
      ? partir_telefono(t.numero_telefono)
      : { prefijo: PREFIJO_POR_DEFECTO, resto: '' }

    this.formulario.reset({
      nombre_mostrar:   t?.nombre_mostrar ?? '',
      categoria:        t?.categoria      ?? '',
      prefijo:          telefono.prefijo,
      numero_telefono:  telefono.resto,
      personas:         []
    })

    const iniciales = t?.personas?.length ? t.personas : [{ id: 'p1', nombre: '' }]
    for(const p of iniciales) this.agregar_fila(p.id, p.nombre ?? '')

    this.formulario.markAsPristine()
    this.formulario.markAsUntouched()
  }

  private readonly agregar_fila = (id: string, nombre: string) => {
    this.ids.push(id)
    this.personas.push(this.fb.nonNullable.control(nombre, [Validators.maxLength(60)]))
  }

  protected readonly id_de = (i: number): string => this.ids[i] ?? ''

  /** Si esa persona ya contesto, su fila no se puede quitar sin perder el dato. */
  protected readonly tiene_respuesta = (i: number): boolean => {
    const id = this.id_de(i)
    return (this.tarjeta()?.personas ?? []).some(p => p.id === id && p.confirmado != null)
  }

  protected readonly agregar_persona = () => {
    const actuales: Persona[] = this.ids.map(id => ({ id, nombre: '' }))
    this.agregar_fila(siguiente_id_persona(actuales), '')
  }

  protected readonly quitar_persona = (i: number) => {
    this.personas.removeAt(i)
    this.ids.splice(i, 1)
    if(this.personas.length === 0) this.agregar_persona()
  }

  /** Deja solo digitos mientras se escribe: si pegan "+54 9 11 4433-2211" queda limpio. */
  protected readonly normalizar_telefono = (evento: Event) => {
    const input = evento.target as HTMLInputElement
    const solo_digitos = input.value.replace(/\D/g, '')
    if(solo_digitos !== input.value) input.value = solo_digitos
    this.formulario.controls.numero_telefono.setValue(solo_digitos)
  }

  protected readonly cerrar = () => this.abierto.set(false)

  protected readonly guardar = async () => {
    this.formulario.markAllAsTouched()
    if(this.formulario.invalid || this.guardando()) return

    this.guardando.set(true)
    this.error.set(null)

    const v         = this.formulario.getRawValue()
    const existente = this.tarjeta()

    // El formulario solo edita nombres. fusionar_personas() les vuelve a pegar
    // el estado que cada persona ya tenia, para que guardar un nombre nunca
    // pueda borrar una confirmacion del invitado.
    const personas: Persona[] = fusionar_personas(
      existente?.personas,
      v.personas.map((nombre, i) => ({ id: this.id_de(i), nombre: nombre.trim() }))
    )

    const editables = {
      nombre_mostrar:  v.nombre_mostrar.trim(),
      categoria:       v.categoria,
      numero_telefono: v.prefijo + v.numero_telefono,
      personas
    }

    try {
      if(existente) {
        await this.servicio.update(existente.id, editables)
        this.guardado.emit(existente.id)
      }
      else {
        const nueva: Tarjeta = {
          ...editables,
          fecha_confirmacion: null,
          fecha_envio:        null,
          fecha_cancelacion:  null
        }
        this.guardado.emit(await this.servicio.add(nueva))
      }

      this.abierto.set(false)
    }
    catch(e) {
      console.error('[tarjeta]', e)
      this.error.set('No pudimos guardar la tarjeta. Revise la conexión y vuelva a intentar.')
    }
    finally {
      this.guardando.set(false)
    }
  }

}
