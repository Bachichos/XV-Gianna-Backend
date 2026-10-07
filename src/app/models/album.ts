/*
 * COPIA de frontend/src/models/album.ts: tienen que ser iguales.
 * Si se cambia una, se copia a la otra. La invitacion y el backoffice
 * leen y escriben los mismos documentos de Firebase.
 */
/**
 * El album de fotos de la fiesta (docs/album-de-fotos.md). Hay una COPIA en
 * backoffice/src/app/models/album.ts: tienen que ser iguales.
 *
 * Quien escanea el QR del salon sube fotos sin login: el telefono tiene una
 * identidad anonima de Firebase (uid), y cada foto ocupa un "lugar" fijo de
 * ese telefono. Las reglas de Firestore solo aceptan esos lugares: asi el
 * cupo lo hace cumplir la base, no la pagina.
 *
 *   album/{uid}_{lugar}           los datos y una miniatura, para la grilla
 *   album_original/{uid}_{lugar}  la foto entera, que se baja solo al abrirla
 *   album_clave/actual            la clave del QR y la ventana para subir
 *                                 (solo admins; las reglas la leen igual)
 *   configuracion/album           la ventana y los textos de las misiones,
 *                                 sin la clave: publica (la leen la mini web
 *                                 y la invitacion, para su boton de ese dia)
 *
 * Dos llaves para subir: la clave del QR del salon, o el token de una
 * invitacion enviada y no cancelada (el boton "Subí tus fotos" de la
 * invitacion, durante la ventana). El token ya es el secreto de cada familia:
 * no se expone nada nuevo.
 */

// ---------------------------------------------------------------- misiones

export type Mision = 'grupo' | 'gianna' | 'momento'

export type DatosMision = {
    id:      Mision
    /** Su lugar en el telefono: m1, m2, m3. */
    lugar:   string
    /** I, II, III: como se numeran en la mini web y en el cartel. */
    numero:  string
    emoji:   string
    titulo:  string
    detalle: string
}

export const MISIONES: DatosMision[] = [
    { id: 'grupo',   lugar: 'm1', numero: 'I',   emoji: '📸', titulo: 'Una selfie con tu grupo y Gianna', detalle: 'Todos juntos, ¡que no falte nadie!' },
    { id: 'gianna',  lugar: 'm2', numero: 'II',  emoji: '💙', titulo: 'Una foto con Gianna',             detalle: 'Vos y la cumpleañera.' },
    { id: 'momento', lugar: 'm3', numero: 'III', emoji: '✨', titulo: 'Tu momento favorito de la noche', detalle: 'Ese que no te querés olvidar.' },
]

/** Las fotos libres, "las mejores de la fiesta": lugares 1 a 12. */
export const LIBRES = 12

/** Todo lo que puede subir un telefono: las misiones y las libres. */
export const CUPO = MISIONES.length + LIBRES

export const LUGARES_LIBRES = Array.from({ length: LIBRES }, (_, i) => String(i + 1))

export const id_foto = (uid: string, lugar: string): string => `${uid}_${lugar}`

/** El primer lugar libre que queda sin usar, o null si ya subio las 12. */
export const lugar_libre = (usados: string[]): string | null =>
    LUGARES_LIBRES.find(l => !usados.includes(l)) ?? null

export const mision_de_lugar = (lugar: string): Mision | null =>
    MISIONES.find(m => m.lugar === lugar)?.id ?? null

// ---------------------------------------------------------------- la foto

/**
 * Lo que se guarda de cada foto en album/{id}. La miniatura (y la foto
 * entera, en album_original) van como Bytes de Firestore: cada app las
 * agrega con su propio tipo, por eso no estan aca.
 */
export type FotoAlbum = {
    uid:       string
    /** m1..m3 (misiones) o 1..12 (libres). */
    lugar:     string
    mision:    Mision | null
    /** "¿Quién sos?": opcional. '' = no lo dijo. */
    nombre:    string
    creada_ms: number
    ancho:     number
    alto:      number
    /** Lo que pesa la foto entera. */
    bytes:     number
    /** La clave del QR con que se subio ('' si entro por su invitacion): la regla la compara con la vigente. */
    clave:     string
    /** El token de la invitacion con que se subio ('' si entro por el QR): la regla mira que exista y valga. */
    tarjeta:   string
}

