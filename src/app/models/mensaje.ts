import { TarjetaConId } from './tarjeta';
import { ConfigEvento } from './configuracion';

/**
 * Base publica de la invitacion. Cuando se compre el dominio propio,
 * se cambia aca y nada mas.
 */
export const URL_INVITACION = 'https://gianna-drs-xv.web.app';

/** El link unico de la tarjeta. El id del documento es el token. */
export const link_invitacion = (id: string): string =>
    `${URL_INVITACION}/i/${id}`;

/**
 * Completa un mensaje de WhatsApp. Las plantillas viven en la configuracion
 * de la fiesta (evento.mensajes) y se editan desde Configuracion; los
 * marcadores estan explicados ahi.
 *
 * Recibe el evento como parametro, en vez de leerlo solo: asi quien lo usa
 * dentro de un computed se entera cuando la configuracion cambia.
 */
export const completar = (plantilla: string, t: TarjetaConId, evento: ConfigEvento): string => {
    const cuando = new Date(evento.fecha)
    const en_zona = (d: Date, o: Intl.DateTimeFormatOptions) =>
        new Intl.DateTimeFormat('es-AR', { timeZone: evento.zona, ...o }).format(d)
    // "sábado, 3 de abril de 2027" -> "Sábado 3 de abril de 2027"
    const fecha = en_zona(cuando, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '')
    // El ultimo dia para responder: el anterior al instante del cierre.
    const cierre = en_zona(new Date(new Date(evento.cierre).getTime() - 1), { day: 'numeric', month: 'long' })

    const datos: Record<string, string> = {
        nombre:    t.nombre_mostrar ?? '',
        link:      link_invitacion(t.id),
        festejada: evento.festejada,
        fecha:     fecha.charAt(0).toUpperCase() + fecha.slice(1),
        cierre,
    }
    return plantilla.replace(/\{(\w+)\}/g, (entero, clave) => datos[clave] ?? entero)
}

export const mensaje_de = (t: TarjetaConId, evento: ConfigEvento): string =>
    completar(evento.mensajes.invitacion, t, evento);

/**
 * Abre WhatsApp con el chat de esa persona y el mensaje ya escrito.
 * Solo falta tocar enviar: el ultimo paso lo da una persona, no el sistema.
 */
export const link_whatsapp = (t: TarjetaConId, evento: ConfigEvento): string =>
    `https://wa.me/${t.numero_telefono}?text=${encodeURIComponent(mensaje_de(t, evento))}`;

/**
 * El recordatorio por WhatsApp. A diferencia de la invitacion, no deja
 * registro: se puede mandar las veces que haga falta.
 */
export const link_recordatorio = (t: TarjetaConId, evento: ConfigEvento): string =>
    `https://wa.me/${t.numero_telefono}?text=${encodeURIComponent(completar(evento.mensajes.recordatorio, t, evento))}`;

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
