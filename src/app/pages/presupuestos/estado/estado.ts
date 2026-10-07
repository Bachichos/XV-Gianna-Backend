import { Component, input } from '@angular/core';
import { EstadoPresupuesto } from '../../../models/presupuestos';

/** La etiqueta del estado de un presupuesto: ● Elegido, Pendiente, Descartado. */
@Component({
  selector: 'xv-estado',
  styleUrl: './estado.scss',
  template: `
    @switch (estado()) {
      @case ('elegido')    { <span class="estado estado--elegido"><i class="pi pi-check-circle" aria-hidden="true"></i> Elegido</span> }
      @case ('pendiente')  { <span class="estado estado--pendiente">Pendiente</span> }
      @case ('descartado') { <span class="estado estado--descartado">Descartado</span> }
    }
  `,
})
export class XVEstado {
  public readonly estado = input.required<EstadoPresupuesto>()
}