/** Topes que tambien controlan las reglas. */
export const TOPE_ORIGINAL  = 900 * 1024
export const TOPE_MINIATURA = 60 * 1024

// ---------------------------------------------------------------- la ventana

/** El documento album_clave/actual. */
export type ClaveAlbum = {
    clave:    string
    /** Desde cuando y hasta cuando se puede subir, en milisegundos (las reglas no leen fechas en texto). */
    desde_ms: number
    hasta_ms: number
}

/** Lo que se cambia de una mision desde el backoffice. Vacio = el de fabrica. */
export type TextosMision = { titulo?: string, detalle?: string }

/** El documento configuracion/album: la ventana (sin la clave) y los textos de las misiones. */
export type ConfigAlbum = {
    desde_ms: number
    hasta_ms: number
    misiones?: Partial<Record<Mision, TextosMision>>
}

/** Las misiones con los textos del backoffice encima de los de fabrica. */
export const misiones_con = (config?: ConfigAlbum | null): DatosMision[] =>
    MISIONES.map(m => ({
        ...m,
        titulo:  config?.misiones?.[m.id]?.titulo?.trim()  || m.titulo,
        detalle: config?.misiones?.[m.id]?.detalle?.trim() || m.detalle,
    }))

const HORA = 60 * 60 * 1000

/**
 * Desde 12 horas antes de que empiece la fiesta (ese dia a la manana:
 * alguien puede querer subir la de la peluqueria) hasta 7 dias despues.
 */
export const ventana = (inicio_fiesta: Date): { desde_ms: number, hasta_ms: number } => ({
    desde_ms: inicio_fiesta.getTime() - 12 * HORA,
    hasta_ms: inicio_fiesta.getTime() + 7 * 24 * HORA,
})

/** Una clave de 24 letras y numeros al azar, para el link del QR. */
export const clave_nueva = (): string => {
    const letras = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789'
    return Array.from(crypto.getRandomValues(new Uint8Array(24)), b => letras[b % letras.length]).join('')
}

/** El link que lleva el QR. */
export const link_album = (base: string, clave: string): string => `${base}/album?k=${clave}`

// ---------------------------------------------------------------- achicar

const LADO_ORIGINAL  = 1600
const LADO_MINIATURA = 400

/** La imagen dibujada en JPEG con su lado mas largo en `lado`, bajando la calidad hasta que entre en `tope`. */
const a_jpeg = async (imagen: ImageBitmap, lado: number, tope: number, calidades: number[]): Promise<{ datos: Uint8Array, ancho: number, alto: number }> => {
    const escala = Math.min(1, lado / Math.max(imagen.width, imagen.height))
    const ancho = Math.round(imagen.width * escala), alto = Math.round(imagen.height * escala)
    const lienzo = Object.assign(document.createElement('canvas'), { width: ancho, height: alto })
    const g = lienzo.getContext('2d')!
    g.fillStyle = '#ffffff'   // el JPEG no tiene transparencia
    g.fillRect(0, 0, ancho, alto)
    g.drawImage(imagen, 0, 0, ancho, alto)

    for(const calidad of calidades) {
        const blob = await new Promise<Blob | null>(ok => lienzo.toBlob(ok, 'image/jpeg', calidad))
        if(blob && blob.size <= tope) return { datos: new Uint8Array(await blob.arrayBuffer()), ancho, alto }
    }
    throw new Error('La foto no se pudo achicar lo suficiente')
}

/**
 * La foto lista para subir: la entera (~1600 px) y la miniatura (~400 px).
 * createImageBitmap respeta la orientacion de la camara: sin eso, las
 * fotos sacadas con el telefono parado salen acostadas.
 */
export const preparar_foto = async (archivo: File): Promise<{ original: Uint8Array, miniatura: Uint8Array, ancho: number, alto: number }> => {
    const imagen = await createImageBitmap(archivo, { imageOrientation: 'from-image' })
    try {
        const original  = await a_jpeg(imagen, LADO_ORIGINAL, TOPE_ORIGINAL, [0.82, 0.72, 0.6, 0.5])
        const miniatura = await a_jpeg(imagen, LADO_MINIATURA, TOPE_MINIATURA, [0.7, 0.55, 0.4])
        return { original: original.datos, miniatura: miniatura.datos, ancho: original.ancho, alto: original.alto }
    }
    finally { imagen.close() }
}
