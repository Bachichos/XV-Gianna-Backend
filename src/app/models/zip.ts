/**
 * Un .zip armado en el navegador, sin librerias: para "Descargar todas" del
 * album. Sin comprimir (metodo "store"): las fotos ya son JPEG, comprimirlas
 * de nuevo no gana nada y solo tarda.
 *
 * El formato: por cada archivo, una cabecera local y sus bytes; al final,
 * el directorio central (una entrada por archivo) y el cierre. Todos los
 * numeros en little-endian.
 */

export type ArchivoZip = { nombre: string, datos: Uint8Array, fecha?: Date }

/** La tabla del CRC-32, el control que el zip pide de cada archivo. */
const TABLA = (() => {
    const t = new Uint32Array(256)
    for(let n = 0; n < 256; n++) {
        let c = n
        for(let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1
        t[n] = c >>> 0
    }
    return t
})()

export const crc32 = (datos: Uint8Array): number => {
    let c = 0xFFFFFFFF
    for(let i = 0; i < datos.length; i++) c = TABLA[(c ^ datos[i]) & 0xFF] ^ (c >>> 8)
    return (c ^ 0xFFFFFFFF) >>> 0
}

/** Fecha y hora en el formato de MS-DOS, que es el que usa el zip. */
const dos = (f: Date) => ({
    hora:  (f.getHours() << 11) | (f.getMinutes() << 5) | (f.getSeconds() >> 1),
    fecha: ((f.getFullYear() - 1980) << 9) | ((f.getMonth() + 1) << 5) | f.getDate(),
})

export const armar_zip = (archivos: ArchivoZip[]): Blob => {
    const codificar = new TextEncoder()
    const partes: Uint8Array[] = []
    const centrales: Uint8Array[] = []
    let desplazamiento = 0

    for(const a of archivos) {
        const nombre = codificar.encode(a.nombre)
        const crc = crc32(a.datos)
        const { hora, fecha } = dos(a.fecha ?? new Date())

        // Cabecera local (30 bytes + nombre). El bit 11 avisa que el nombre va en UTF-8.
        const local = new Uint8Array(30 + nombre.length)
        const l = new DataView(local.buffer)
        l.setUint32(0, 0x04034b50, true)
        l.setUint16(4, 20, true)
        l.setUint16(6, 0x0800, true)
        l.setUint16(8, 0, true)
        l.setUint16(10, hora, true)
        l.setUint16(12, fecha, true)
        l.setUint32(14, crc, true)
        l.setUint32(18, a.datos.length, true)
        l.setUint32(22, a.datos.length, true)
        l.setUint16(26, nombre.length, true)
        l.setUint16(28, 0, true)
        local.set(nombre, 30)

        // Su entrada en el directorio central (46 bytes + nombre).
        const central = new Uint8Array(46 + nombre.length)
        const c = new DataView(central.buffer)
        c.setUint32(0, 0x02014b50, true)
        c.setUint16(4, 20, true)
        c.setUint16(6, 20, true)
        c.setUint16(8, 0x0800, true)
        c.setUint16(10, 0, true)
        c.setUint16(12, hora, true)
        c.setUint16(14, fecha, true)
        c.setUint32(16, crc, true)
        c.setUint32(20, a.datos.length, true)
        c.setUint32(24, a.datos.length, true)
        c.setUint16(28, nombre.length, true)
        c.setUint32(42, desplazamiento, true)
        central.set(nombre, 46)

        partes.push(local, a.datos)
        centrales.push(central)
        desplazamiento += local.length + a.datos.length
    }

    const largo_central = centrales.reduce((s, x) => s + x.length, 0)
    const fin = new Uint8Array(22)
    const f = new DataView(fin.buffer)
    f.setUint32(0, 0x06054b50, true)
    f.setUint16(8, archivos.length, true)
    f.setUint16(10, archivos.length, true)
    f.setUint32(12, largo_central, true)
    f.setUint32(16, desplazamiento, true)

    return new Blob([...partes, ...centrales, fin] as BlobPart[], { type: 'application/zip' })
}
