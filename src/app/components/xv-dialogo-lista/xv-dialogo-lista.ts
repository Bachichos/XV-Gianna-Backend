import { Component, inject, input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dialog } from '@openng/optimus-ui/dialog';
import { Button } from '@openng/optimus-ui/button';
import { InputText } from '@openng/optimus-ui/inputtext';
import { Nombrado, siguiente_id } from '../../models/listas';

/**
 * Una lista de nombres para editar a mano: los rubros de los presupuestos,
 * los tipos de cita. Renombrar, agregar y quitar; se edita como un
 * borrador y se guarda todo junto. Lo que esta en uso no se puede quitar:
 * quedaria huerfano.
 *
 *   <xv-dialogo-lista [(abierto)]="..." titulo="Rubros" prefijo="r"
 *                     [lista]="rubros()" [usos]="usos()" [guardar]="guardar_rubros" />
 */
@Component({
  imports: [FormsModule, Dialog, Button, InputText],
  selector: 'xv-dialogo-lista',
  styleUrl: './xv-dialogo-lista.scss',
  templateUrl: './xv-dialogo-lista.html',
})
export class XVDialogoLista {

  /** Doble via con la pagina: [(abierto)]="abierto" */
  public readonly abierto = model<boolean>(false)

  public readonly titulo      = input.required<string>()
  public readonly ayuda       = input('')
  public readonly placeholder = input('')
  /** Con que letra empiezan los ids nuevos: 'r' da r12, r13... */
  public readonly prefijo     = input.required<string>()
  public readonly lista       = input.required<Nombrado[]>()
  /** Cuantos usan cada id. Con alguno, no se puede quitar. */
  public readonly usos        = input<Record<string, number>>({})
  /** Que hacer con la lista al guardar. Si falla, el dialogo lo muestra. */
  public readonly guardar     = input.required<(lista: Nombrado[]) => Promise<void>>()

  protected readonly guardando = signal(false)
  protected readonly error     = signal<string | null>(null)

  protected filas: Nombrado[] = []

  protected readonly usos_de = (id: string) => this.usos()[id] ?? 0

  /** Lo dispara el (onShow) del dialogo: arranca de lo guardado. */
  protected readonly reiniciar = () => {
    this.filas = this.lista().map(x => ({ ...x }))
    this.error.set(null)
    this.guardando.set(false)
  }

  protected readonly agregar = () =>
    this.filas.push({ id: siguiente_id(this.prefijo(), this.filas), nombre: '' })

  protected readonly quitar = (i: number) => this.filas.splice(i, 1)

  /** Lo que impide guardar, o null. */
  protected readonly problema = (): string | null => {
    const nombres = this.filas.map(x => x.nombre.trim().toLocaleLowerCase('es'))
    if(nombres.some(n => !n)) return 'Hay uno sin nombre: escríbalo o quítelo.'
    if(new Set(nombres).size !== nombres.length) return 'Hay dos con el mismo nombre.'
    return null
  }

  protected readonly cerrar = () => this.abierto.set(false)

  protected readonly confirmar = async () => {
    if(this.problema() || this.guardando()) return
    this.guardando.set(true)
    this.error.set(null)
    try {
      await this.guardar()(this.filas.map(x => ({ id: x.id, nombre: x.nombre.trim() })))
      this.abierto.set(false)
    }
    catch(e) {
      console.error(`[${this.titulo()}]`, e)
      this.error.set('No pudimos guardar los cambios. Revise la conexión y vuelva a intentar.')
    }
    finally { this.guardando.set(false) }
  }
}
