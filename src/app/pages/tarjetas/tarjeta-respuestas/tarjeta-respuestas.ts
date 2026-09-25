import { Component, computed, inject, input, model, signal } from '@angular/core';
import { Dialog } from '@openng/optimus-ui/dialog';
import { Button } from '@openng/optimus-ui/button';
import { InputText } from '@openng/optimus-ui/inputtext';
import { FirebaseTarjetasService } from '../../../services/firebase-tarjetas';
import { Persona, sin_indefinidos, TarjetaConId } from '../../../models/tarjeta';

/** null = sin responder. Es el tercer estado, no un valor faltante. */
type Borrador = { confirmado: boolean | null, nombre: string, alimentacion: string };

@Component({
  imports: [Dialog, Button, InputText],
  selector: 'xv-tarjeta-respuestas',
  styleUrl: './tarjeta-respuestas.scss',
  templateUrl: './tarjeta-respuestas.html',
})
export class TarjetaRespuestas {

  private readonly servicio = inject(FirebaseTarjetasService)

  public readonly abierto = model<boolean>(false)
  public readonly tarjeta = input<TarjetaConId | null>(null)

  protected readonly guardando = signal(false)
  protected readonly error     = signal<string | null>(null)

  protected readonly borrador = signal<Record<string, Borrador>>({})

  protected readonly personas = computed(() => this.tarjeta()?.personas ?? [])

  protected readonly confirmados = computed(() =>
    Object.values(this.borrador()).filter(b => b.confirmado === true).length
  )

  /** Lo dispara el (onShow) del dialogo: el unico momento garantizado. */
  protected readonly reiniciar = () => {
    this.error.set(null)
    this.guardando.set(false)

    const borrador: Record<string, Borrador> = {}

    for(const p of this.tarjeta()?.personas ?? []) {
      borrador[p.id] = {
        confirmado:   p.confirmado ?? null,
        nombre:       p.nombre ?? '',
        alimentacion: p.alimentacion ?? ''
      }
    }

    this.borrador.set(borrador)
  }

  protected readonly valor_de = (id: string): boolean | null =>
    this.borrador()[id]?.confirmado ?? null

  protected readonly nombre_de = (id: string): string =>
    this.borrador()[id]?.nombre ?? ''

  protected readonly alimentacion_de = (id: string): string =>
    this.borrador()[id]?.alimentacion ?? ''

  protected readonly escribir_alimentacion = (id: string, evento: Event) => {
    const alimentacion = (evento.target as HTMLInputElement).value
    this.borrador.update(b => ({ ...b, [id]: { ...b[id], alimentacion } }))
  }

  protected readonly marcar = (id: string, confirmado: boolean | null) =>
    this.borrador.update(b => ({ ...b, [id]: { ...b[id], confirmado } }))

  protected readonly escribir_nombre = (id: string, evento: Event) => {
    const nombre = (evento.target as HTMLInputElement).value
    this.borrador.update(b => ({ ...b, [id]: { ...b[id], nombre } }))
  }

  protected readonly cerrar = () => this.abierto.set(false)

  protected readonly guardar = async () => {
    const t = this.tarjeta()
    if(!t || this.guardando()) return

    this.guardando.set(true)
    this.error.set(null)

    const ahora = new Date().toISOString()

    const personas: Persona[] = (t.personas ?? []).map(previa => {
      const b = this.borrador()[previa.id]
      const nombre_cargado = (previa.nombre ?? '').trim()

      // Sin responder: se le quita el estado y vuelve a quedar pendiente.
      // El nombre se conserva, aunque lo haya puesto el invitado. El ingreso
      // no: nadie puede figurar como que entro estando fuera de la lista.
      if(!b || b.confirmado === null) {
        return sin_indefinidos({
          id:        previa.id,
          nombre:    nombre_cargado,
          declarado: previa.declarado
        }) as Persona
      }

      const nombre = nombre_cargado || b.nombre.trim()
      // Solo de quien viene: de los que no asisten no hace falta saberlo.
      const alimentacion = b.confirmado ? b.alimentacion.trim() : ''

      // Si no cambio la respuesta, se conserva la persona: asi no se pisa la
      // fecha ni se marca como manual una respuesta que dio el invitado.
      // Corregir solo la alergia no cuenta como responder.
      if(previa.confirmado === b.confirmado && nombre === nombre_cargado) {
        if(alimentacion === (previa.alimentacion ?? '').trim()) return previa
        return sin_indefinidos({ ...previa, alimentacion: alimentacion || undefined }) as Persona
      }

      return sin_indefinidos({
        ...previa,
        nombre,
        confirmado:         b.confirmado,
        fecha_confirmacion: ahora,
        manual:             true,
        declarado:          !nombre_cargado && !!nombre ? true : previa.declarado,
        // Solo quien viene puede haber entrado.
        ingreso:            b.confirmado ? previa.ingreso : undefined,
        alimentacion:       alimentacion || undefined
      }) as Persona
    })

    const hay_alguna = personas.some(p => p.confirmado != null)

    try {
      await this.servicio.update(t.id, {
        personas,
        fecha_confirmacion: hay_alguna ? (t.fecha_confirmacion ?? ahora) : null
      })
      this.abierto.set(false)
    }
    catch(e) {
      console.error('[respuestas]', e)
      this.error.set('No pudimos guardar las respuestas. Revise la conexión y vuelva a intentar.')
    }
    finally {
      this.guardando.set(false)
    }
  }

}
