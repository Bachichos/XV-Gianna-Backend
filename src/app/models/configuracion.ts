/*
 * COPIA de frontend/src/models/configuracion.ts: tienen que ser iguales.
 * Si se cambia una, se copia a la otra. La invitacion y el backoffice
 * leen y escriben los mismos documentos de Firebase.
 */
/**
 * La configuracion de la fiesta: lo que va a vivir en Firebase, en la
 * coleccion `configuracion`, en tres documentos:
 *
 *   evento      los datos de la fiesta: quien, cuando, donde, el programa,
 *               la informacion, el regalo, como se confirma.
 *   secciones   por cada seccion, si se ve y sus textos.
 *   tema        cual de los temas de fabrica esta elegido.
 *
 * Un proyecto de Firebase por fiesta: cada una tiene su propia
 * configuracion, y no hace falta decir a que fiesta pertenece.
 *
 * POR_DEFECTO son los datos de los 15 de Gianna con "Noche de gala". Todo
 * lo que falte en Firebase sale de aca, campo por campo: con la
 * configuracion vacia, la invitacion se ve exactamente como hoy.
 */
import { TEXTOS } from './textos'

// ---------------------------------------------------------------- evento

export type ItemPrograma = { hora: string, titulo: string, icono?: string }
export type Detalle      = { titulo: string, texto: string }

export type ConfigEvento = {
    /** A quien se festeja: el nombre grande de la presentacion. */
    festejada: string
    /** Como aparece en el calendario del invitado. */
    titulo:    string

    /**
     * Las fechas van con su zona horaria escrita (el -03:00): asi el
     * navegador de un invitado que este de viaje no calcula mal. Dia, mes,
     * hora y el "13 de marzo" del cierre se sacan de aca, no se escriben.
     */
    fecha:   string
    /** Cuando termina: hace falta para agendar el evento. */
    termina: string
    /**
     * Cuando cierran las confirmaciones. Tiene que coincidir con la regla
     * de Firestore (request.time < timestamp.date(...)): si aca dijera otra
     * cosa, el formulario dejaria intentar algo que la base va a negar.
     */
    cierre:  string
    /**
     * El mismo cierre, en milisegundos desde 1970. Lo escribe el backoffice
     * al guardar, y lo lee la regla de seguridad de Firebase: las reglas no
     * saben leer una fecha escrita como texto. No se edita a mano.
     */
    cierre_ms?: number
    /** La zona de la fiesta, para mostrar fecha y hora como alla. */
    zona:    string

    /**
     * Google Maps va con el link que se comparte desde la app: abre la
     * ficha del lugar. Waze no entiende esos links, asi que va con las
     * coordenadas de esa misma ficha (el tramo @latitud,longitud del link
     * largo). Si el salon cambia, hay que cambiar las dos cosas.
     */
    salon: {
        nombre:    string
        direccion: string
        maps:      string
        latitud:   number
        longitud:  number
    }

    /** icono: su dibujo en IconoPrograma.svelte. */
    programa: ItemPrograma[]

    /**
     * Cada bloque, un titulo corto y un texto de una o dos lineas: mas
     * largo que eso, en un telefono, deja de leerse. Admiten {cierre}.
     */
    informacion: Detalle[]

    regalo: {
        /** 'todos', o las categorias de tarjeta que lo ven: ['Familia']. */
        visible_para: 'todos' | string[]
        texto:        string
        alias:        string
        cbu:          string
        titular:      string
    }

    confirmacion: {
        /**
         * Donde se pregunta por alergias, intolerancias y dietas:
         *   'por_persona'  en la tarjeta de cada uno, al marcar que viene.
         *   'general'      una sola pregunta abajo, con casos y chips.
         * En las dos es obligatoria.
         */
        alergias: 'por_persona' | 'general'
    }

    /**
     * Las categorias de las tarjetas (Familia, Colegio...). Sirven para
     * filtrar, para las estadisticas y para elegir quien ve el regalo.
     * Cambiar el nombre de una no cambia las tarjetas que ya la tienen.
     */
    categorias: string[]

    /**
     * Los mensajes de WhatsApp que manda el backoffice. Marcadores:
     *   {nombre}     a quien va la tarjeta
     *   {link}       su invitacion (obligatorio)
     *   {festejada}  a quien se festeja
     *   {fecha}      "Sábado 3 de abril de 2027"
     *   {cierre}     el ultimo dia para confirmar: "13 de marzo"
     */
    mensajes: {
        invitacion:   string
        recordatorio: string
    }
}

// ---------------------------------------------------------------- secciones

type Textos = typeof TEXTOS

/** Las secciones que se pueden apagar. Las demas se ven siempre. */
export const SECCIONES_OPCIONALES = ['cuenta', 'programa', 'informacion', 'ubicacion', 'agendar', 'regalo'] as const
export type SeccionOpcional = typeof SECCIONES_OPCIONALES[number]

