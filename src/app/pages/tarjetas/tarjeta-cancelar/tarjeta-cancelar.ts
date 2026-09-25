import { Component, computed, effect, inject, input, model, signal } from '@angular/core';
import { Dialog } from '@openng/optimus-ui/dialog';
import { Button } from '@openng/optimus-ui/button';
import { FirebaseTarjetasService } from '../../../services/firebase-tarjetas';
import { cupos_de, esta_cancelada, Persona, sin_indefinidos, Tarjeta, TarjetaConId } from '../../../models/tarjeta';

@Component({
  imports: [Dialog, Button],
  selector: 'xv-tarjeta-cancelar',
  styleUrl: './tarjeta-cancelar.scss',
  templateUrl: './tarjeta-cancelar.html',
})
export class TarjetaCancelar {

  private readonly servicio = inject(FirebaseTarjetasService)

  public readonly abierto = model<boolean>(false)
  public readonly tarjeta = input<TarjetaConId | null>(null)

  protected readonly guardando = signal(false)
  protected readonly error     = signal<string | null>(null)

  protected readonly cancelada = computed(() => {
    const t = this.tarjeta()
    return t ? esta_cancelada(t) : false
  })

  protected readonly personas = computed(() => {
    const t = this.tarjeta()
    return t ? cupos_de(t) : 0
  })

  constructor() {
    effect(() => {
      if(!this.abierto()) return
      this.error.set(null)
      this.guardando.set(false)
    })
  }

  protected readonly cerrar = () => this.abierto.set(false)

  protected readonly cancelar = () => this.escribir({
    fecha_cancelacion: new Date().toISOString()
  })

  /**
   * Reactivar devuelve la tarjeta al principio del circuito: hay que volver
   * a enviarla y a esperar la respuesta. Se le quita el estado a cada persona
   * a proposito, porque si la invitacion se dio de baja y despues se
   * rehabilito, algo cambio y ese "si" ya no vale.
   *
   * Los nombres y los ids se conservan: la tarjeta sigue siendo la misma
   * gente, solo que sin responder.
   */
  protected readonly reactivar = () => {
    const t = this.tarjeta()
    if(!t) return

    const personas: Persona[] = (t.personas ?? []).map(p =>
      sin_indefinidos({ id: p.id, nombre: p.nombre ?? '', declarado: p.declarado }) as Persona
    )

    this.escribir({
      fecha_cancelacion:  null,
      fecha_envio:        null,
      fecha_confirmacion: null,
      personas
    })
  }

  private readonly escribir = async (cambios: Partial<Tarjeta>) => {
    const t = this.tarjeta()
    if(!t || this.guardando()) return

    this.guardando.set(true)
    this.error.set(null)

    try {
      await this.servicio.update(t.id, cambios)
      this.abierto.set(false)
    }
    catch(e) {
      console.error('[tarjeta]', e)
      this.error.set('No pudimos guardar el cambio. Revise la conexión y vuelva a intentar.')
    }
    finally {
      this.guardando.set(false)
    }
  }

}
