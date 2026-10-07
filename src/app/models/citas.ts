/**
 * Las citas de la organizacion: prueba de vestido, maquillaje, degustacion...
 * Cada una es un documento de la coleccion `citas`, que solo leen y escriben
 * los administradores (la regla general de Firestore).
 *
 * Los tipos viven aparte, en tipos_cita/lista, como los rubros de los
 * presupuestos: la cita guarda el id del tipo.
 *
 * Fecha y hora son las del lugar de la fiesta (evento.zona), como todo el
 * resto: quien la carga desde otro pais ve la misma hora que en el salon.
 */
import { sin_indefinidos } from './tarjeta'
import { hoy, instante } from './fechas'
import { Nombrado } from './listas'

// ---------------------------------------------------------------- tipos

/** t1, t2...: la cita guarda el id, no el nombre. */
export type TipoCita = Nombrado

/** Si nunca se guardo la lista, se arranca con estos. */
export const TIPOS_POR_DEFECTO: TipoCita[] = [
    'Prueba de vestido', 'Maquillaje y peinado', 'Degustación', 'Sesión de fotos',
    'Reunión con el salón', 'Ensayo del vals', 'Otro',
].map((nombre, i) => ({ id: `t${i + 1}`, nombre }))

export const nombre_de_tipo = (id: string, tipos: TipoCita[]): string =>
    tipos.find(t => t.id === id)?.nombre ?? 'Sin tipo'

// ---------------------------------------------------------------- la cita

export type Cita = {
    titulo:       string
    /** El id del tipo (t1, t2...). */
    tipo:         string
    /** AAAA-MM-DD, en el lugar de la fiesta. */
    fecha:        string
    /** HH:MM, en el lugar de la fiesta. null = todo el dia. */
    hora:         string | null
    /** En minutos. Con todo el dia, no se usa. */
    duracion:     number
    lugar:        string
    notas:        string
    /** Cuantos minutos antes avisa el telefono. null = sin aviso. */
    recordatorio: number | null
    /** Ya esta resuelta ("Marcar lista"). Ausente = todavia no. No sale en el calendario del telefono. */
    lista?:       boolean
}

export type CitaConId = Cita & { id: string }

export const DURACIONES = [
    { valor: 30,  etiqueta: '30 minutos' },
    { valor: 60,  etiqueta: '1 hora' },
    { valor: 90,  etiqueta: '1 hora y media' },
    { valor: 120, etiqueta: '2 horas' },
    { valor: 180, etiqueta: '3 horas' },
    { valor: 240, etiqueta: '4 horas' },
]

export const RECORDATORIOS: { valor: number | null, etiqueta: string }[] = [
    { valor: null,  etiqueta: 'Sin aviso' },
    { valor: 60,    etiqueta: '1 hora antes' },
    { valor: 120,   etiqueta: '2 horas antes' },
    { valor: 1440,  etiqueta: '1 día antes' },
    { valor: 2880,  etiqueta: '2 días antes' },
    { valor: 10080, etiqueta: '1 semana antes' },
]

export const cita_vacia = (tipo: string): Cita => ({
    titulo:       '',
    tipo,
    fecha:        hoy(),
    hora:         '10:00',
    duracion:     60,
    lugar:        '',
    notas:        '',
    recordatorio: 1440,
})

/** Listo para Firestore, que rechaza undefined. Sin el id, que es el del documento. */
export const para_guardar = (c: Cita | CitaConId): Cita => {
    const { id, ...cita } = c as CitaConId
    return sin_indefinidos(cita)
}

// ---------------------------------------------------------------- cuando

/** Cuando empieza. Todo el dia: a la medianoche de ese dia, en la zona. */
export const inicio = (c: Cita, zona: string): Date =>
    new Date(instante(c.fecha, c.hora ?? '00:00', zona))

/** Cuando termina. Todo el dia: a la medianoche siguiente. */
export const fin = (c: Cita, zona: string): Date => {
    if(c.hora) return new Date(inicio(c, zona).getTime() + c.duracion * 60_000)
    const siguiente = new Date(`${c.fecha}T12:00:00Z`)
    siguiente.setUTCDate(siguiente.getUTCDate() + 1)
    return new Date(instante(siguiente.toISOString().slice(0, 10), '00:00', zona))
}