/**
 * Por cada seccion, sus textos: solo los que se cambiaron, el resto sale de
 * models/textos.ts. Y para las opcionales, si se ve.
 */
export type ConfigSecciones = {
    [S in keyof Textos]?: { textos?: Partial<Textos[S]> }
} & {
    [S in SeccionOpcional]?: { visible?: boolean }
}

// ---------------------------------------------------------------- tema

export type ConfigTema = {
    /** El id de un tema de fabrica (models/tema.ts). */
    id: string
}

// ---------------------------------------------------------------- todo junto

export type Configuracion = {
    evento:    ConfigEvento
    secciones: ConfigSecciones
    tema:      ConfigTema
}

export const POR_DEFECTO: Configuracion = {
    evento: {
        festejada: 'Gianna',
        titulo:    'Los 15 de Gianna',
        fecha:     '2027-04-03T21:30:00-03:00',
        termina:   '2027-04-04T04:00:00-03:00',   // inventado
        cierre:    '2027-03-14T00:00:00Z',        // real: el de las reglas
        zona:      'America/Argentina/Buenos_Aires',

        salon: {
            nombre:    'AVEIRO EVENTOS',
            direccion: 'Apostol San Pablo, F5300 La Rioja, Argentina',
            maps:      'https://maps.app.goo.gl/SoFjsTupSRDWqzv57',
            latitud:   -29.437782,
            longitud:  -66.8651712,
        },

        programa: [   // inventado por ahora
            { hora: '21:30', titulo: 'Recepción',         icono: 'puerta' },
            { hora: '22:00', titulo: 'Entrada de Gianna', icono: 'corona' },
            { hora: '22:30', titulo: 'El vals',           icono: 'notas' },
            { hora: '23:00', titulo: 'Cena',              icono: 'cena' },
            { hora: '00:30', titulo: 'Brindis y torta',   icono: 'torta' },
            { hora: '01:00', titulo: 'A bailar',          icono: 'bola' },
        ],

        informacion: [
            { titulo: 'Código de vestimenta', texto: 'Elegante sport. Te pedimos reservar el AZUL para Gianna.' },
            { titulo: 'Confirmación',         texto: 'Confirmá tu asistencia antes del {cierre}, así podemos organizar las mesas.' },
        ],

        regalo: {
            visible_para: 'todos',
            texto:   '¡Que vengas a festejar conmigo ya es el regalo más lindo! Y si además tenés ganas de hacerme un mimo, te cuento un secreto: estoy ahorrando para un viaje muy soñado, ir a visitar a mi hermana. Cada aporte me acerca un poquito más a ese abrazo. ¡Gracias de corazón!',
            alias:   'gianna.quince.abril',
            cbu:     '0000003100069599765871',
            titular: 'Alejandra Derobertis',
        },

        confirmacion: { alergias: 'por_persona' },

        categorias: ['Familia', 'Amigos Gianna', 'Colegio', 'Amigos padres'],

        // En tono cercano a proposito: el backoffice habla de usted, pero
        // esto lo leen la familia y las amigas. Son dos registros distintos.
        mensajes: {
            invitacion:
`¡Hola {nombre}! 💫

{festejada} cumple 15 y nos encantaría que nos acompañes.

Te dejo tu invitación personal, con toda la información y el botón para confirmar tu asistencia:
{link}

📅 {fecha}`,
            // Sin reproche: puede que simplemente no lo haya visto.
            recordatorio:
`¡Hola {nombre}! 💫

Te escribo para recordarte que todavía no nos confirmaste si venís a los 15 de {festejada}.

Podés responder desde tu invitación, con este mismo link:
{link}

Las confirmaciones cierran el {cierre}. ¡Te esperamos!`,
        },
    },

    secciones: {},

    tema: { id: 'noche-de-gala' },
}

// ---------------------------------------------------------------- combinar

const es_objeto = (v: unknown): v is Record<string, unknown> =>
    typeof v === 'object' && v !== null && !Array.isArray(v)

/**
 * Lo de Firebase encima de lo por defecto, campo por campo. Las listas (el
 * programa, la informacion) se reemplazan enteras: no tiene sentido mezclar
 * el renglon 2 de una con el 2 de otra. Lo vacio (null, undefined) no pisa.
 */
export const combinar = <T>(base: T, encima: unknown): T => {
    if(!es_objeto(base) || !es_objeto(encima)) return (encima ?? base) as T

    const resultado: Record<string, unknown> = { ...base }
    for(const [clave, valor] of Object.entries(encima)) {
        if(valor == null) continue
        resultado[clave] = es_objeto(valor) && es_objeto(resultado[clave])
            ? combinar(resultado[clave], valor)
            : valor
    }
    return resultado as T
}
