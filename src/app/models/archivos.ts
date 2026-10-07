/**
 * Archivos guardados en Firestore, sin Cloud Storage: Storage exige el plan
 * Blaze y el proyecto esta en Spark a proposito (docs/decisiones.md).
 *
 * Como se guarda uno:
 *
 *   archivos/{id}             nombre, tipo, peso, compresion, cuantas partes
 *   archivos/{id}/partes/{n}  el contenido, en pedazos de hasta PARTE bytes
 *
 * El contenido va como Bytes (binario), no en base64: base64 lo agranda un
 * tercio. Y en pedazos porque un documento de Firestore no pasa de 1 MiB.
 *
 * Antes de guardar se achica: las imagenes se pasan a JPEG de hasta 1600 px
 * (una foto de 4 MB queda en unos 300 KB); el resto se comprime con gzip,
 * que en un PDF gana poco (ya viene comprimido por dentro), pero no cuesta.
 *
 * Lo usan los presupuestos y los comprobantes de pago (models/presupuestos.ts),
 * que guardan solo la referencia: un Adjunto.
 */

/** Lo maximo que puede pesar un archivo, ya achicado. */
export const TOPE_BYTES = 5 * 1024 * 1024

/** Cada pedazo: lejos del MiB del documento, para dejar lugar al resto. */
export const PARTE = 900 * 1024

/** Lo que el selector de archivos deja elegir. */
export const ACEPTA = 'image/*,application/pdf'

/** 'jpeg' = la imagen se rehizo; 'gzip' = hay que descomprimir al bajar. */
export type Compresion = 'jpeg' | 'gzip' | 'ninguna'

/** El documento archivos/{id}. */
export type ArchivoGuardado = {
    nombre:     string
    /** El tipo de lo que se baja: si la imagen se paso a JPEG, image/jpeg. */
    tipo:       string
    /** Lo que pesa lo que se baja, ya descomprimido. */
    bytes:      number
    compresion: Compresion
    partes:     number
}

/** Un archivo listo para subir: ya achicado. */
export type ArchivoPreparado = ArchivoGuardado & { datos: Uint8Array }

/** Las imagenes que el navegador sabe redibujar. Un GIF o un SVG se guardan tal cual. */
const ES_FOTO = /^image\/(jpeg|png|webp|heic|heif|bmp)$/

const LADO_MAXIMO = 1600
const CALIDAD_JPEG = 0.8

// ---------------------------------------------------------------- achicar

const imagen_de = (archivo: File) => new Promise<HTMLImageElement>((ok, mal) => {
    const url = URL.createObjectURL(archivo)
    const img = new Image()
    img.onload  = () => { URL.revokeObjectURL(url); ok(img) }
    img.onerror = () => { URL.revokeObjectURL(url); mal(new Error('No se pudo leer la imagen')) }
    img.src = url
})

/** La foto redibujada en JPEG, con su lado mas largo en LADO_MAXIMO como mucho. */
const a_jpeg = async (archivo: File): Promise<Uint8Array> => {
    const img    = await imagen_de(archivo)
    const escala = Math.min(1, LADO_MAXIMO / Math.max(img.naturalWidth, img.naturalHeight))
    const lienzo = Object.assign(document.createElement('canvas'), {
        width:  Math.round(img.naturalWidth  * escala),
        height: Math.round(img.naturalHeight * escala),
    })
    const g = lienzo.getContext('2d')!
    // El JPEG no tiene transparencia: lo transparente de un PNG saldria negro.
    g.fillStyle = '#ffffff'
    g.fillRect(0, 0, lienzo.width, lienzo.height)
    g.drawImage(img, 0, 0, lienzo.width, lienzo.height)

    const blob = await new Promise<Blob | null>(ok => lienzo.toBlob(ok, 'image/jpeg', CALIDAD_JPEG))
    if(!blob) throw new Error('No se pudo achicar la imagen')
    return new Uint8Array(await blob.arrayBuffer())
}

/** Pasa los bytes por un CompressionStream o un DecompressionStream del navegador. */
const por = async (datos: Uint8Array, flujo: CompressionStream | DecompressionStream): Promise<Uint8Array> =>
    new Uint8Array(await new Response(new Blob([datos as BlobPart]).stream().pipeThrough(flujo)).arrayBuffer())

/**
 * El archivo achicado y listo para subir. Si ni asi entra en TOPE_BYTES,
 * falla con un mensaje para mostrar tal cual.
 */
export const preparar = async (archivo: File): Promise<ArchivoPreparado> => {
    let preparado: ArchivoPreparado

    if(ES_FOTO.test(archivo.type)) {
        const datos = await a_jpeg(archivo)
        const nombre = archivo.name.replace(/\.[^.]+$/, '') + '.jpg'
        preparado = { nombre, tipo: 'image/jpeg', bytes: datos.length, compresion: 'jpeg', datos, partes: 0 }
    }
    else {
        const original = new Uint8Array(await archivo.arrayBuffer())
        const gzip     = await por(original, new CompressionStream('gzip'))
        // Si comprimido pesa mas (ya venia muy comprimido), va tal cual.
        preparado = gzip.length < original.length
            ? { nombre: archivo.name, tipo: archivo.type, bytes: original.length, compresion: 'gzip',    datos: gzip,     partes: 0 }
            : { nombre: archivo.name, tipo: archivo.type, bytes: original.length, compresion: 'ninguna', datos: original, partes: 0 }
    }

    if(preparado.datos.length > TOPE_BYTES)
        throw new Error(`El archivo pesa ${peso_legible(preparado.datos.length)} y el máximo es ${peso_legible(TOPE_BYTES)}.`)

    preparado.partes = Math.max(1, Math.ceil(preparado.datos.length / PARTE))
    return preparado
}

// ---------------------------------------------------------------- partir y unir

export const partir = (datos: Uint8Array): Uint8Array[] =>
    Array.from({ length: Math.max(1, Math.ceil(datos.length / PARTE)) },
        (_, i) => datos.subarray(i * PARTE, (i + 1) * PARTE))

export const unir = (partes: Uint8Array[]): Uint8Array => {
    const todo = new Uint8Array(partes.reduce((suma, p) => suma + p.length, 0))
    let desde = 0
    for(const p of partes) { todo.set(p, desde); desde += p.length }
    return todo
}

/** Lo que se bajo, ya listo para abrir: descomprimido si hacia falta. */
export const restaurar = async (datos: Uint8Array, guardado: ArchivoGuardado): Promise<Blob> => {
    const listos = guardado.compresion === 'gzip'
        ? await por(datos, new DecompressionStream('gzip'))
        : datos
    return new Blob([listos as BlobPart], { type: guardado.tipo })
}

// ---------------------------------------------------------------- mostrar

/** "320 KB", "1,4 MB". */
export const peso_legible = (bytes: number): string =>
    bytes < 1024 * 1024
        ? `${Math.max(1, Math.round(bytes / 1024))} KB`
        : `${(bytes / 1024 / 1024).toLocaleString('es-AR', { maximumFractionDigits: 1 })} MB`
