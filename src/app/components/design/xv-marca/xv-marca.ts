import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dialog } from '@openng/optimus-ui/dialog';
import { Button } from '@openng/optimus-ui/button';
import { InputText } from '@openng/optimus-ui/inputtext';
import { XVStorage } from '../../../app.config';
import { preparar_logo } from '../../../models/marca';
import { FirebaseConfiguracionService } from '../../../services/firebase-configuracion';

/** El dialogo del lapiz del menu: el nombre del evento y su logo. */
@Component({
  imports: [FormsModule, Dialog, Button, InputText],
  selector: 'xv-marca',
  styleUrl: './xv-marca.scss',
  templateUrl: './xv-marca.html',
})
export class XVMarca {

  private readonly servicio = inject(FirebaseConfiguracionService)

  public readonly abierto = model<boolean>(false)

  protected nombre = ''
  protected readonly logo      = signal<string | null>(null)
  protected readonly guardando = signal(false)
  protected readonly error     = signal<string | null>(null)

  /** Al abrir: lo que esta guardado. */
  protected readonly reiniciar = () => {
    const m = XVStorage.marca()
    this.nombre = m.nombre
    this.logo.set(m.logo)
    this.error.set(null)
    this.guardando.set(false)
  }

  protected readonly elegir = async (evento: Event) => {
    const input = evento.target as HTMLInputElement
    const archivo = input.files?.[0]
    input.value = ''   // asi se puede volver a elegir el mismo archivo
    if(!archivo) return

    this.error.set(null)
    try { this.logo.set(await preparar_logo(archivo)) }
    catch { this.error.set('No se pudo leer esa imagen. Pruebe con un PNG o un JPG.') }
  }

  protected readonly guardar = async () => {
    const nombre = this.nombre.trim()
    if(!nombre || this.guardando()) return

    this.guardando.set(true)
    this.error.set(null)
    const marca = { nombre, logo: this.logo() }

    try {
      await this.servicio.guardar_marca(marca)
      XVStorage.marca.set(marca)
      this.abierto.set(false)
    }
    catch(e) {
      console.error('[marca]', e)
      this.error.set('No se pudo guardar. Revise la conexión y vuelva a intentar.')
    }
    finally { this.guardando.set(false) }
  }
}
