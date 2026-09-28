import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from '@openng/optimus-ui/inputtext';
import { Button } from '@openng/optimus-ui/button';
import { XVLayout } from '../../components/design/xv-layout/xv-layout';
import { XVStorage } from '../../app.config';
import { FirebaseAnfitrionesService } from '../../services/firebase-anfitriones';
import { Anfitrion, siguiente_id_anfitrion } from '../../models/anfitriones';

type Fila = { id: string, nombre: string, menu_infantil: boolean, alimentacion: string }

const a_fila = (a: Anfitrion): Fila =>
  ({ id: a.id, nombre: a.nombre, menu_infantil: !!a.menu_infantil, alimentacion: a.alimentacion ?? '' })

/**
 * Quienes estan sin invitacion. Se edita como un borrador: los cambios se
 * guardan todos juntos, con el boton de abajo.
 */
@Component({
  imports: [FormsModule, InputText, Button, XVLayout],
  selector: 'app-anfitriones',
  styleUrl: './anfitriones.scss',
  templateUrl: './anfitriones.html',
})
export class AnfitrionesPage {

  private readonly servicio = inject(FirebaseAnfitrionesService)

  protected readonly cargando  = computed(() => XVStorage.anfitriones() === null)
  protected readonly guardando = signal(false)
  protected readonly guardado  = signal(false)
  protected readonly error     = signal<string | null>(null)

  protected filas: Fila[] = []
  private inicial = '[]'

  constructor() {
    // Lo guardado llega en vivo. Si hay cambios sin guardar, no se pisan.
    effect(() => {
      const lista = XVStorage.anfitriones()
      if(!lista || this.sucio()) return
      this.filas = lista.map(a_fila)
      this.inicial = JSON.stringify(this.filas)
    })
  }

  protected readonly sucio = () => JSON.stringify(this.filas) !== this.inicial

  protected readonly agregar = () => {
    this.filas.push({ id: siguiente_id_anfitrion(this.filas), nombre: '', menu_infantil: false, alimentacion: '' })
    this.guardado.set(false)
  }

  protected readonly quitar = (i: number) => this.filas.splice(i, 1)

  protected readonly descartar = () => {
    this.filas = JSON.parse(this.inicial)
    this.error.set(null)
  }

  protected readonly guardar = async () => {
    if(this.guardando()) return
    this.guardando.set(true)
    this.error.set(null)

    // Sin nombre no se guarda. Los opcionales vacios no se escriben.
    const lista: Anfitrion[] = this.filas
      .filter(f => f.nombre.trim())
      .map(f => ({
        id: f.id,
        nombre: f.nombre.trim(),
        ...(f.menu_infantil ? { menu_infantil: true } : {}),
        ...(f.alimentacion.trim() ? { alimentacion: f.alimentacion.trim() } : {}),
      }))

    try {
      await this.servicio.guardar(lista)
      this.filas = lista.map(a_fila)
      this.inicial = JSON.stringify(this.filas)
      this.guardado.set(true)
    }
    catch(e) {
      console.error('[anfitriones]', e)
      this.error.set('No se pudo guardar. Revise la conexión y vuelva a intentar.')
    }
    finally { this.guardando.set(false) }
  }
}
