import { AjustesTema } from './configuracion';

/**
 * Los temas de fabrica que se pueden elegir. Es la lista para el selector:
 * la definicion de cada uno (colores, tipografias, adornos) vive en la
 * invitacion, en frontend/src/models/tema.ts. El id tiene que coincidir.
 *
 * `trae` es como viene cada tema de fabrica: COPIA de presentacion.adorno,
 * programa.marca, estrellas y fugaces de frontend/src/models/tema.ts. Sirve
 * para mostrar de donde parten los ajustes y para guardar solo lo cambiado.
 */
export const TEMAS_DISPONIBLES: { id: string, nombre: string, descripcion: string, trae: Required<AjustesTema> }[] = [
    {
        id:          'noche-de-gala',
        nombre:      'Noche de gala',
        descripcion: 'Azul marino y plata, con estrellas. Secciones de noche y de papel alternadas.',
        trae:        { adorno: 'perfil', marca: 'circulos', estrellas: true, fugaces: true },
    },
    {
        id:          'rosa-y-oro',
        nombre:      'Rosa y oro',
        descripcion: 'Bordó profundo y oro rosado, sobre marfil. Romántico y cálido.',
        trae:        { adorno: 'perfil', marca: 'circulos', estrellas: true, fugaces: true },
    },
    {
        id:          'esmeralda-y-champagne',
        nombre:      'Esmeralda y champagne',
        descripcion: 'Verde bosque y champagne, con títulos en mayúsculas grabadas. Elegante y clásico.',
        trae:        { adorno: 'perfil', marca: 'circulos', estrellas: true, fugaces: true },
    },
]

/** Como viene de fabrica el tema con ese id. Un id desconocido: el primero. */
export const trae_el_tema = (id: string): Required<AjustesTema> =>
    (TEMAS_DISPONIBLES.find(t => t.id === id) ?? TEMAS_DISPONIBLES[0]).trae

export const OPCIONES_ADORNO: { valor: Required<AjustesTema>['adorno'], etiqueta: string, detalle: string }[] = [
    { valor: 'perfil',       etiqueta: 'Perfil y caballo',   detalle: 'La cabeza del caballo con el perfil de ella adentro, arriba del nombre.' },
    { valor: 'herradura',    etiqueta: 'Herradura',          detalle: 'Ella y su caballo dentro de una herradura, arriba del nombre.' },
    { valor: 'luna',         etiqueta: 'Luna llena',         detalle: 'Una luna de plata arriba, con la silueta a contraluz.' },
    { valor: 'silueta',      etiqueta: 'Silueta grabada',    detalle: 'La silueta en plata al pie, como un grabado.' },
    { valor: 'constelacion', etiqueta: 'Constelación',       detalle: 'La silueta dibujada con estrellas, que se traza al abrir el sobre.' },
]

export const OPCIONES_MARCA: { valor: Required<AjustesTema>['marca'], etiqueta: string }[] = [
    { valor: 'circulos',  etiqueta: 'Íconos en círculos' },
    { valor: 'iconos',    etiqueta: 'Íconos sueltos' },
    { valor: 'estrellas', etiqueta: 'Destellos' },
]
