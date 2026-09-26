/**
 * La marca del backoffice: el nombre del evento y su logo, arriba del menu,
 * en la barra del telefono, en el login y en la pestana del navegador.
 *
 * Vive en Firebase, en `configuracion/marca`. Es de lectura publica (como
 * toda la configuracion), asi que el login la puede mostrar antes de que
 * alguien entre. Se edita desde el lapiz, en el menu.
 */
export type Marca = {
    nombre: string
    /**
     * La imagen del logo, ya achicada, como data URL ('data:image/webp;...').
     * Va dentro del documento porque el plan gratuito de Firebase no tiene
     * Storage. null = el monograma "XV" de siempre.
     */
    logo: string | null
}

export const MARCA_POR_DEFECTO: Marca = {
    nombre: 'Mis 15 · Gianna',
    logo:   null,
}

/** El lado mas largo del logo, en pixeles. Se ve a 44 px: 256 alcanza de sobra, aun en pantallas nitidas. */
export const LOGO_MAXIMO = 256

/**
 * Achica una imagen a LOGO_MAXIMO y la pasa a data URL, sin deformarla y
 * con fondo transparente. Toda imagen pasa por un canvas, tambien los SVG:
 * asi lo guardado es siempre una imagen chica y plana, sin nada adentro.
 */
export const preparar_logo = (archivo: File): Promise<string> =>
    new Promise((resolver, rechazar) => {
        const url = URL.createObjectURL(archivo)
        const img = new Image()
        img.onload = () => {
            const escala = Math.min(1, LOGO_MAXIMO / Math.max(img.naturalWidth || LOGO_MAXIMO, img.naturalHeight || LOGO_MAXIMO))
            const ancho = Math.max(1, Math.round((img.naturalWidth  || LOGO_MAXIMO) * escala))
            const alto  = Math.max(1, Math.round((img.naturalHeight || LOGO_MAXIMO) * escala))
            const lienzo = Object.assign(document.createElement('canvas'), { width: ancho, height: alto })
            lienzo.getContext('2d')!.drawImage(img, 0, 0, ancho, alto)
            URL.revokeObjectURL(url)
            // WebP pesa menos; si el navegador no sabe hacerlo, devuelve PNG.
            resolver(lienzo.toDataURL('image/webp', 0.92))
        }
        img.onerror = () => { URL.revokeObjectURL(url); rechazar(new Error('No se pudo leer la imagen')) }
        img.src = url
    })
