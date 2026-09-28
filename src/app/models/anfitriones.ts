/**
 * Los anfitriones: quienes estan en la fiesta sin recibir invitacion (la
 * cumpleañera, y si hace falta la familia que organiza). Cuentan como
 * personas confirmadas en todos los totales, en los menus y en las mesas;
 * no en la lista de la puerta ni en el avance de las respuestas, porque no
 * tienen nada que responder.
 *
 * Viven en anfitriones/lista, que solo leen los administradores: no son
 * parte de la invitacion publica.
 */
export type Anfitrion = {
    /** c1, c2...: el asiento en las mesas es 'casa/c1'. */
    id:             string
    nombre:         string
    menu_infantil?: boolean
    /** Alergia, intolerancia o dieta, como en los invitados. */
    alimentacion?:  string
}

/** Si nunca se guardo la lista, se propone a la festejada: siempre esta. */
export const anfitriones_por_defecto = (festejada: string): Anfitrion[] =>
    [{ id: 'c1', nombre: festejada || 'Anfitrión' }]

/** El siguiente id libre: c1, c2... Nunca se reutiliza uno que siga en la lista. */
export const siguiente_id_anfitrion = (lista: { id: string }[]): string =>
    `c${Math.max(0, ...lista.map(a => Number(a.id.slice(1)) || 0)) + 1}`
