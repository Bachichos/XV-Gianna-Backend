import { Component, ElementRef, inject, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import { XVStorage } from '../../app.config';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@openng/optimus-ui/tabs';
import { InputText } from '@openng/optimus-ui/inputtext';
import { Textarea } from '@openng/optimus-ui/textarea';
import { Select } from '@openng/optimus-ui/select';
import { MultiSelect } from '@openng/optimus-ui/multiselect';
import { SelectButton } from '@openng/optimus-ui/selectbutton';
import { ToggleSwitch } from '@openng/optimus-ui/toggleswitch';
import { Button } from '@openng/optimus-ui/button';
import { XVLayout } from "../../components/design/xv-layout/xv-layout";
import { FirebaseConfiguracionService } from '../../services/firebase-configuracion';
import { Configuracion, POR_DEFECTO } from '../../models/configuracion';
import { Borrador, a_borrador, a_configuracion, textos_de } from './borrador';
import { TEMAS_DISPONIBLES } from '../../models/temas';
import { ICONOS, MARCADORES, marcadores_de, SECCIONES, Seccion, es_opcional } from './etiquetas';
import { ZONAS } from './fechas';
import { URL_INVITACION } from '../../models/mensaje';

/**
 * La invitacion que se muestra en la vista previa. Trabajando en la compu
 * es la del `bun run dev` del frontend; publicado, la de verdad. Tiene que
 * ser una version con el modo ?vista-previa (frontend/src/App.svelte).
 */
const INVITACION = location.hostname === 'localhost' ? 'http://localhost:5173' : URL_INVITACION

@Component({
  imports: [XVLayout, FormsModule, Tabs, TabList, Tab, TabPanels, TabPanel, InputText, Textarea, Select, MultiSelect, SelectButton, ToggleSwitch, Button],
  selector: 'app-configuracion',
  styleUrl: './configuracion.scss',
  templateUrl: './configuracion.html',
})
export class ConfiguracionPage implements OnInit, OnDestroy {

  private readonly servicio = inject(FirebaseConfiguracionService)

  protected readonly estado = signal<'cargando' | 'lista' | 'error'>('cargando')

  /** La pestana abierta. La comparten la barra de la compu y el desplegable del telefono. */
  protected readonly pestana = signal('fiesta')
  protected readonly pestanas = [
    { etiqueta: 'Fiesta',                 valor: 'fiesta' },
    { etiqueta: 'Programa e información', valor: 'programa' },
    { etiqueta: 'Regalo',                 valor: 'regalo' },
    { etiqueta: 'Tarjetas y mensajes',    valor: 'mensajes' },
    { etiqueta: 'Secciones y textos',     valor: 'secciones' },
    { etiqueta: 'Tema',                   valor: 'tema' },
  ]

  /** Lo que se edita. Es un objeto comun: los campos lo cambian directo con ngModel. */
  protected b!: Borrador
  /** El borrador tal como se cargo o se guardo, para saber si hay cambios. */
  private inicial = ''

  protected readonly guardando     = signal(false)
  protected readonly guardado      = signal(false)
  protected readonly error_guardar = signal<string | null>(null)
  protected readonly coordenadas_aviso = signal<string | null>(null)

  // ------------------------------------------------ vista previa

  private readonly previa = viewChild<ElementRef<HTMLIFrameElement>>('previa')
  protected readonly url_vista_previa = inject(DomSanitizer).bypassSecurityTrustResourceUrl(`${INVITACION}/?vista-previa`)
  protected readonly vista_previa_lista = signal(false)
  /** Se puede ocultar, para trabajar con mas ancho. */
  protected readonly ver_previa = signal(true)
  private ultimo_enviado = ''
  private reloj: ReturnType<typeof setInterval> | undefined

  /** La invitacion avisa que ya puede recibir la configuracion. */
  private readonly al_recibir = (e: MessageEvent) => {
    if(e.origin !== new URL(INVITACION).origin || e.data?.tipo !== 'xv-vista-previa-lista') return
    this.vista_previa_lista.set(true)
    this.enviar_vista_previa(true)
  }

  /**
   * Le manda a la vista previa lo que se esta editando, sin guardar. Solo
   * si cambio algo desde la ultima vez, salvo que se pida forzar.
   */
  protected readonly enviar_vista_previa = (forzar = false) => {
    const ventana = this.previa()?.nativeElement.contentWindow
    if(!ventana || !this.b) return
    let config: string
    try { config = JSON.stringify(a_configuracion(this.b)) }
    catch { return }   // una fecha a medio escribir: se manda cuando este completa
    if(!forzar && config === this.ultimo_enviado) return
    this.ultimo_enviado = config
    ventana.postMessage({ tipo: 'xv-configuracion', configuracion: JSON.parse(config) }, new URL(INVITACION).origin)
  }

  // Lo que la plantilla necesita a mano.
  protected readonly zonas      = ZONAS
  protected readonly iconos     = ICONOS
  protected readonly secciones  = SECCIONES
  protected readonly temas      = TEMAS_DISPONIBLES
  /** Las categorias del borrador, para elegir quien ve el regalo. */
  protected readonly nombres_categorias = () => this.b.categorias.map(c => c.nombre.trim()).filter(Boolean)

  protected readonly mensajes = [
    { id: 'invitacion'   as const, etiqueta: 'Invitación',   ayuda: 'Se manda una sola vez, desde Tarjetas, con el botón Enviar.' },
    { id: 'recordatorio' as const, etiqueta: 'Recordatorio', ayuda: 'Para quien todavía no respondió. Se manda desde Estadísticas, las veces que haga falta.' },
  ]
  /** Cada dato de los mensajes: que se pone y de donde sale, para saber donde cambiarlo. */
  protected readonly marcadores_mensaje = [
    { clave: 'nombre',    que: 'A quién va la tarjeta, por ejemplo "Familia Pérez".',
                          donde: 'En cada tarjeta: Tarjetas de invitados → editar → "Nombre de la invitación".' },
    { clave: 'link',      que: 'El link personal de la invitación de esa tarjeta. No puede faltar.',
                          donde: 'No se cambia: se arma solo para cada tarjeta.' },
    { clave: 'festejada', que: 'A quién se festeja.',
                          donde: 'Configuración → Fiesta → "A quién se festeja".' },
    { clave: 'fecha',     que: 'El día de la fiesta, por ejemplo "Sábado 3 de abril de 2027".',
                          donde: 'Configuración → Fiesta → Cuándo → "Empieza".' },
    { clave: 'cierre',    que: 'El último día para confirmar, por ejemplo "13 de marzo".',
                          donde: 'Configuración → Fiesta → Cuándo → "Último día para confirmar".' },
  ]

  /** El {cierre} tal como se va a leer, con la fecha que esta en el borrador: "13 de marzo". */
  protected readonly ejemplo_cierre = () => {
    if(!this.b?.ultimo_dia) return '13 de marzo'
    return new Intl.DateTimeFormat('es-AR', { day: 'numeric', month: 'long', timeZone: 'UTC' })
      .format(new Date(`${this.b.ultimo_dia}T12:00:00Z`))
  }

  protected readonly por_defecto_mensaje = (id: 'invitacion' | 'recordatorio') => POR_DEFECTO.evento.mensajes[id]
  protected readonly marcadores = MARCADORES
  protected readonly es_opcional = es_opcional
  protected readonly claves = (o: Record<string, string>) => Object.keys(o)

  protected readonly opciones_alergias = [
    { etiqueta: 'En la tarjeta de cada persona que viene', valor: 'por_persona' },
    { etiqueta: 'Una sola pregunta general, abajo',        valor: 'general' },
  ]
  protected readonly opciones_regalo = [
    { etiqueta: 'Todos',              valor: 'todos' },
    { etiqueta: 'Algunas categorías', valor: 'algunas' },
  ]

  async ngOnInit() {
    window.addEventListener('message', this.al_recibir)
    // Los campos cambian el borrador directo: se mira cada un rato si hay algo nuevo.
    this.reloj = setInterval(() => this.enviar_vista_previa(), 300)
    try {
      this.cargar(await this.servicio.leer())
      this.estado.set('lista')
    }
    catch(e) {
      console.error('[configuracion]', e)
      this.estado.set('error')
    }
  }

  ngOnDestroy() {
    window.removeEventListener('message', this.al_recibir)
    clearInterval(this.reloj)
  }

  private readonly cargar = (c: Configuracion) => {
    this.b = a_borrador(c)
    this.inicial = JSON.stringify(this.b)
  }

  protected readonly sucio = () => JSON.stringify(this.b) !== this.inicial

  protected readonly por_defecto = (s: Seccion, t: string) => textos_de(s)[t] ?? ''

  /** El marcador que el texto nuevo perdio, o null si los tiene todos (o esta vacio). */
  protected readonly falta_marcador = (s: Seccion, t: string): string | null => {
    const nuevo = this.b.secciones[s].textos[t]?.trim()
    if(!nuevo) return null
    return marcadores_de(this.por_defecto(s, t)).find(m => !nuevo.includes(m)) ?? null
  }

  /** Por que no se puede guardar todavia, o null. */
  protected readonly problema = (): string | null => {
    const b = this.b
    if(!b.festejada.trim())                         return 'Falta a quién se festeja.'
    if(!b.fecha_dia || !b.fecha_hora)               return 'Falta la fecha y hora de inicio.'
    if(!b.termina_dia || !b.termina_hora)           return 'Falta cuándo termina.'
    if(!b.ultimo_dia)                               return 'Falta el último día para confirmar.'
    if(!Number.isFinite(Number(b.salon.latitud)) || !Number.isFinite(Number(b.salon.longitud)))
                                                    return 'Las coordenadas tienen que ser números.'
    const categorias = b.categorias.map(c => c.nombre.trim())
    if(categorias.some(c => !c))                    return 'Hay una categoría sin nombre.'
    if(new Set(categorias).size !== categorias.length) return 'Hay dos categorías con el mismo nombre.'
    if(!b.mensajes.invitacion.includes('{link}') || !b.mensajes.recordatorio.includes('{link}'))
                                                    return 'A un mensaje de WhatsApp le falta {link}.'
    if(b.regalo.para === 'algunas' && !b.regalo.categorias.length)
                                                    return 'Elija al menos una categoría para el regalo.'
    for(const s of SECCIONES)
      for(const t of Object.keys(s.textos))
        if(this.falta_marcador(s.id, t))            return `En "${s.nombre}" hay un texto al que le falta un dato entre llaves.`
    return null
  }

  /**
   * Del link largo de Google Maps. El pin del lugar viene como !3d(lat)!4d(lng);
   * si no esta, sirve el centro del mapa, @lat,lng.
   */
  protected readonly sacar_coordenadas = (link: string) => {
    this.coordenadas_aviso.set(null)
    if(!link.trim()) return
    const pin    = /!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/.exec(link)
    const centro = /@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/.exec(link)
    const m = pin ?? centro
    if(m) {
      this.b.salon.latitud  = Number(m[1])
      this.b.salon.longitud = Number(m[2])
      this.b.link_largo = ''
    }
    else if(/goo\.gl|maps\.app/.test(link))
      this.coordenadas_aviso.set('Ese es el link corto. Ábralo en el navegador, copie el link largo de la barra de direcciones y péguelo acá.')
    else
      this.coordenadas_aviso.set('No encontramos coordenadas en ese link.')
  }

  protected readonly mover = <T>(lista: T[], i: number, paso: -1 | 1) => {
    const j = i + paso
    if(j < 0 || j >= lista.length) return
    ;[lista[i], lista[j]] = [lista[j], lista[i]]
  }

  protected readonly quitar = <T>(lista: T[], i: number) => lista.splice(i, 1)

  protected readonly descartar = () => {
    this.b = JSON.parse(this.inicial)
    this.error_guardar.set(null)
    this.guardado.set(false)
  }

  protected readonly guardar = async () => {
    if(this.guardando() || this.problema()) return
    this.guardando.set(true)
    this.error_guardar.set(null)

    try {
      const c = a_configuracion(this.b)
      await Promise.all([
        this.servicio.guardar('evento', c.evento),
        this.servicio.guardar('secciones', c.secciones),
        this.servicio.guardar('tema', c.tema),
      ])
      this.cargar(c)
      // Tarjetas y Estadisticas usan las categorias y los mensajes nuevos al toque.
      XVStorage.configuracion.set(c)
      this.guardado.set(true)
    }
    catch(e) {
      console.error('[configuracion]', e)
      this.error_guardar.set('No se pudo guardar. Revise la conexión y vuelva a intentar.')
    }
    finally { this.guardando.set(false) }
  }
}