export const ya_paso = (c: Cita, zona: string, ahora = new Date()): boolean =>
    fin(c, zona).getTime() <= ahora.getTime()

/**
 * La fecha como se escribe, sin depender de la zona de quien mira: el dia
 * ya esta escrito en el lugar de la fiesta, se lee al mediodia UTC.
 */
const al_mediodia = (fecha: string) => new Date(`${fecha}T12:00:00Z`)

/** "lun 12/10 · 10:00" o "mar 3/11 · todo el día". */
export const cuando_legible = (c: Cita): string => {
    // El dia/mes se arma a mano: el separador que pone Intl cambia segun el navegador.
    const semana = new Intl.DateTimeFormat('es-AR', { weekday: 'short', timeZone: 'UTC' }).format(al_mediodia(c.fecha)).replace('.', '')
    const [, mes, dia] = c.fecha.split('-').map(Number)
    return `${semana} ${dia}/${mes} · ${c.hora ?? 'todo el día'}`
}

// ---------------------------------------------------------------- la lista

export type Mes = { clave: string, titulo: string, citas: CitaConId[] }

/** Agrupadas por mes, en orden; dentro de cada mes, por cuando empiezan. */
export const por_mes = (citas: CitaConId[], zona: string): Mes[] => {
    const ordenadas = [...citas].sort((a, b) => inicio(a, zona).getTime() - inicio(b, zona).getTime())
    const meses: Mes[] = []
    for(const c of ordenadas) {
        const clave = c.fecha.slice(0, 7)
        let mes = meses.find(m => m.clave === clave)
        if(!mes) {
            const nombre = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric', timeZone: 'UTC' })
                .format(al_mediodia(`${clave}-01`)).replace(' de ', ' ')
            mes = { clave, titulo: nombre.charAt(0).toUpperCase() + nombre.slice(1), citas: [] }
            meses.push(mes)
        }
        mes.citas.push(c)
    }
    return meses
}

/** La proxima que no paso. null si no queda ninguna. */
export const proxima = (citas: CitaConId[], zona: string, ahora = new Date()): CitaConId | null =>
    por_mes(citas, zona).flatMap(m => m.citas).find(c => !ya_paso(c, zona, ahora)) ?? null

// ---------------------------------------------------------------- en el telefono

/**
 * Lo que el calendario del telefono sabe de la cita. Si cambia despues de
 * agregarla, la copia del telefono quedo vieja: hay que volver a agregarla.
 * El tipo no va: no sale en el calendario.
 */
export const huella = (c: Cita): string =>
    JSON.stringify([c.titulo, c.fecha, c.hora, c.hora ? c.duracion : 0, c.lugar, c.notas, c.recordatorio])

// ---------------------------------------------------------------- la grilla del mes

/** Un dia de la grilla. null = un hueco antes del 1 o despues del ultimo. */
export type Dia = {
    fecha:  string           // AAAA-MM-DD
    numero: number
    citas:  CitaConId[]      // en orden de hora; las de todo el dia, primero
}

export type HojaMes = {
    /** AAAA-MM, para navegar. */
    clave:   string
    titulo:  string          // "Octubre 2026"
    /** De lunes a domingo. */
    semanas: (Dia | null)[][]
}

