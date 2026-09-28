import { EstadoIntegrante, esta_cancelada, TarjetaConId } from './tarjeta';
import { Anfitrion } from './anfitriones';

/**
 * Las mesas del salon y quien se sienta en cada una. Todo vive en un solo
 * documento, mesas/plano, que solo leen y escriben los administradores (la
 * regla general de Firestore). No va en `configuracion`, que es publica:
 * las claves de los asientos llevan el token de cada tarjeta, que es la
 * llave de su invitacion.
 *
 * Tampoco va dentro de las personas de cada tarjeta: el invitado reescribe
 * esa lista entera al confirmar, y se llevaria puesta una mesa asignada
 * mientras tenia la invitacion abierta.
 */

export type Mesa = {
    /**
     * 'principal'; m1, m2, m3... las comunes (el numero sale del id); e1,
     * e2... las especiales, que tienen su nombre y sus lugares propios y no
     * cuentan en la numeracion (una infantil, una de 6 porque no cuadraba).
     */
    id:       string
    lugares:  number
    /** Vacio = el de siempre: "Mesa de Gianna", "Mesa 3", "Mesa especial 1". */
    nombre?:  string
}

export type PlanoMesas = {
    /** La principal primero, si hay; despues las comunes, en orden; al final las especiales. */
    mesas:    Mesa[]
    /** 'tarjeta/persona' -> id de la mesa. Quien no esta, no tiene mesa. */
    asientos: Record<string, string>
}

export const PLANO_VACIO: PlanoMesas = { mesas: [], asientos: {} }

/** La "tarjeta" de los anfitriones, en las claves de los asientos: 'casa/c1'. */
export const CASA = 'casa'
export const ANFITRIONES = 'Anfitriones'

export const PRINCIPAL = 'principal'

export const es_comun    = (m: Mesa) => /^m\d+$/.test(m.id)
export const es_especial = (m: Mesa) => /^e\d+$/.test(m.id)

/** El numero del id: m7 -> 7, e2 -> 2. La principal no tiene. */
export const numero_de = (m: Mesa): number | null =>
    m.id === PRINCIPAL ? null : Number(m.id.slice(1)) || null

export const nombre_de_mesa = (m: Mesa, festejada: string): string =>
    m.nombre?.trim()
    || (m.id === PRINCIPAL ? `Mesa de ${festejada || 'la fiesta'}`
      : es_especial(m)    ? `Mesa especial ${numero_de(m) ?? ''}`.trim()
      : `Mesa ${numero_de(m) ?? '?'}`)

export const clave_de = (tarjeta_id: string, persona_id: string) => `${tarjeta_id}/${persona_id}`

// ------------------------------------------------------------ las personas

/** Una persona, como se la ve en la pantalla de mesas. */
export type Comensal = {
    clave:         string
    tarjeta_id:    string
    tarjeta:       string
    categoria:     string
    nombre:        string
    sin_nombre:    boolean
    estado:        EstadoIntegrante
    menu_infantil: boolean
    alimentacion:  string
    /** Su lugar en la tarjeta, para mostrar a la familia en el orden en que se cargo. */
    orden:         number
}

/**
 * Todos los invitados de las tarjetas activas, hayan respondido o no:
 * quien todavia no contesto tambien ocupa lugar, para ir organizando.
 * Ordenados por tarjeta y, dentro, como se cargaron.
 */
export const comensales_de = (tarjetas: TarjetaConId[], anfitriones: Anfitrion[] = []): Comensal[] => [
    // Los anfitriones primero: siempre vienen, y encabezan la lista.
    ...anfitriones.map((a, i): Comensal => ({
        clave:         clave_de(CASA, a.id),
        tarjeta_id:    CASA,
        tarjeta:       ANFITRIONES,
        categoria:     ANFITRIONES,
        nombre:        a.nombre.trim() || 'Anfitrión',
        sin_nombre:    !a.nombre.trim(),
        estado:        'confirmado',
        menu_infantil: !!a.menu_infantil,
        alimentacion:  (a.alimentacion ?? '').trim(),
        orden:         i,
    })),
    ...(tarjetas ?? [])
        .filter(t => !esta_cancelada(t))
        .flatMap(t => (t.personas ?? []).map((p, i): Comensal => {
            const nombre = (p.nombre ?? '').trim()
            return {
                clave:         clave_de(t.id, p.id),
                tarjeta_id:    t.id,
                tarjeta:       t.nombre_mostrar ?? '',
                categoria:     t.categoria || 'Sin categoría',
                nombre:        nombre || 'Acompañante',
                sin_nombre:    !nombre,
                estado:        p.confirmado == null ? 'pendiente' : p.confirmado ? 'confirmado' : 'rechazado',
                menu_infantil: !!p.menu_infantil,
                alimentacion:  (p.alimentacion ?? '').trim(),
                orden:         i,
            }
        }))
        .sort((a, b) => a.tarjeta.localeCompare(b.tarjeta, 'es') || a.tarjeta_id.localeCompare(b.tarjeta_id) || a.orden - b.orden),
]

/** Quien dijo que no viene no ocupa lugar, aunque siga sentado en una mesa. */
export const ocupa_lugar = (c: Comensal) => c.estado !== 'rechazado'

/** El id de la mesa de esa persona, o null. Una mesa que ya no existe no cuenta. */
export const mesa_de = (plano: PlanoMesas, clave: string): string | null => {
    const id = plano.asientos?.[clave]
    return id && plano.mesas.some(m => m.id === id) ? id : null
}

