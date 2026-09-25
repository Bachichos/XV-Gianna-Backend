import { Component, computed, inject, input, model, signal } from '@angular/core';
import { Dialog } from '@openng/optimus-ui/dialog';
import { Button } from '@openng/optimus-ui/button';
import { toDataURL } from 'qrcode';
import { link_invitacion } from '../../../models/mensaje';
import { cupos_de, estado_de, TarjetaConId } from '../../../models/tarjeta';

@Component({
  imports: [Dialog, Button],
  selector: 'xv-tarjeta-qr',
  styleUrl: './tarjeta-qr.scss',
  templateUrl: './tarjeta-qr.html',
})
export class TarjetaQr {

  public readonly abierto = model<boolean>(false)
  public readonly tarjeta = input<TarjetaConId | null>(null)

  protected readonly imagen  = signal<string | null>(null)
  protected readonly copiado = signal(false)
  protected readonly error   = signal<string | null>(null)

  protected readonly link = computed(() => {
    const t = this.tarjeta()
    return t ? link_invitacion(t.id) : ''
  })

  protected readonly confirmados = computed(() => {
    const t = this.tarjeta()
    if(!t) return 0
    const e = estado_de(t)
    return e.tipo === 'respondida' ? e.confirmados : 0
  })

  protected readonly cupos = computed(() => {
    const t = this.tarjeta()
    return t ? cupos_de(t) : 0
  })

  /** Lo dispara el (onShow) del dialogo. */
  protected readonly dibujar = async () => {
    this.imagen.set(null)
    this.copiado.set(false)
    this.error.set(null)

    const link = this.link()
    if(!link) return

    try {
      // Nivel de correccion alto: el QR se lee igual con la pantalla rayada,
      // con poca luz o con el dedo tapando una esquina, que es el escenario
      // real de la puerta de un salon.
      this.imagen.set(await toDataURL(link, {
        errorCorrectionLevel: 'H',
        margin: 2,
        width: 512,
        color: { dark: '#1c2735ff', light: '#ffffffff' }
      }))
    }
    catch(e) {
      console.error('[qr]', e)
      this.error.set('No pudimos generar el código.')
    }
  }

  protected readonly copiar = async () => {
    try {
      await navigator.clipboard.writeText(this.link())
      this.copiado.set(true)
      setTimeout(() => this.copiado.set(false), 2000)
    }
    catch {
      this.error.set('El navegador no dejó copiar. Seleccione el link a mano.')
    }
  }

  protected readonly cerrar = () => this.abierto.set(false)

}
