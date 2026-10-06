/**
 * Fechas de la fiesta, entre como las guarda la configuracion (un instante
 * con su zona escrita: '2027-04-03T21:30:00-03:00') y como las edita una
 * persona (dia y hora sueltos, en la hora del lugar de la fiesta).
 */

/** Las zonas que se ofrecen. La de la fiesta decide como se ven fecha y hora. */
export const ZONAS = [
    { etiqueta: 'Argentina',  valor: 'America/Argentina/Buenos_Aires' },
    { etiqueta: 'Uruguay',    valor: 'America/Montevideo' },
    { etiqueta: 'Chile',      valor: 'America/Santiago' },
    { etiqueta: 'México',     valor: 'America/Mexico_City' },
    { etiqueta: 'España',     valor: 'Europe/Madrid' },
]

/** Un instante, como dia 'aaaa-mm-dd' y hora 'hh:mm' en la zona dada. */
export const partes = (iso: string, zona: string): { dia: string, hora: string } => {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
        timeZone: zona, year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    }).formatToParts(new Date(iso)).map(x => [x.type, x.value]))
    return { dia: `${p['year']}-${p['month']}-${p['day']}`, hora: `${p['hour']}:${p['minute']}` }
}

/** Cuanto se corre la zona respecto de UTC en ese instante: '-03:00', '+02:00'. */
const desfase = (instante: Date, zona: string): string => {
    const nombre = new Intl.DateTimeFormat('en-US', { timeZone: zona, timeZoneName: 'longOffset' })
        .formatToParts(instante).find(x => x.type === 'timeZoneName')?.value ?? 'GMT'
    const m = /GMT([+-]\d{2}):?(\d{2})?/.exec(nombre)
    return m ? `${m[1]}:${m[2] ?? '00'}` : '+00:00'
}

/**
 * Dia y hora de la zona, como instante con su desfase escrito. El desfase
 * se busca para esa fecha: en las zonas con horario de verano, cambia.
 */
export const instante = (dia: string, hora: string, zona: string): string => {
    const aproximado = new Date(`${dia}T${hora}:00Z`)
    return `${dia}T${hora}:00${desfase(aproximado, zona)}`
}

/**
 * El cierre se guarda como el instante en que se deja de poder responder:
 * la medianoche (UTC) del dia siguiente al ultimo. Es lo que dice la regla
 * de Firestore, request.time < timestamp.date(aaaa, m, d).
 */
export const cierre_desde_ultimo_dia = (dia: string): string => {
    const siguiente = new Date(`${dia}T00:00:00Z`)
    siguiente.setUTCDate(siguiente.getUTCDate() + 1)
    return siguiente.toISOString().replace('.000Z', 'Z')
}

export const ultimo_dia_desde_cierre = (cierre: string): string =>
    new Date(new Date(cierre).getTime() - 1).toISOString().slice(0, 10)
