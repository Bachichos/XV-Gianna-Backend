/**
 * Una cita, para el calendario del telefono. Dos caminos, los mismos que la
 * invitacion le ofrece a los invitados (frontend/src/models/evento.ts):
 *
 *   link_google  abre Google Calendar con la cita ya cargada: Android y compu.
 *   archivo_ics  un .ics que el iPhone (y casi cualquier calendario) abre.
 *
 * Las dos son una COPIA: si despues la cita cambia, el telefono no se
 * entera. Para eso esta la huella (models/citas.ts).
 *
 * El link de Google no deja elegir el aviso: usa el que cada uno tenga por
 * defecto. El .ics si lo lleva.
 */
import { Cita, fin, inicio } from './citas'

/** 2027-04-04T00:30:00.000Z -> 20270404T003000Z, como lo piden los dos formatos. */
const a_utc = (fecha: Date): string =>
    fecha.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

/** 2026-11-03 -> 20261103: los dias enteros van sin hora. */
const a_dia = (fecha: string): string => fecha.replace(/-/g, '')

/** El dia siguiente, AAAA-MM-DD: en un evento de dia entero, el fin no se incluye. */
const dia_siguiente = (fecha: string): string => {
    const d = new Date(`${fecha}T12:00:00Z`)
    d.setUTCDate(d.getUTCDate() + 1)
    return d.toISOString().slice(0, 10)
}

// ---------------------------------------------------------------- Google

export const link_google = (c: Cita, zona: string): string => {
    const fechas = c.hora
        ? `${a_utc(inicio(c, zona))}/${a_utc(fin(c, zona))}`
        : `${a_dia(c.fecha)}/${a_dia(dia_siguiente(c.fecha))}`
    const p = new URLSearchParams({
        action:   'TEMPLATE',
        text:     c.titulo,
        dates:    fechas,
        location: c.lugar,
        details:  c.notas,
    })
    return `https://calendar.google.com/calendar/render?${p}`
}

// ---------------------------------------------------------------- .ics

/**
 * Las comas, los punto y coma y las barras tienen significado propio en un
 * .ics: sin escapar, el archivo se corrompe y el calendario lo rechaza sin
 * decir por que.
 */
const escapar = (texto: string): string =>
    texto.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n')

/**
 * El formato pide renglones de 75 bytes como mucho: los mas largos se
 * cortan y siguen en el renglon de abajo, empezando con un espacio. Se
 * cuentan bytes, no letras (una "ñ" son dos), y nunca se parte una letra.
 */
const plegar = (renglon: string): string => {
    const codificar = new TextEncoder()
    const partes: string[] = []
    let actual = '', bytes = 0, tope = 75
    for(const letra of renglon) {
        const largo = codificar.encode(letra).length
        if(bytes + largo > tope) {
            partes.push(actual)
            actual = '', bytes = 0, tope = 74   // los que siguen pierden un byte en el espacio
        }
        actual += letra
        bytes  += largo
    }
    partes.push(actual)
    return partes.join('\r\n ')
}

/**
 * El .ics de una cita. Lleva siempre el mismo UID: los calendarios que lo
 * entienden reemplazan la copia vieja en vez de duplicarla (no todos lo
 * hacen: el de Apple a veces pregunta).
 */
export const archivo_ics = (c: Cita & { id: string }, zona: string): string => {
    const cuando = c.hora
        ? [`DTSTART:${a_utc(inicio(c, zona))}`, `DTEND:${a_utc(fin(c, zona))}`]
        : [`DTSTART;VALUE=DATE:${a_dia(c.fecha)}`, `DTEND;VALUE=DATE:${a_dia(dia_siguiente(c.fecha))}`]

    const aviso = c.recordatorio == null ? [] : [
        'BEGIN:VALARM',
        `TRIGGER:-PT${c.recordatorio}M`,
        'ACTION:DISPLAY',
        `DESCRIPTION:${escapar(c.titulo)}`,
        'END:VALARM',
    ]

    const ahora = new Date()
    return [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Mis 15 Gianna//Backoffice//ES',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        `UID:cita-${c.id}@gianna-drs-xv`,
        `DTSTAMP:${a_utc(ahora)}`,
        // Cada vez que se baja, una version mas nueva que la anterior.
        `SEQUENCE:${Math.floor(ahora.getTime() / 60_000)}`,
        ...cuando,
        `SUMMARY:${escapar(c.titulo)}`,
        ...(c.lugar ? [`LOCATION:${escapar(c.lugar)}`] : []),
        ...(c.notas ? [`DESCRIPTION:${escapar(c.notas)}`] : []),
        ...aviso,
        'END:VEVENT',
        'END:VCALENDAR',
    ].map(plegar).join('\r\n')   // el formato exige fin de linea de Windows
}

/** "prueba-de-vestido-2026-10-12.ics" */
export const nombre_ics = (c: Cita): string =>
    `${c.titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
        .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'cita'}-${c.fecha}.ics`
