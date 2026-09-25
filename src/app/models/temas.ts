/**
 * Los temas de fabrica que se pueden elegir. Es la lista para el selector:
 * la definicion de cada uno (colores, tipografias, adornos) vive en la
 * invitacion, en frontend/src/models/tema.ts. El id tiene que coincidir.
 */
export const TEMAS_DISPONIBLES = [
    {
        id:          'noche-de-gala',
        nombre:      'Noche de gala',
        descripcion: 'Azul marino y plata, con estrellas. Secciones de noche y de papel alternadas.',
    },
    {
        id:          'rosa-y-oro',
        nombre:      'Rosa y oro',
        descripcion: 'Bordó profundo y oro rosado, sobre marfil. Romántico y cálido.',
    },
    {
        id:          'esmeralda-y-champagne',
        nombre:      'Esmeralda y champagne',
        descripcion: 'Verde bosque y champagne, con títulos en mayúsculas grabadas. Elegante y clásico.',
    },
]
