import { Component, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

/**
 * Lo que va debajo de un campo de formulario: por que esta en rojo, o
 * cuanto falta para el limite. Que ningun campo quede en rojo sin decir
 * por que.
 *
 *   <xv-aviso-campo [control]="formulario.controls.notas" [maximo]="5000" />
 *   <xv-aviso-campo [control]="formulario.controls.proveedor" vacio="Hace falta el nombre del proveedor." />
 */
@Component({
  selector: 'xv-aviso-campo',
  styleUrl: './xv-aviso-campo.scss',
  templateUrl: './xv-aviso-campo.html',
})
export class XVAvisoCampo {

  public readonly control = input.required<AbstractControl>()
  /** Que decir si falta (vacio, o un monto en cero). */
  public readonly vacio   = input('Complete este campo.')
  /** Con un maximo, el contador aparece al acercarse: "4.850 / 5.000". */
  public readonly maximo  = input<number | null>(null)

  protected readonly numero = (n: number) => n.toLocaleString('es-AR')

  /** El problema, para mostrarlo; null si no hay o si todavia no lo toco. */
  protected readonly problema = (): string | null => {
    const c = this.control()
    if(!c.touched || !c.errors) return null
    const largo = c.errors['maxlength']
    if(largo) return `Máximo ${this.numero(largo.requiredLength)} caracteres: tiene ${this.numero(largo.actualLength)}.`
    if(c.errors['required'] || c.errors['min']) return this.vacio()
    return 'Revise este campo.'
  }

  /** "4.850 / 5.000", solo desde el 80 % del maximo. */
  protected readonly contador = (): string | null => {
    const max = this.maximo()
    const largo = String(this.control().value ?? '').length
    return max && largo >= max * 0.8 ? `${this.numero(largo)} / ${this.numero(max)}` : null
  }
}
