/**
 * Lo que el Calendario recuerda en ESTE navegador, y no en Firebase a
 * proposito: es de cada telefono o compu, no de todos.
 *
 * Si el navegador no deja guardar (modo privado, datos borrados), no pasa
 * nada grave: el boton vuelve a ofrecer "agregar" y la vista arranca en Mes.
 */

// ---------------------------------------------------------------- las citas agregadas

/**
 * Que citas se agregaron al calendario de este telefono, y como eran en ese
 * momento: id -> huella (models/citas.ts). Que una persona la agregue en su
 * telefono no la agrega en el de las demas.
 */
const CLAVE = 'xv-citas-agregadas'

export const leer_agregadas = (): Record<string, string> => {
    try { return JSON.parse(localStorage.getItem(CLAVE) ?? '{}') ?? {} }
    catch { return {} }
}

export const guardar_agregadas = (agregadas: Record<string, string>): void => {
    try { localStorage.setItem(CLAVE, JSON.stringify(agregadas)) }
    catch { /* sin lugar o sin permiso: queda solo en memoria */ }
}

// ---------------------------------------------------------------- la vista

export type Vista = 'mes' | 'lista'

const CLAVE_VISTA = 'xv-calendario-vista'

/** La que se eligio la ultima vez. La primera vez, el mes. */
export const leer_vista = (): Vista => {
    try { return localStorage.getItem(CLAVE_VISTA) === 'lista' ? 'lista' : 'mes' }
    catch { return 'mes' }
}

export const guardar_vista = (vista: Vista): void => {
    try { localStorage.setItem(CLAVE_VISTA, vista) }
    catch { /* sin permiso: la proxima vez arranca en el mes */ }
}
