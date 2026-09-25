import { Component, inject, OnInit, signal } from '@angular/core';
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
import { Configuracion } from '../../models/configuracion';
import { Borrador, a_borrador, a_configuracion, textos_de } from './borrador';
import { TEMAS_DISPONIBLES } from '../../models/temas';
import { CATEGORIAS, CIERRE_CONFIRMACIONES } from '../../models/tarjeta';
import { ICONOS, MARCADORES, marcadores_de, SECCIONES, Seccion, es_opcional } from './etiquetas';
import { ZONAS } from './fechas';

@Component({
  imports: [XVLayout, FormsModule, Tabs, TabList, Tab, TabPanels, TabPanel, InputText, Textarea, Select, MultiSelect, SelectButton, ToggleSwitch, Button],
  selector: 'app-configuracion',
  styleUrl: './configuracion.scss',
  templateUrl: './configuracion.html',
})
export class ConfiguracionPage implements OnInit {

  private readonly servicio = inject(FirebaseConfiguracionService)

  protected readonly estado = signal<'cargando' | 'lista' | 'error'>('cargando')

  /** Lo que se edita. Es un objeto comun: los campos lo cambian directo con ngModel. */
  protected b!: Borrador
  /** El borrador tal como se cargo o se guardo, para saber si hay cambios. */
  private inicial = ''

  protected readonly guardando     = signal(false)
  protected readonly guardado      = signal(false)
  protected readonly error_guardar = signal<string | null>(null)
  protected readonly coordenadas_aviso = signal<string | null>(null)

  // Lo que la plantilla necesita a mano.
  protected readonly zonas      = ZONAS
  protected readonly iconos     = ICONOS
  protected readonly secciones  = SECCIONES
  protected readonly temas      = TEMAS_DISPONIBLES
  protected readonly categorias = [...CATEGORIAS]
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

  /** El ultimo dia que dejan responder las reglas de Firebase, escrito. */
  protected readonly ultimo_dia_de_la_regla = new Intl.DateTimeFormat('es-AR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(CIERRE_CONFIRMACIONES.getTime() - 1))

  async ngOnInit() {
    try {
      this.cargar(await this.servicio.leer())
      this.estado.set('lista')
    }
    catch(e) {
      console.error('[configuracion]', e)
      this.estado.set('error')
    }
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
      this.guardado.set(true)
    }
    catch(e) {
      console.error('[configuracion]', e)
      this.error_guardar.set('No se pudo guardar. Revise la conexión y vuelva a intentar.')
    }
    finally { this.guardando.set(false) }
  }
}
