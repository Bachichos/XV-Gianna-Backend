/**
 * Los presupuestos de la fiesta: fotografo, decoracion, salon... Cada uno
 * es un documento de la coleccion `presupuestos`, que solo leen y escriben
 * los administradores (la regla general de Firestore).
 *
 * Los rubros viven aparte, en un solo documento, rubros/lista: el
 * presupuesto guarda el id del rubro, asi renombrar uno no obliga a tocar
 * los presupuestos.
 *
 * Los archivos (el PDF del presupuesto, el comprobante de un pago) tampoco
 * van adentro: aca solo queda su referencia. El contenido vive en la
 * coleccion `archivos` (models/archivos.ts) y se baja solo al abrirlo; si
 * no, cada vez que se lee la lista se bajarian todos.
 */
import { sin_indefinidos } from './tarjeta'
import { hoy } from './fechas'
import { Nombrado, siguiente_id } from './listas'

// ---------------------------------------------------------------- dinero

/**
 * El euro queda listo para cuando haga falta: se descomenta aca y en
 * MONEDAS, y aparece en el formulario.
 */
export type Moneda = 'ARS' // | 'EUR'

export const MONEDAS: { valor: Moneda, etiqueta: string }[] = [
    { valor: 'ARS', etiqueta: 'Pesos ($)' },
    // { valor: 'EUR', etiqueta: 'Euros (€)' },
]

/**
 * Los montos se guardan en centavos enteros: 85000050 son $ 850.000,50.
 * Con decimales, sumar 0,1 + 0,2 da 0,30000000000000004 y los totales
 * terminan con un centavo de mas o de menos.
 */
export const a_centavos = (monto: number | null | undefined): number =>
    Math.round((monto ?? 0) * 100)

export const de_centavos = (centavos: number): number => centavos / 100

/** "$ 850.000", "$ 850.000,50" o, sin monto todavia, "Sin monto". */
export const monto_de = (p: Presupuesto): string =>
    p.centavos == null ? 'Sin monto' : formatear(p.centavos, p.moneda)

/** "$ 850.000" o, si tiene centavos, "$ 850.000,50". Nunca mas de dos decimales. */
export const formatear = (centavos: number, moneda: Moneda): string => {
    const decimales = centavos % 100 === 0 ? 0 : 2
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: moneda,
        minimumFractionDigits: decimales,
        maximumFractionDigits: decimales,
    }).format(de_centavos(centavos))
}

// ---------------------------------------------------------------- rubros

/** r1, r2...: el presupuesto guarda el id, no el nombre. */
export type Rubro = Nombrado

/** Si nunca se guardo la lista, se arranca con estos. */
export const RUBROS_POR_DEFECTO: Rubro[] = [
    'Salón', 'Catering', 'Fotografía', 'Video', 'Decoración', 'DJ / Música',
    'Vestido', 'Maquillaje y peinado', 'Torta', 'Souvenirs', 'Invitaciones',
].map((nombre, i) => ({ id: `r${i + 1}`, nombre }))

export const nombre_de_rubro = (id: string, rubros: Rubro[]): string =>
    rubros.find(r => r.id === id)?.nombre ?? 'Sin rubro'

// ---------------------------------------------------------------- archivos

/** Lo que el presupuesto sabe de un archivo. El contenido esta en `archivos/{id}`. */
export type Adjunto = {
    id:     string
    /** El nombre original, para mostrarlo y para bajarlo con ese nombre. */
    nombre: string
    /** image/jpeg, application/pdf... */
    tipo:   string
    /** Lo que pesa al bajarlo, para mostrarlo ("320 KB"). */
    bytes:  number
}

// ---------------------------------------------------------------- pagos

export type Pago = {
    /** g1, g2...: unico dentro del presupuesto. */
    id:           string
    /** AAAA-MM-DD, como lo da un input de fecha. */
    fecha:        string
    centavos:     number
    /** "Seña", "Cuota 1", "Saldo". */
    concepto:     string
    comprobante?: Adjunto
}

// ---------------------------------------------------------------- presupuesto

export type EstadoPresupuesto = 'pendiente' | 'elegido' | 'descartado'

export const ESTADOS: { valor: EstadoPresupuesto, etiqueta: string }[] = [
    { valor: 'pendiente',  etiqueta: 'Pendiente' },
    { valor: 'elegido',    etiqueta: 'Elegido' },
    { valor: 'descartado', etiqueta: 'Descartado' },
]

