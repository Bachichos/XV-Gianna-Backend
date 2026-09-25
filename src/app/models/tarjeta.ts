/**
 * Una persona de la tarjeta, con su respuesta adentro.
 *
 * El id es estable y se genera al crear. No hace falta para que el estado
 * sobreviva a un renombre —eso ya lo resuelve tener el estado adentro— pero
 * sirve como clave de seguimiento en las listas y en el dialogo de respuestas.
 *
 * OJO: los campos de estado los escribe el invitado desde su link.
 * Al editar nombres desde el backoffice hay que conservarlos: para eso esta
 * fusionar_personas(), que es el unico camino que deberia usar el formulario.
 */
export type Persona = {
    id:                   string
    nombre:               string    // '' = cupo sin nombre todavia

    confirmado?:          boolean   // ausente = todavia no respondio
    fecha_confirmacion?:  string

    /** El nombre lo escribio el invitado al llenar un cupo vacio. */
    declarado?:           boolean
    /** La respuesta la cargo el backoffice a mano, no el invitado. */
    manual?:              boolean

    /** Cuando cruzo la puerta la noche de la fiesta. Ausente = todavia no llego. */
    ingreso?:             string

    /**
     * Alergia, intolerancia o dieta especial, como la escribio el invitado
     * al confirmar ("celiaca", "vegetariano"). Ausente = no declaro nada.
     * Si la persona estaba en dos casos, van los dos unidos por " · ".
     */
    alimentacion?:        string
}

export type Tarjeta = {
    nombre_mostrar:       string
    personas:             Persona[]
    numero_telefono:      string
    categoria:            string

    fecha_envio:          string | null | undefined
    fecha_confirmacion:   string | null | undefined
    fecha_cancelacion:    string | null | undefined
}

/** Como vive en la tabla: el id del documento es el token del link. */
export type TarjetaConId = Tarjeta & { id: string }

export const CATEGORIAS = ['Familia', 'Amigos Gianna', 'Colegio', 'Amigos padres'] as const

/**
 * Id de persona: p1, p2, p3... Solo tiene que ser unico dentro de la tarjeta.
 * No es un secreto (el secreto es el token de la tarjeta), asi que conviene
 * que sea corto y legible en la consola de Firestore. Nunca se reutiliza un
 * numero, aunque la persona se haya quitado.
 */
export const siguiente_id_persona = (personas: Persona[]): string => {
    const usados = (personas ?? [])
        .map(p => Number((p.id ?? '').replace(/^p/, '')))
        .filter(n => Number.isInteger(n) && n > 0)

    return `p${usados.length ? Math.max(...usados) + 1 : 1}`
}

/** Firestore rechaza undefined: hay que sacar las claves vacias antes de escribir. */
export const sin_indefinidos = <T extends object>(objeto: T): T =>
    Object.fromEntries(Object.entries(objeto).filter(([, v]) => v !== undefined)) as T

/**
 * Une los nombres que se editaron en el backoffice con el estado que cada
 * persona ya tenia. El estado es del invitado y aca no se toca nunca:
 * guardar nombres jamas puede borrar una confirmacion.
 */
export const fusionar_personas = (
    previas: Persona[] | undefined,
    editadas: { id: string, nombre: string }[]
): Persona[] =>
    editadas.map(e => {
        const previa = (previas ?? []).find(p => p.id === e.id)
        return sin_indefinidos({ ...(previa ?? {}), id: e.id, nombre: e.nombre })
    })

// ---------------------------------------------------------------- estados

export type EstadoIntegrante = 'confirmado' | 'rechazado' | 'pendiente'

export type Integrante = {
    id:         string
    nombre:     string
    estado:     EstadoIntegrante
    /** La respuesta la cargo el backoffice a mano. */
    manual:     boolean
    /** El nombre lo escribio el invitado al confirmar. */
    declarado:  boolean
    /** Cupo que todavia nadie nombro. */
    sin_nombre: boolean
}

/**
 * La lista de la tarjeta, persona por persona, con su estado.
 * Sin confirmado -> pendiente. Ya no se deduce nada: si el invitado no
 * contesto por alguien, ese alguien queda pendiente, no rechazado.
 */
export const integrantes_de = (t: Tarjeta): Integrante[] =>
    (t.personas ?? []).map(p => {
        const nombre = (p.nombre ?? '').trim()

        return {
            id:         p.id,
            nombre:     nombre || 'Acompañante',
            estado:     p.confirmado == null ? 'pendiente'
                      : p.confirmado        ? 'confirmado'
                      : 'rechazado',
            manual:     !!p.manual,
            declarado:  !!p.declarado,
            sin_nombre: !nombre
        }
    })