// ------------------------------------------------------------ armar el salon

/** Una mesa especial, como se edita en el formulario del salon. Sin id = nueva. */
export type Especial = { id?: string, nombre: string, lugares: number }

export type Salon = {
    principal:         boolean
    lugares_principal: number
    cantidad:          number
    lugares:           number
    especiales:        Especial[]
}

/**
 * Las mesas que resultan de lo que se eligio para el salon:
 *   - la principal, si hay;
 *   - las comunes: se conservan las que ya estaban (con su nombre), se
 *     agregan al final las que falten y se sacan las ultimas si sobran.
 *     `lugares` se aplica a todas solo si se cambio (cambio_lugares): una
 *     comun con lugares propios, editada desde su lapiz, no se pisa sola;
 *   - las especiales, tal como quedaron en el formulario.
 */
export const armar_salon = (actuales: Mesa[], salon: Salon, cambio_lugares: boolean): Mesa[] => {
    const principal_actual = actuales.find(m => m.id === PRINCIPAL)
    const comunes = actuales.filter(es_comun).sort((a, b) => (numero_de(a) ?? 0) - (numero_de(b) ?? 0))

    const resultado: Mesa[] = []
    if(salon.principal)
        resultado.push({ ...(principal_actual ?? { id: PRINCIPAL }), lugares: salon.lugares_principal })

    const quedan = comunes.slice(0, salon.cantidad)
        .map(m => cambio_lugares ? { ...m, lugares: salon.lugares } : m)
    // Las nuevas siguen a la ultima que queda. Si una mesa sacada vuelve,
    // vuelve vacia: sus asientos se borran al sacarla.
    let siguiente = Math.max(0, ...quedan.map(m => numero_de(m) ?? 0)) + 1
    while(quedan.length < salon.cantidad) quedan.push({ id: `m${siguiente++}`, lugares: salon.lugares })

    // Las especiales nuevas toman un numero que nunca uso otra que siga en pie.
    let especial = Math.max(0, ...actuales.filter(es_especial).map(m => numero_de(m) ?? 0)) + 1
    const especiales = salon.especiales.map(e => ({
        ...(actuales.find(m => m.id === e.id) ?? {}),
        id:      e.id ?? `e${especial++}`,
        nombre:  e.nombre.trim(),
        lugares: e.lugares,
    }))

    return [...resultado, ...quedan, ...especiales]
}

/**
 * Los anfitriones que todavia no tienen mesa van a la principal: es donde
 * casi siempre se sientan. Despues se mueven como cualquiera.
 */
export const sentar_anfitriones = (plano: PlanoMesas, anfitriones: Anfitrion[], mesas: Mesa[]): Record<string, string> => {
    if(!mesas.some(m => m.id === PRINCIPAL)) return {}
    const con_mesas = { ...plano, mesas }
    return Object.fromEntries(anfitriones
        .map(a => clave_de(CASA, a.id))
        .filter(clave => !mesa_de(con_mesas, clave))
        .map(clave => [clave, PRINCIPAL]))
}

/** Lo que el salon tiene hoy, para llenar el formulario. */
export const salon_de = (mesas: Mesa[]): Salon => {
    const principal = mesas.find(m => m.id === PRINCIPAL)
    const comunes   = mesas.filter(es_comun)
    // Los lugares "por mesa" son los que mas se repiten.
    const veces = new Map<number, number>()
    for(const m of comunes) veces.set(m.lugares, (veces.get(m.lugares) ?? 0) + 1)
    const lugares = [...veces.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? 10
    return {
        principal:         mesas.length ? !!principal : true,
        lugares_principal: principal?.lugares ?? 12,
        cantidad:          mesas.length ? comunes.length : 8,
        lugares,
        especiales:        mesas.filter(es_especial).map(m => ({ id: m.id, nombre: m.nombre ?? '', lugares: m.lugares })),
    }
}

// ------------------------------------------------------------ para los mensajes

/**
 * Las mesas de una tarjeta, por nombre, para el recordatorio: las de quienes
 * vienen o todavia no respondieron. Una familia repartida tiene varias.
 */
export const mesas_de_tarjeta = (plano: PlanoMesas | null, t: TarjetaConId, festejada: string): string[] => {
    if(!plano) return []
    const ids = new Set((t.personas ?? [])
        .filter(p => p.confirmado !== false)
        .map(p => mesa_de(plano, clave_de(t.id, p.id)))
        .filter((id): id is string => !!id))
    return plano.mesas.filter(m => ids.has(m.id)).map(m => nombre_de_mesa(m, festejada))
}

/** "Mesa 4", "Mesa 4 y Mesa 5", "Mesa 1, Mesa 2 y Mesa 3". */
export const unir = (nombres: string[]): string =>
    nombres.length <= 1 ? (nombres[0] ?? '') : `${nombres.slice(0, -1).join(', ')} y ${nombres.at(-1)}`

/** El nombre de la mesa de una persona, o '' si no tiene. Para la puerta. */
export const nombre_mesa_de = (plano: PlanoMesas | null, clave: string, festejada: string): string => {
    if(!plano) return ''
    const id = mesa_de(plano, clave)
    const mesa = plano.mesas.find(m => m.id === id)
    return mesa ? nombre_de_mesa(mesa, festejada) : ''
}
