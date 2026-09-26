/*
 * COPIA de frontend/src/models/textos.ts: tienen que ser iguales.
 * Si se cambia una, se copia a la otra. La invitacion y el backoffice
 * leen y escriben los mismos documentos de Firebase.
 */
/**
 * Los textos de la invitacion, seccion por seccion. Son los de "Noche de
 * gala" para los 15 de Gianna, y los valores por defecto: cuando exista la
 * configuracion, cada uno se va a poder cambiar desde el backoffice, y el
 * que no se cambie queda como esta aca.
 *
 * Lo que va entre llaves es un dato que se completa solo: {hora}, {cierre}.
 * Se puede mover dentro de la frase, pero no borrar ni renombrar.
 *
 * Aca va solo el CONTENIDO. La mecanica del formulario (Si/No, "falta
 * responder por N personas", las etiquetas para lectores de pantalla) vive
 * en cada componente: es igual en cualquier fiesta.
 */
export const TEXTOS = {
    sobre: {
        pista: 'Tocá el sobre para abrir',
    },

    presentacion: {
        antetitulo: 'Mis 15 años',
    },

    invitacion: {
        /**
         * Sin adjetivo, a proposito: la tarjeta puede ser una persona, una
         * pareja o una familia, y "invitado / invitada / invitados" no se
         * puede resolver sin saber quien la abre.
         */
        frase: 'Tenemos el agrado de invitarte',
    },

    cuenta: {
        antetitulo:     'Falta muy poco',
        hoy_antetitulo: 'Llegó el día',
        hoy_titulo:     '¡Es hoy!',
        hoy_pie:        'Te esperamos a las {hora}.',
        despues_titulo: 'Gracias por acompañarnos',
        despues_pie:    'Fue una noche inolvidable.',
    },

    programa: {
        titulo: 'El programa',
    },

    informacion: {
        titulo: 'Información importante',
    },

    ubicacion: {
        titulo:     'Dónde',
        boton_maps: 'Google Maps',
        boton_waze: 'Waze',
    },

    agendar: {
        titulo:        'Agendá la fecha',
        nota:          'Guardala en tu calendario para que no se te pase.',
        boton_google:  'Google Calendar',
        boton_otro:    'Otro calendario',
        /** La descripcion del evento en el calendario del invitado. */
        calendario:    'Te esperamos para celebrar juntos.',
    },

    regalo: {
        titulo: 'Regalo',
    },

    confirmacion: {
        titulo:         '¿Asistirás?',
        instruccion:    'Marcá, por cada persona, si viene o no.',
        boton:          'Confirmar',
        gracias:        '¡Gracias por responder!',
        cambios:        'Si algo cambia, escribinos y lo resolvemos.',
        cancelada:      'Esta invitación fue dada de baja. Si creés que es un error, escribinos.',
        cerrado:        'Las confirmaciones ya cerraron el {cierre}. Escribinos por WhatsApp y vemos qué podemos hacer.',
        sin_enviar:     'Esta invitación todavía no fue enviada.',
        dieta_persona:  '¿Tiene alguna alergia, intolerancia o dieta especial?',
        dieta_general:  '¿Alguien tiene alguna alergia, intolerancia o dieta especial?',
        dieta_ejemplo:  'Por ejemplo: celiaquía, frutos secos, vegetariana.',
        // El pase: el QR que se muestra en la puerta, una vez que confirmaron.
        pase_titulo:    'Tu pase para la entrada',
        pase_texto:     'Mostrá este código en la puerta del salón: con él recibimos a todo tu grupo.',
        pase_nota:      'Guardalo en tu celular, por si esa noche no tenés señal.',
        pase_boton:     'Guardar mi pase',
        // Agregar la invitacion a la pantalla de inicio, como una app.
        instalar_boton: 'Agregar a la pantalla de inicio',
        instalar_ios:   'En Safari, tocá el botón Compartir (el cuadrado con la flecha) y elegí «Agregar a inicio».',
        instalar_otro:  'Desde el menú del navegador, elegí «Agregar a la pantalla de inicio».',
    },

    /** Las pantallas de antes de la invitacion. */
    estados: {
        cargando:              'Abriendo la invitación…',
        personal_titulo:       'Esta invitación es personal',
        personal_texto:        'Buscá el link que te llegó por WhatsApp: cada invitación tiene el suyo.',
        no_encontrada_titulo:  'No encontramos esta invitación',
        no_encontrada_texto:   'Puede que el link esté incompleto. Probá abrirlo de nuevo desde el mensaje original, o escribinos.',
        error_titulo:          'No pudimos cargar la invitación',
        error_texto:           'Revisá tu conexión y volvé a intentar.',
        reintentar:            'Reintentar',
    },
}

/** Completa los {datos} de un texto: rellenar('a las {hora}', { hora: '21:30' }). */
export const rellenar = (texto: string, datos: Record<string, string>): string =>
    texto.replace(/\{(\w+)\}/g, (entero, clave) => datos[clave] ?? entero)
