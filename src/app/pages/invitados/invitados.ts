import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from '@openng/optimus-ui/select';
import { InputText } from '@openng/optimus-ui/inputtext';
import { IconField } from '@openng/optimus-ui/iconfield';
import { InputIcon } from '@openng/optimus-ui/inputicon';
import { Button } from '@openng/optimus-ui/button';
import { XVLayout } from '../../components/design/xv-layout/xv-layout';
import { Escaner } from './escaner/escaner';
import { XVStorage } from '../../app.config';
import { FirebaseTarjetasService } from '../../services/firebase-tarjetas';
import { Invitado, invitados_confirmados, sin_indefinidos } from '../../models/tarjeta';
import { sin_acentos } from '../../models/texto';

const TODOS = 'todos';

const VISTAS = [
  { etiqueta: 'Todos',          valor: TODOS },
  { etiqueta: 'Falta que lleguen', valor: 'faltan' },
  { etiqueta: 'Ya ingresaron',  valor: 'ingresaron' }
];

@Component({
  imports: [FormsModule, Select, InputText, IconField, InputIcon, Button, XVLayout, Escaner],
  selector: 'app-invitados',
  styleUrl: './invitados.scss',
  templateUrl: './invitados.html',
})
export class InvitadosPage {

  private readonly servicio = inject(FirebaseTarjetasService)

  protected readonly cargando = computed(() => XVStorage.tarjetas() === null)

  /** La lista viva: se reordena sola cuando alguien confirma o entra. */
  protected readonly todos = computed(() => invitados_confirmados(XVStorage.tarjetas() ?? []))

  protected readonly ingresaron = computed(() => this.todos().filter(i => i.ingreso).length)
  protected readonly faltan     = computed(() => this.todos().length - this.ingresaron())

  protected readonly escaner_abierto = signal(false)

  protected readonly busqueda = signal('')
  protected readonly vista    = signal<string>(TODOS)
  protected readonly vistas   = VISTAS

  /** Mientras se escribe en Firestore, para no tocar dos veces la misma fila. */
  protected readonly marcando = signal<string | null>(null)
  protected readonly error    = signal<string | null>(null)

  protected readonly filtrados = computed<Invitado[]>(() => {
    const texto = sin_acentos(this.busqueda())
    const vista = this.vista()

    return this.todos().filter(i => {
      if(vista === 'faltan'     && i.ingreso)  return false
      if(vista === 'ingresaron' && !i.ingreso) return false
      if(!texto) return true

      return sin_acentos(i.nombre).includes(texto)
          || sin_acentos(i.tarjeta_nombre).includes(texto)
    })
  })

  protected readonly hay_filtro = computed(() =>
    this.busqueda().trim() !== '' || this.vista() !== TODOS
  )

  protected readonly limpiar = () => {
    this.busqueda.set('')
    this.vista.set(TODOS)
  }

  protected readonly clave = (i: Invitado) => `${i.tarjeta_id}/${i.persona_id}`

  /**
   * Marca o desmarca el ingreso de una sola persona. Escribe el array de
   * personas completo de esa tarjeta, tocando unicamente a quien corresponde.
   */
  protected readonly alternar_ingreso = async (invitado: Invitado) => {
    if(this.marcando()) return

    const tarjeta = (XVStorage.tarjetas() ?? []).find(t => t.id === invitado.tarjeta_id)
    if(!tarjeta) return

    this.marcando.set(this.clave(invitado))
    this.error.set(null)

    const entra = !invitado.ingreso
    const ahora = new Date().toISOString()

    const personas = (tarjeta.personas ?? []).map(p =>
      p.id === invitado.persona_id
        ? sin_indefinidos({ ...p, ingreso: entra ? ahora : undefined })
        : p
    )

    try {
      await this.servicio.update(tarjeta.id, { personas })
    }
    catch(e) {
      console.error('[ingreso]', e)
      this.error.set('No pudimos registrar el ingreso. Revise la conexión y vuelva a intentar.')
    }
    finally {
      this.marcando.set(null)
    }
  }

}
