import { Component, effect, model, signal } from '@angular/core';
import { Dialog } from '@openng/optimus-ui/dialog';
import { Button } from '@openng/optimus-ui/button';
import { XVStorage } from '../../../app.config';
import { descargar_lista, ORDENES, OrdenLista } from '../lista-pdf';
import { PLANO_VACIO } from '../../../models/mesas';

/**
 * Pregunta como ordenar la lista y la descarga en PDF. Cada opcion descarga
 * al tocarla: no hay un segundo boton de "Descargar".
 */
@Component({
  imports: [Dialog, Button],
  selector: 'xv-descargar-lista',
  styleUrl: './descargar-lista.scss',
  templateUrl: './descargar-lista.html',
})
export class DescargarLista {

  public readonly abierto = model<boolean>(false)

  protected readonly ordenes   = ORDENES
  protected readonly generando = signal<OrdenLista | null>(null)
  protected readonly error     = signal<string | null>(null)

  constructor() {
    effect(() => {
      if(!this.abierto()) return
      this.error.set(null)
    })
  }

  protected readonly cerrar = () => this.abierto.set(false)

  protected readonly descargar = async (orden: OrdenLista) => {
    if(this.generando()) return

    this.generando.set(orden)
    this.error.set(null)

    const evento = XVStorage.configuracion().evento

    try {
      await descargar_lista({
        tarjetas:   XVStorage.tarjetas() ?? [],
        categorias: evento.categorias,
        titulo:     evento.titulo,
        festejada:  evento.festejada,
        plano:      XVStorage.plano() ?? PLANO_VACIO,
        anfitriones: XVStorage.anfitriones() ?? [],
        orden
      })
      this.abierto.set(false)
    }
    catch(e) {
      console.error('[lista pdf]', e)
      this.error.set('No pudimos armar el PDF. Revise la conexión y vuelva a intentar.')
    }
    finally {
      this.generando.set(null)
    }
  }

}