/** Cupos de la tarjeta: cada persona es un cupo, tenga nombre o no. */
export const cupos_de = (t: Tarjeta): number =>
    t.personas?.length ?? 0

export type EstadoRsvp =
    | { tipo: 'pendiente' }
    | { tipo: 'rechazada' }
    | { tipo: 'respondida', confirmados: number, sin_responder: number, total: number }

export const estado_de = (t: Tarjeta): EstadoRsvp => {
    const personas    = t.personas ?? []
    const total       = personas.length
    const respondidas = personas.filter(p => p.confirmado != null).length

    if(respondidas === 0) return { tipo: 'pendiente' }

    const confirmados   = personas.filter(p => p.confirmado === true).length
    const sin_responder = total - respondidas

    if(confirmados === 0 && sin_responder === 0) return { tipo: 'rechazada' }

    return { tipo: 'respondida', confirmados, sin_responder, total }
}

// ---------------------------------------------------------------- reglas

/**
 * Una tarjeta solo se puede borrar mientras no haya salido.
 * Despues, su token ya esta en el telefono de alguien: borrarla dejaria
 * un link roto. La confirmacion se mira ademas por las dudas, porque una
 * respuesta es un dato que nadie puede volver a generar.
 */
export const se_puede_eliminar = (t: Tarjeta): boolean =>
    !t.fecha_envio && !t.fecha_confirmacion

/**
 * Cuando cierran las confirmaciones. Tiene que coincidir con la regla de
 * Firestore, request.time < timestamp.date(2027, 3, 14), y con el mismo
 * dato de la invitacion (frontend/src/models/evento.ts).
 */
export const CIERRE_CONFIRMACIONES = new Date('2027-03-14T00:00:00Z')

export const esta_cancelada = (t: Tarjeta): boolean =>
    !!t.fecha_cancelacion

/** Se envia una sola vez, y nunca una tarjeta dada de baja. */
export const se_puede_enviar = (t: Tarjeta): boolean =>
    !t.fecha_envio && !t.fecha_cancelacion

/** Cancelar es la salida para cuando la invitacion ya salio y algo cambio. */
export const se_puede_cancelar = (t: Tarjeta): boolean =>
    !!t.fecha_envio && !t.fecha_cancelacion

// ------------------------------------------------- lista de la puerta

/** Una persona confirmada, sacada de su tarjeta y puesta en una lista plana. */
export type Invitado = {
    tarjeta_id:     string
    tarjeta_nombre: string
    persona_id:     string
    nombre:         string
    categoria:      string
    ingreso:        string | null
}

/**
 * Todas las personas que confirmaron, ordenadas alfabeticamente.
 * Es la lista que se usa en la puerta: por persona, no por tarjeta,
 * porque en la puerta se busca a alguien por su nombre.
 */
export const invitados_confirmados = (tarjetas: TarjetaConId[]): Invitado[] =>
    (tarjetas ?? [])
        .filter(t => !esta_cancelada(t))
        .flatMap(t => (t.personas ?? [])
            .filter(p => p.confirmado === true)
            .map(p => ({
                tarjeta_id:     t.id,
                tarjeta_nombre: t.nombre_mostrar ?? '',
                persona_id:     p.id,
                nombre:         (p.nombre ?? '').trim() || 'Acompañante',
                categoria:      t.categoria ?? '',
                ingreso:        p.ingreso ?? null
            })))
        .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'))

// ------------------------------------------------- alergias y dietas

/** Una persona que confirmo y declaro una alergia, intolerancia o dieta. */
export type ConAlimentacion = {
    clave:        string    // tarjeta + persona: unica en toda la fiesta
    nombre:       string
    tarjeta:      string
    categoria:    string
    alimentacion: string
}

/**
 * Lo que hay que pasarle al salon. Solo cuenta quien viene: si alguien
 * declaro algo y despues se marco que no asiste, no hace falta cocinarle.
 */
export const con_alimentacion = (tarjetas: TarjetaConId[]): ConAlimentacion[] =>
    (tarjetas ?? [])
        .filter(t => !esta_cancelada(t))
        .flatMap(t => (t.personas ?? [])
            .filter(p => p.confirmado === true && !!(p.alimentacion ?? '').trim())
            .map(p => ({
                clave:        `${t.id}/${p.id}`,
                nombre:       (p.nombre ?? '').trim() || 'Acompañante',
                tarjeta:      t.nombre_mostrar ?? '',
                categoria:    t.categoria || 'Sin categoría',
                alimentacion: p.alimentacion!.trim(),
            })))
        .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'))
