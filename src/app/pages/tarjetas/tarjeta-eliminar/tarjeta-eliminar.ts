import { Component, computed, effect, inject, input, model, output, signal } from '@angular/core';
import { Dialog } from '@openng/optimus-ui/dialog';
import { Button } from '@openng/optimus-ui/button';
import { FirebaseTarjetasService } from '../../../services/firebase-tarjetas';
import { cupos_de, se_puede_eliminar, TarjetaConId } from '../../../models/tarjeta';

@Component({
  imports: [Dialog, Button],
  selector: 'xv-tarjeta-eliminar',
  styleUrl: './tarjeta-eliminar.scss',
  templateUrl: './tarjeta-eliminar.html',
})
export class TarjetaEliminar {

  private readonly servicio = inject(FirebaseTarjetasService)

  public readonly abierto = model<boolean>(false)
  public readonly tarjeta = input<TarjetaConId | null>(null)

  public readonly eliminado = output<string>()

  protected readonly borrando = signal(false)
  protected readonly error    = signal<string | null>(null)

  protected readonly personas = computed(() => {
    const t = this.tarjeta()
    return t ? cupos_de(t) : 0
  })

  /** Ultima linea de defensa: la pagina ya no deberia abrir el dialogo si no se puede. */
  protected readonly se_puede_eliminar = se_puede_eliminar

  constructor() {
    effect(() => {
      if(!this.abierto()) return
      this.error.set(null)
      this.borrando.set(false)
    })
  }

  protected readonly cerrar = () => this.abierto.set(false)

  protected readonly eliminar = async () => {
    const t = this.tarjeta()
    if(!t || this.borrando() || !se_puede_eliminar(t)) return

    this.borrando.set(true)
    this.error.set(null)

    try {
      await this.servicio.delete(t.id)
      this.eliminado.emit(t.id)
      this.abierto.set(false)
    }
    catch(e) {
      console.error('[tarjeta]', e)
      this.error.set('No pudimos eliminar la tarjeta. Revise la conexión y vuelva a intentar.')
    }
    finally {
      this.borrando.set(false)
    }
  }

}
