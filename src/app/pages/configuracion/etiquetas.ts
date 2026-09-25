import { TEXTOS } from '../../models/textos';
import { SeccionOpcional, SECCIONES_OPCIONALES } from '../../models/configuracion';

type Textos = typeof TEXTOS
export type Seccion = keyof Textos

/**
 * Las secciones en el orden en que aparecen en la invitacion, con el
 * nombre con que se las reconoce y la etiqueta de cada uno de sus textos.
 * Un texto que no este aca no se ofrece para editar.
 */
export const SECCIONES: { id: Seccion, nombre: string, textos: Record<string, string> }[] = [
    { id: 'sobre',        nombre: 'Sobre', textos: {
        pista: 'Pista para abrirlo' } },
    { id: 'presentacion', nombre: 'Presentación', textos: {
        antetitulo: 'Antetítulo, sobre el nombre' } },
    { id: 'invitacion',   nombre: 'Invitación', textos: {
        frase: 'Frase de invitación' } },
    { id: 'cuenta',       nombre: 'Cuenta regresiva', textos: {
        antetitulo:     'Antetítulo, sobre el reloj',
        hoy_antetitulo: 'El día de la fiesta: antetítulo',
        hoy_titulo:     'El día de la fiesta: título',
        hoy_pie:        'El día de la fiesta: pie',
        despues_titulo: 'Después de la fiesta: título',
        despues_pie:    'Después de la fiesta: pie' } },
    { id: 'programa',     nombre: 'Programa', textos: {
        titulo: 'Título' } },
    { id: 'informacion',  nombre: 'Información importante', textos: {
        titulo: 'Título' } },
    { id: 'ubicacion',    nombre: 'Dónde', textos: {
        titulo:     'Título',
        boton_maps: 'Botón de Google Maps',
        boton_waze: 'Botón de Waze' } },
    { id: 'agendar',      nombre: 'Agendá la fecha', textos: {
        titulo:       'Título',
        nota:         'Nota',
        boton_google: 'Botón de Google Calendar',
        boton_otro:   'Botón de otro calendario',
        calendario:   'Descripción en el calendario del invitado' } },
    { id: 'regalo',       nombre: 'Regalo', textos: {
        titulo: 'Título' } },
    { id: 'confirmacion', nombre: '¿Asistirás?', textos: {
        titulo:        'Título',
        instruccion:   'Instrucción, sobre las personas',
        boton:         'Botón para confirmar',
        gracias:       'Ya respondieron: agradecimiento',
        cambios:       'Ya respondieron: nota de cambios',
        cancelada:     'Tarjeta cancelada',
        cerrado:       'Confirmaciones cerradas',
        sin_enviar:    'Tarjeta todavía no enviada',
        dieta_persona: 'Pregunta de alergias, por persona',
        dieta_general: 'Pregunta de alergias, general',
        dieta_ejemplo: 'Ejemplos de alergias' } },
    { id: 'estados',      nombre: 'Pantallas de carga y de error', textos: {
        cargando:             'Mientras carga',
        personal_titulo:      'Link sin código: título',
        personal_texto:       'Link sin código: texto',
        no_encontrada_titulo: 'Tarjeta no encontrada: título',
        no_encontrada_texto:  'Tarjeta no encontrada: texto',
        error_titulo:         'Error de conexión: título',
        error_texto:          'Error de conexión: texto',
        reintentar:           'Botón de reintentar' } },
]

export const es_opcional = (s: Seccion): s is Seccion & SeccionOpcional =>
    (SECCIONES_OPCIONALES as readonly string[]).includes(s)

/** Los datos que se completan solos dentro de un texto, con su explicacion. */
export const MARCADORES: Record<string, string> = {
    '{hora}':   'la hora de la fiesta',
    '{cierre}': 'el último día para confirmar',
}

/** Que marcadores trae un texto por defecto: el nuevo tiene que conservarlos. */
export const marcadores_de = (texto: string): string[] => texto.match(/\{\w+\}/g) ?? []

/** Los iconos del programa (frontend/src/components/IconoPrograma.svelte). */
export const ICONOS = [
    { etiqueta: 'Estrella (sin dibujo)', valor: '' },
    { etiqueta: 'Puerta',                valor: 'puerta' },
    { etiqueta: 'Corona',                valor: 'corona' },
    { etiqueta: 'Notas musicales',       valor: 'notas' },
    { etiqueta: 'Plato y cubiertos',     valor: 'cena' },
    { etiqueta: 'Torta',                 valor: 'torta' },
    { etiqueta: 'Bola de espejos',       valor: 'bola' },
]
