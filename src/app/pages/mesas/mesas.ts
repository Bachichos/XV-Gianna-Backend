import { Component, computed, effect, inject, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { Select } from '@openng/optimus-ui/select';
import { MultiSelect } from '@openng/optimus-ui/multiselect';
import { InputText } from '@openng/optimus-ui/inputtext';
import { IconField } from '@openng/optimus-ui/iconfield';
import { InputIcon } from '@openng/optimus-ui/inputicon';
import { ToggleSwitch } from '@openng/optimus-ui/toggleswitch';
import { Button } from '@openng/optimus-ui/button';
import { XVLayout } from '../../components/design/xv-layout/xv-layout';
import { XVStorage } from '../../app.config';
import { FirebaseMesasService } from '../../services/firebase-mesas';
import { sin_acentos } from '../../models/texto';
import {
  armar_salon, Comensal, comensales_de, Mesa, mesa_de, nombre_de_mesa, ocupa_lugar,
  PLANO_VACIO, PRINCIPAL, Salon, salon_de, sentar_anfitriones,
} from '../../models/mesas';

/** Un numero entero de lo que haya en el campo, nunca menos que `minimo`. */
const entero = (v: unknown, minimo: number) => Math.max(minimo, Math.round(Number(v) || 0))

const TODAS = 'todas'

/** Lo que muestra la columna de la izquierda: una familia, o una persona de ella. */
type Fila =
  | { tipo: 'grupo', clave: string, tarjeta: string, categoria: string, claves: string[] }
  | { tipo: 'persona', clave: string, c: Comensal }

type VistaMesa = {
  mesa:       Mesa
  nombre:     string
  gente:      Comensal[]
  ocupados:   number
  infantiles: number
  alergias:   number
  excedida:   boolean
}

@Component({
  imports: [NgTemplateOutlet, FormsModule, CdkDropListGroup, CdkDropList, CdkDrag, Select, MultiSelect, InputText, IconField, InputIcon, ToggleSwitch, Button, XVLayout],
  selector: 'app-mesas',
  styleUrl: './mesas.scss',
  templateUrl: './mesas.html',
})
export class MesasPage {

  private readonly servicio = inject(FirebaseMesasService)

  protected readonly cargando = computed(() => XVStorage.tarjetas() === null || XVStorage.plano() === null)
  private   readonly plano    = computed(() => XVStorage.plano() ?? PLANO_VACIO)
  protected readonly festejada = computed(() => XVStorage.configuracion().evento.festejada)

  protected readonly error    = signal<string | null>(null)
  protected readonly guardando = signal(false)

  // ------------------------------------------------ la gente

  protected readonly comensales = computed(() => comensales_de(XVStorage.tarjetas() ?? [], XVStorage.anfitriones() ?? []))

  /** Quienes ocupan lugar: los que vienen y los que todavia no respondieron. */
  protected readonly personas = computed(() => this.comensales().filter(ocupa_lugar).length)

  protected readonly sin_mesa = computed(() =>
    this.comensales().filter(c => ocupa_lugar(c) && !mesa_de(this.plano(), c.clave)))

  protected readonly lugares = computed(() => this.plano().mesas.reduce((n, m) => n + m.lugares, 0))

  // ------------------------------------------------ filtros de la lista

  protected readonly busqueda  = signal('')
  protected readonly categoria = signal(TODAS)

  protected readonly categorias = computed(() => {
    const nombres = [...XVStorage.configuracion().evento.categorias]
    for(const c of this.comensales()) if(!nombres.includes(c.categoria)) nombres.push(c.categoria)
    return [{ etiqueta: 'Todas las categorías', valor: TODAS }, ...nombres.map(n => ({ etiqueta: n, valor: n }))]
  })

  /**
   * La columna "Sin mesa": cada familia con su titulo (que se arrastra
   * entera) y su gente abajo. Todo en una sola lista plana, para que cada
   * fila sea un arrastrable suelto.
   */
  protected readonly filas = computed<Fila[]>(() => {
    const texto = sin_acentos(this.busqueda())
    const cat   = this.categoria()
    const lista = this.sin_mesa().filter(c =>
      (cat === TODAS || c.categoria === cat)
      && (!texto || sin_acentos(c.nombre).includes(texto) || sin_acentos(c.tarjeta).includes(texto)))

    // La lista ya viene ordenada por tarjeta: cada vez que cambia, un titulo.
    const filas: Fila[] = []
    let grupo = null as Extract<Fila, { tipo: 'grupo' }> | null
    for(const c of lista) {
      if(grupo?.clave !== c.tarjeta_id) {
        grupo = { tipo: 'grupo', clave: c.tarjeta_id, tarjeta: c.tarjeta, categoria: c.categoria, claves: [] }
        filas.push(grupo)
      }
      grupo.claves.push(c.clave)
      filas.push({ tipo: 'persona', clave: c.clave, c })
    }
    return filas
  })

  protected readonly hay_filtro = computed(() => this.busqueda().trim() !== '' || this.categoria() !== TODAS)

  // ------------------------------------------------ las mesas

  protected readonly mesas = computed<VistaMesa[]>(() => {
    const plano = this.plano()
    return plano.mesas.map(mesa => {
      const gente    = this.comensales().filter(c => mesa_de(plano, c.clave) === mesa.id)
      const ocupan   = gente.filter(ocupa_lugar)
      return {
        mesa,
        nombre:     nombre_de_mesa(mesa, this.festejada()),
        gente,
        ocupados:   ocupan.length,
        infantiles: ocupan.filter(c => c.menu_infantil).length,
        alergias:   ocupan.filter(c => !!c.alimentacion).length,
        excedida:   ocupan.length > mesa.lugares,
      }
    })
  })

  protected readonly opciones_mesa = computed(() =>
    this.mesas().map(m => ({ etiqueta: `${m.nombre} (${m.ocupados}/${m.mesa.lugares})`, valor: m.mesa.id })))

  // ------------------------------------------------ el salon

  protected readonly salon_abierto = signal(false)
  /** El formulario del salon. Es un objeto comun: los campos lo cambian con ngModel. */
  protected s: Salon = salon_de([])
  private   lugares_tocado = false

  constructor() {
    // El formulario del salon arranca con lo que ya hay. Si todavia no hay
    // mesas, se abre solo: es lo primero que hay que hacer.
    let listo = false
    effect(() => {
      const plano = XVStorage.plano()
      if(!plano || listo) return
      listo = true
      this.cargar_salon(plano.mesas)
      if(!plano.mesas.length) this.salon_abierto.set(true)
    })
  }

  private readonly cargar_salon = (mesas: Mesa[]) => {
    this.s = salon_de(mesas)
    this.lugares_tocado = false
  }

  protected readonly tocar_lugares = () => this.lugares_tocado = true

  private readonly salon_nuevo = () => armar_salon(this.plano().mesas, {
    principal:         this.s.principal,
    lugares_principal: entero(this.s.lugares_principal, 1),
    cantidad:          Math.min(200, entero(this.s.cantidad, 0)),
    lugares:           entero(this.s.lugares, 1),
    especiales:        this.s.especiales.map(e => ({ ...e, lugares: entero(e.lugares, 1) })),
  }, this.lugares_tocado || !this.plano().mesas.length)

  /** Los anfitriones (de su propio apartado), para decir cuantos van en la principal. */
  protected readonly anfitriones = computed(() => XVStorage.anfitriones() ?? [])

  protected readonly agregar_especial = () =>
    this.s.especiales.push({ nombre: '', lugares: entero(this.s.lugares, 1) })

  protected readonly quitar_especial = (i: number) => this.s.especiales.splice(i, 1)

  /** El nombre que tendria una especial sin nombre: "Mesa especial 2". */
  protected readonly nombre_especial = (i: number) => `Mesa especial ${i + 1}`

  /** Lo que suma el salon del formulario, en vivo. */
  protected readonly totales = () => {
    const mesas = this.salon_nuevo()
    return { mesas: mesas.length, lugares: mesas.reduce((n, m) => n + m.lugares, 0) }
  }

  /** Quienes se quedarian sin mesa con el salon nuevo: estaban en una que se saca. */
  protected readonly a_liberar = () => {
    const quedan = new Set(this.salon_nuevo().map(m => m.id))
    const sacadas = this.plano().mesas.filter(m => !quedan.has(m.id))
    const claves = Object.entries(this.plano().asientos)
      .filter(([, mesa]) => sacadas.some(m => m.id === mesa)).map(([clave]) => clave)
    return { mesas: sacadas.map(m => nombre_de_mesa(m, this.festejada())), claves }
  }

  protected readonly guardar_salon = () => this.escribir(async () => {
    const mesas = this.salon_nuevo()
    await this.servicio.guardar({
      mesas,
      asientos: {
        ...Object.fromEntries(this.a_liberar().claves.map(clave => [clave, null])),
        ...sentar_anfitriones(this.plano(), this.anfitriones(), mesas),
      },
    })
    this.lugares_tocado = false
    this.salon_abierto.set(false)
  })

  protected readonly cancelar_salon = () => {
    this.cargar_salon(this.plano().mesas)
    this.salon_abierto.set(false)
  }

  // ------------------------------------------------ editar una mesa

  protected readonly editando = signal<string | null>(null)
  protected nombre_edicion  = ''
  protected lugares_edicion = 10
  /** Quienes van en la mesa que se edita. Se elige con el selector, que sirve tambien en el telefono. */
  protected gente_edicion: string[] = []

  protected readonly editar = (m: VistaMesa) => {
    this.nombre_edicion  = m.mesa.nombre ?? ''
    this.lugares_edicion = m.mesa.lugares
    this.gente_edicion   = m.gente.map(c => c.clave)
    this.editando.set(m.mesa.id)
  }

  /**
   * Para el selector de la mesa que se edita: todos los que ocupan lugar,
   * agrupados por tarjeta, mas quien ya este en esta mesa aunque no venga.
   * Quien esta en otra mesa se puede elegir igual: se lo cambia de mesa.
   */
  protected readonly opciones_gente = computed(() => {
    const id = this.editando()
    if(!id) return []
    const plano = this.plano()
    const grupos = new Map<string, { etiqueta: string, items: { etiqueta: string, valor: string }[] }>()
    for(const c of this.comensales()) {
      const donde = mesa_de(plano, c.clave)
      if(!ocupa_lugar(c) && donde !== id) continue
      const otra  = donde && donde !== id ? this.mesas().find(m => m.mesa.id === donde)?.nombre : null
      const notas = [c.menu_infantil ? 'infantil' : '', c.estado === 'rechazado' ? 'no viene' : '', otra ? `en ${otra}` : '']
        .filter(Boolean).join(' · ')
      const grupo = grupos.get(c.tarjeta_id) ?? { etiqueta: c.tarjeta, items: [] }
      grupo.items.push({ etiqueta: notas ? `${c.nombre} (${notas})` : c.nombre, valor: c.clave })
      grupos.set(c.tarjeta_id, grupo)
    }
    return [...grupos.values()]
  })

  protected readonly nombre_por_defecto = (m: Mesa) => nombre_de_mesa({ ...m, nombre: '' }, this.festejada())

  protected readonly guardar_mesa = (id: string) => this.escribir(async () => {
    const mesas = this.plano().mesas.map(m => m.id !== id ? m : {
      ...m,
      lugares: Math.max(1, Math.round(Number(this.lugares_edicion) || 1)),
      // Firestore no acepta undefined: un nombre vacio se guarda como ''.
      nombre:  this.nombre_edicion.trim(),
    })
    // Los que se eligieron vienen a esta mesa; los que estaban y se sacaron, quedan sin mesa.
    const antes   = this.comensales().filter(c => mesa_de(this.plano(), c.clave) === id).map(c => c.clave)
    const elegidos = new Set(this.gente_edicion)
    const asientos: Record<string, string | null> = {}
    for(const clave of elegidos) asientos[clave] = id
    for(const clave of antes) if(!elegidos.has(clave)) asientos[clave] = null
    await this.servicio.guardar({ mesas, asientos })
    this.editando.set(null)
  })

  /** Cuantos lugares ocuparia la mesa con lo elegido en el selector. */
  protected readonly ocupados_edicion = () =>
    this.comensales().filter(c => ocupa_lugar(c) && this.gente_edicion.includes(c.clave)).length

  // ------------------------------------------------ sentar

  /** Lo tocado, para moverlo junto: en el telefono es la forma de sentar. */
  protected readonly seleccion = signal<ReadonlySet<string>>(new Set())

  protected readonly alternar = (clave: string) => {
    const s = new Set(this.seleccion())
    if(s.has(clave)) s.delete(clave); else s.add(clave)
    this.seleccion.set(s)
  }

  /** Tocar el titulo de una familia la selecciona entera (o la suelta, si ya estaba). */
  protected readonly alternar_grupo = (claves: string[]) => {
    const s = new Set(this.seleccion())
    const todas = claves.every(c => s.has(c))
    for(const c of claves) { if(todas) s.delete(c); else s.add(c) }
    this.seleccion.set(s)
  }

  protected readonly grupo_elegido = (claves: string[]) => claves.every(c => this.seleccion().has(c))

  protected readonly limpiar_seleccion = () => this.seleccion.set(new Set())

  /** Lo que se suelta: si era parte de lo seleccionado, va todo lo seleccionado. */
  // La lista "sin mesa" lleva null como dato; cada mesa, su id.
  protected readonly soltar = (e: CdkDragDrop<any, any, string[]>) => {
    if(e.previousContainer === e.container) return
    const arrastradas = e.item.data
    const sel = this.seleccion()
    const claves = arrastradas.some(c => sel.has(c)) ? [...new Set([...sel, ...arrastradas])] : arrastradas
    this.mover(claves, e.container.data as string | null)
  }

  protected readonly pasar_a = (mesa: string | null) => this.mover([...this.seleccion()], mesa)

  protected readonly quitar = (clave: string) => this.mover([clave], null)

  private readonly mover = (claves: string[], mesa: string | null) => this.escribir(async () => {
    await this.servicio.sentar(claves, mesa)
    this.limpiar_seleccion()
  })

  private readonly escribir = async (accion: () => Promise<void>) => {
    if(this.guardando()) return
    this.guardando.set(true)
    this.error.set(null)
    try { await accion() }
    catch(e) {
      console.error('[mesas]', e)
      this.error.set('No pudimos guardar el cambio. Revise la conexión y vuelva a intentar.')
    }
    finally { this.guardando.set(false) }
  }

  protected readonly es_principal = (m: Mesa) => m.id === PRINCIPAL
  protected readonly limpiar_filtros = () => { this.busqueda.set(''); this.categoria.set(TODAS) }
}
