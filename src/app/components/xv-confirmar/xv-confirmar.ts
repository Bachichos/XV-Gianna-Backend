import { Component, input, model, output } from '@angular/core';
import { Dialog } from '@openng/optimus-ui/dialog';
import { Button } from '@openng/optimus-ui/button';

/**
 * La pregunta antes de hacer algo que no se deshace facil: quitar una
 * mesa, eliminar un presupuesto, guardar un salon que deja gente sin mesa.
 * Un modal blanco y angosto; el texto va adentro, como contenido.
 *
 *   <xv-confirmar [abierto]="!!a_quitar()" (abiertoChange)="$event || a_quitar.set(null)"
 *                 titulo="Quitar mesa" accion="Quitar" [peligro]="true"
 *                 [cargando]="guardando()" (confirmar)="quitar()">
 *     ¿Quitar <strong>Mesa 3</strong>? Sus 8 personas vuelven a «Sin mesa».
 *   </xv-confirmar>
 *
 * Cancelar, la X o Escape lo cierran. Confirmar NO lo cierra: lo cierra
 * quien lo usa cuando la accion sale bien. Si falla, sigue abierto y
 * muestra el error.
 */
@Component({
  imports: [Dialog, Button],
  selector: 'xv-confirmar',
  styleUrl: './xv-confirmar.scss',
  templateUrl: './xv-confirmar.html',
})
export class XVConfirmar {

  public readonly abierto  = model(false)
  public readonly titulo   = input.required<string>()
  /** El texto del boton: "Quitar", "Eliminar", "Guardar". */
  public readonly accion   = input.required<string>()
  /** Rojo si borra algo; si solo guarda, el color de siempre. */
  public readonly peligro  = input(false)
  public readonly cargando = input(false)
  public readonly error    = input<string | null>(null)

  public readonly confirmar = output<void>()

  protected readonly cerrar = () => this.abierto.set(false)
}