/** Para ordenar: primero lo elegido, despues lo pendiente, al final lo descartado. */
export const ORDEN_ESTADO: Record<EstadoPresupuesto, number> = { elegido: 0, pendiente: 1, descartado: 2 }

/** Ordenados por estado y, dentro, por proveedor. */
export const ordenar = <T extends Presupuesto>(lista: T[]): T[] =>
    [...lista].sort((a, b) => ORDEN_ESTADO[a.estado] - ORDEN_ESTADO[b.estado] || a.proveedor.localeCompare(b.proveedor, 'es'))

export type Presupuesto = {
    /** El id del rubro (r1, r2...). */
    rubro:     string
    proveedor: string
    /** Telefono, Instagram, mail: lo que sirva para volver a hablar. */
    contacto:  string
    /** Donde queda el proveedor. Opcional: los primeros presupuestos no la tenian. */
    direccion?: string
    moneda:    Moneda
    /** null = todavia sin monto: se anoto el proveedor antes de que pase precio. */
    centavos:  number | null
    /** Cuando lo mandaron. AAAA-MM-DD. '' = sin fecha. */
    fecha:     string
    estado:    EstadoPresupuesto
    notas:     string
    archivo?:  Adjunto
    /** Solo tiene sentido en los elegidos, pero no se borran si cambia de estado. */
    pagos:     Pago[]
}

/** Como vive en la lista: con el id del documento. */
export type PresupuestoConId = Presupuesto & { id: string }

export const presupuesto_vacio =(rubro: string): Presupuesto => ({
    rubro,
    proveedor: '',
    contacto:  '',
    moneda:    'ARS',
    centavos:  null,
    fecha:     hoy(),
    estado:    'pendiente',
    notas:     '',
    pagos:     [],
})

/**
 * Listo para Firestore, que rechaza undefined: sin archivo o sin
 * comprobante, la clave no va. Sin el id, que es el del documento.
 */
export const para_guardar = (p: Presupuesto | PresupuestoConId): Presupuesto => {
    const { id, ...presupuesto } = p as PresupuestoConId
    return sin_indefinidos({
        ...presupuesto,
        pagos: presupuesto.pagos.map(g => sin_indefinidos(g)),
    })
}

/** El link de Google Maps para una direccion: busca ese texto, tal cual. */
export const link_mapa = (direccion: string): string =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`

/** Todos los archivos de un presupuesto: el suyo y los comprobantes. Para borrarlos con el. */
export const archivos_de = (p: Presupuesto): string[] => [
    ...(p.archivo ? [p.archivo.id] : []),
    ...p.pagos.flatMap(g => g.comprobante ? [g.comprobante.id] : []),
]

// ---------------------------------------------------------------- ids

export const siguiente_id_pago  = (pagos: Pago[])   => siguiente_id('g', pagos)

// ---------------------------------------------------------------- cuentas

export const pagado = (p: Presupuesto): number =>
    p.pagos.reduce((suma, g) => suma + g.centavos, 0)

/** Lo que falta pagar. Nunca negativo: si se pago de mas, falta cero. */
export const falta = (p: Presupuesto): number =>
    p.centavos == null ? 0 : Math.max(0, p.centavos - pagado(p))

export type Totales = { elegido: number, pagado: number, falta: number }

/**
 * Los totales de lo elegido, por moneda: pesos y euros no se suman entre
 * si. Solo aparecen las monedas que se usan.
 */
export const totales = (presupuestos: Presupuesto[]): Partial<Record<Moneda, Totales>> => {
    const t: Partial<Record<Moneda, Totales>> = {}
    for(const p of presupuestos.filter(p => p.estado === 'elegido')) {
        const m = (t[p.moneda] ??= { elegido: 0, pagado: 0, falta: 0 })
        m.elegido += p.centavos ?? 0
        m.pagado  += pagado(p)
        m.falta   += falta(p)
    }
    return t
}

/** Los rubros que tienen presupuestos pero ninguno elegido todavia. */
export const rubros_sin_elegir = (rubros: Rubro[], presupuestos: Presupuesto[]): Rubro[] =>
    rubros.filter(r =>
        presupuestos.some(p => p.rubro === r.id) &&
        !presupuestos.some(p => p.rubro === r.id && p.estado === 'elegido'))