/** AAAA-MM del mes siguiente (paso 1) o anterior (paso -1). */
export const mover_mes = (clave: string, paso: number): string => {
    const [anio, mes] = clave.split('-').map(Number)
    const d = new Date(Date.UTC(anio, mes - 1 + paso, 1))
    return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`
}

/**
 * La hoja de un mes: las semanas de lunes a domingo, con los huecos antes
 * del 1 y despues del ultimo, y cada dia con sus citas.
 */
export const hoja_del_mes = (clave: string, citas: CitaConId[], zona: string): HojaMes => {
    const [anio, mes] = clave.split('-').map(Number)
    const dias_del_mes = new Date(Date.UTC(anio, mes, 0)).getUTCDate()
    // La semana empieza el lunes: getUTCDay da 0 al domingo.
    const hueco = (new Date(Date.UTC(anio, mes - 1, 1)).getUTCDay() + 6) % 7

    const del_mes = citas.filter(c => c.fecha.startsWith(clave))
        .sort((a, b) => inicio(a, zona).getTime() - inicio(b, zona).getTime())

    const celdas: (Dia | null)[] = [
        ...Array.from({ length: hueco }, () => null),
        ...Array.from({ length: dias_del_mes }, (_, i) => {
            const fecha = `${clave}-${String(i + 1).padStart(2, '0')}`
            return { fecha, numero: i + 1, citas: del_mes.filter(c => c.fecha === fecha) }
        }),
    ]
    while(celdas.length % 7) celdas.push(null)

    const nombre = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric', timeZone: 'UTC' })
        .format(al_mediodia(`${clave}-01`)).replace(' de ', ' ')
    return {
        clave,
        titulo:  nombre.charAt(0).toUpperCase() + nombre.slice(1),
        semanas: Array.from({ length: celdas.length / 7 }, (_, i) => celdas.slice(i * 7, i * 7 + 7)),
    }
}

// ---------------------------------------------------------------- como se muestra

/** El bloque de la fecha de la tarjeta: { dia: '06', semana: 'mar', mes: 'oct', anio: '2026' }. */
export const bloque_fecha = (c: Cita) => {
    const p = Object.fromEntries(new Intl.DateTimeFormat('es-AR', { weekday: 'short', month: 'short', timeZone: 'UTC' })
        .formatToParts(al_mediodia(c.fecha)).map(x => [x.type, x.value.replace('.', '')]))
    const [anio, , dia] = c.fecha.split('-')
    return { dia, semana: p['weekday'] ?? '', mes: p['month'] ?? '', anio }
}

/** "14:00 hs (1 hora)" o "Todo el día". */
export const horario_legible = (c: Cita): string => {
    if(!c.hora) return 'Todo el día'
    const duracion = DURACIONES.find(d => d.valor === c.duracion)?.etiqueta ?? `${c.duracion} minutos`
    return `${c.hora} hs (${duracion})`
}

/** "Aviso: 1 día antes" o "Sin aviso". */
export const aviso_legible = (c: Cita): string => {
    const r = RECORDATORIOS.find(x => x.valor === c.recordatorio)
    return c.recordatorio == null ? 'Sin aviso' : `Aviso: ${r?.etiqueta ?? `${c.recordatorio} minutos antes`}`
}

/**
 * El icono de cada tipo de fabrica. Los que se agregan a mano llevan una
 * etiqueta: el icono es un detalle, el nombre es lo que importa.
 */
const ICONOS_TIPO: Record<string, string> = {
    t1: 'pi-heart',      // Prueba de vestido
    t2: 'pi-palette',    // Maquillaje y peinado
    t3: 'pi-star',       // Degustacion
    t4: 'pi-camera',     // Sesion de fotos
    t5: 'pi-building',   // Reunion con el salon
    t6: 'pi-crown',      // Ensayo del vals
}

export const icono_de_tipo = (id: string): string => ICONOS_TIPO[id] ?? 'pi-tag'

/** "1 día antes" o "Sin aviso": lo mismo que aviso_legible, sin el "Aviso:". */
export const aviso_corto = (c: Cita): string =>
    c.recordatorio == null ? 'Sin aviso' : (RECORDATORIOS.find(x => x.valor === c.recordatorio)?.etiqueta ?? `${c.recordatorio} minutos antes`)

/** "Martes 06/10/2026" */
export const fecha_corta = (c: Cita): string => {
    const semana = new Intl.DateTimeFormat('es-AR', { weekday: 'long', timeZone: 'UTC' }).format(al_mediodia(c.fecha))
    const [anio, mes, dia] = c.fecha.split('-')
    return `${semana.charAt(0).toUpperCase()}${semana.slice(1)} ${dia}/${mes}/${anio}`
}
