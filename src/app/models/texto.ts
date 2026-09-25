/**
 * Deja el texto listo para comparar en un buscador: sin acentos, sin enes
 * con tilde y en minusculas. Asi "perez" encuentra a "Pérez" y "munoz" a
 * "Muñoz", que es lo que uno espera al escribir apurado.
 *
 * NFD separa cada letra de su acento en dos caracteres, y despues se quitan
 * los acentos sueltos, que viven en ese rango unicode.
 */
export const sin_acentos = (texto: string): string =>
    (texto ?? '')
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .trim()
