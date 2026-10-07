/**
 * Las listas de nombres que se editan a mano: los rubros de los
 * presupuestos, los tipos de cita. Cada uno tiene un id fijo y un nombre
 * que se puede cambiar: lo que los usa guarda el id, asi renombrar no
 * obliga a tocar nada mas.
 */
export type Nombrado = {
    id:     string
    nombre: string
}

/** El siguiente id libre con ese prefijo: r1, r2... Nunca se reutiliza uno que siga en la lista. */
export const siguiente_id = (prefijo: string, lista: { id: string }[]): string =>
    `${prefijo}${Math.max(0, ...lista.map(x => Number(x.id.slice(prefijo.length)) || 0)) + 1}`

/**
 * Lo que se eligio en un desplegable con "+ Nuevo": si ya hay uno que se
 * llama igual (sin importar mayusculas), ese; si no, uno nuevo. Devuelve
 * el id y, si hubo que agregarlo, la lista nueva para guardar.
 */
export const usar_o_agregar = (nombre: string, lista: Nombrado[], prefijo: string): { id: string, lista_nueva: Nombrado[] | null } => {
    const limpio = nombre.trim()
    const igual  = lista.find(x => x.nombre.toLocaleLowerCase('es') === limpio.toLocaleLowerCase('es'))
    if(igual) return { id: igual.id, lista_nueva: null }
    const nuevo = { id: siguiente_id(prefijo, lista), nombre: limpio }
    return { id: nuevo.id, lista_nueva: [...lista, nuevo] }
}

/** Cuantas veces aparece cada id en lo que lo usa: con alguna, no se puede quitar. */
export const contar_usos = (ids: string[]): Record<string, number> => {
    const usos: Record<string, number> = {}
    for(const id of ids) usos[id] = (usos[id] ?? 0) + 1
    return usos
}
