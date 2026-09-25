import { TarjetaConId } from './tarjeta';

/**
 * Base publica de la invitacion. Cuando se compre el dominio propio,
 * se cambia aca y nada mas.
 */
export const URL_INVITACION = 'https://gianna-drs-xv.web.app';

/**
 * El mensaje que sale por WhatsApp. Va en tono cercano a proposito:
 * el backoffice habla de usted, pero esto lo lee la familia y las amigas
 * de Gianna. Son dos registros distintos y no tienen por que coincidir. Por ahora vive en el codigo;
 * cuando exista la coleccion de configuracion, se muda ahi y se edita
 * desde el backoffice sin tocar nada.
 */
export const PLANTILLA_INVITACION =
`¡Hola {nombre}! 💫

Gianna cumple 15 y nos encantaría que nos acompañes.

Te dejo tu invitación personal, con toda la información y el botón para confirmar tu asistencia:
{link}

📅 Sábado 3 de abril de 2027`;

/**
 * El recordatorio para quien todavia no respondio. Mismo tono que la
 * invitacion, y sin reproche: puede que simplemente no lo haya visto.
 */
export const PLANTILLA_RECORDATORIO =
`¡Hola {nombre}! 💫

Te escribo para recordarte que todavía no nos confirmaste si venís a los 15 de Gianna.

Podés responder desde tu invitación, con este mismo link:
{link}

Las confirmaciones cierran el 13 de marzo. ¡Te esperamos!`;

/** El link unico de la tarjeta. El id del documento es el token. */
export const link_invitacion = (id: string): string =>
    `${URL_INVITACION}/i/${id}`;

export const mensaje_de = (t: TarjetaConId): string =>
    PLANTILLA_INVITACION
        .replace('{nombre}', t.nombre_mostrar ?? '')
        .replace('{link}', link_invitacion(t.id));

/**
 * Abre WhatsApp con el chat de esa persona y el mensaje ya escrito.
 * Solo falta tocar enviar: el ultimo paso lo da una persona, no el sistema.
 */
export const link_whatsapp = (t: TarjetaConId): string =>
    `https://wa.me/${t.numero_telefono}?text=${encodeURIComponent(mensaje_de(t))}`;

/**
 * El recordatorio por WhatsApp. A diferencia de la invitacion, no deja
 * registro: se puede mandar las veces que haga falta.
 */
export const link_recordatorio = (t: TarjetaConId): string => {
    const texto = PLANTILLA_RECORDATORIO
        .replace('{nombre}', t.nombre_mostrar ?? '')
        .replace('{link}', link_invitacion(t.id))
    return `https://wa.me/${t.numero_telefono}?text=${encodeURIComponent(texto)}`
}

/**
 * Saca el token de lo que devuelve un QR. Acepta el link completo de la
 * invitacion o el token pelado, por si alguna vez se genera de otra forma.
 * Devuelve null si no se parece a nada nuestro.
 */
export const token_de = (texto: string): string | null => {
    const limpio = (texto ?? '').trim()
    if(!limpio) return null

    const desde_link = limpio.match(/\/i\/([A-Za-z0-9_-]{6,})\/?$/)
    if(desde_link) return desde_link[1]

    // Un id de documento de Firestore: 20 caracteres alfanumericos.
    if(/^[A-Za-z0-9_-]{15,40}$/.test(limpio)) return limpio

    return null
}
