import { signal } from '@angular/core';
import { CitaConId, huella } from '../../models/citas';
import { archivo_ics, link_google, nombre_ics } from '../../models/calendario';
import { guardar_agregadas, leer_agregadas } from './navegador';

/**
 * Pasar una cita al calendario del telefono, y recordar como era cuando se
 * paso. Lo usan la lista del calendario y la pantalla de cada cita.
 *
 * El estado vive aca y no en XVStorage a proposito: es de ESTE navegador
 * (navegador.ts), no de la fiesta. Que una persona agregue una cita en su
 * telefono no la agrega en el de las demas.
 */

/** Como esta la cita en el calendario de este telefono. */
export type EnTelefono = 'no' | 'al_dia' | 'cambio'

/** id -> huella de lo que se agrego en este telefono. */
const agregadas = signal(leer_agregadas())

export const en_telefono = (c: CitaConId): EnTelefono => {
    const agregada = agregadas()[c.id]
    return !agregada ? 'no' : agregada === huella(c) ? 'al_dia' : 'cambio'
}

/** Se anota como agregada aunque no se sepa si la persona termino de guardarla: no hay forma de saberlo. */
const anotar = (c: CitaConId) => {
    const nuevas = { ...agregadas(), [c.id]: huella(c) }
    agregadas.set(nuevas)
    guardar_agregadas(nuevas)
}

export const a_google = (c: CitaConId, zona: string) => {
    window.open(link_google(c, zona), '_blank', 'noopener')
    anotar(c)
}

export const a_ics = (c: CitaConId, zona: string) => {
    const url = URL.createObjectURL(new Blob([archivo_ics(c, zona)], { type: 'text/calendar;charset=utf-8' }))
    const a = Object.assign(document.createElement('a'), { href: url, download: nombre_ics(c) })
    document.body.append(a); a.click(); a.remove()
    // Sin esto el archivo queda en memoria hasta que se cierre la pestaña.
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    anotar(c)
}
