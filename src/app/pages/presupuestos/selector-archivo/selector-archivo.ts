import { Component, input, model, signal } from '@angular/core';
import { ACEPTA, ArchivoPreparado, peso_legible, preparar } from '../../../models/archivos';
import { Adjunto } from '../../../models/presupuestos';

/**
 * El archivo de un formulario: el que ya estaba guardado, el que se acaba
 * de elegir (ya achicado, se sube recien al guardar), "Quitar" y el boton
 * para elegir otro. Lo usan el presupuesto y los pagos.
 *
 *   <xv-selector-archivo [(actual)]="..." [(nuevo)]="..." [(preparando)]="..." />
 */
@Component({
  selector: 'xv-selector-archivo',
  styleUrl: './selector-archivo.scss',
  templateUrl: './selector-archivo.html',
})
export class SelectorArchivo {

  /** El que ya estaba guardado. Al quitarlo vuelve null. */
  public readonly actual     = model<Adjunto | null>(null)
  /** El elegido ahora, ya achicado. */
  public readonly nuevo      = model<ArchivoPreparado | null>(null)
  /** Mientras achica: el formulario no deberia guardar. */
  public readonly preparando = model(false)

  public readonly texto = input('Adjuntar foto o PDF')

  protected readonly error        = signal<string | null>(null)
  protected readonly acepta       = ACEPTA
  protected readonly peso_legible = peso_legible

  protected readonly elegir = async (evento: Event) => {
    const campo = evento.target as HTMLInputElement
    const elegido = campo.files?.[0]
    campo.value = ''    // asi elegir el mismo archivo otra vez vuelve a disparar el cambio
    if(!elegido) return

    this.preparando.set(true)
    this.error.set(null)
    try { this.nuevo.set(await preparar(elegido)) }
    catch(e: any) {
      console.error('[archivo]', e)
      this.error.set(e?.message?.startsWith('El archivo pesa') ? e.message : 'No pudimos leer ese archivo. Pruebe con una foto o un PDF.')
    }
    finally { this.preparando.set(false) }
  }

  protected readonly quitar = () => {
    this.nuevo.set(null)
    this.actual.set(null)
    this.error.set(null)
  }
}
