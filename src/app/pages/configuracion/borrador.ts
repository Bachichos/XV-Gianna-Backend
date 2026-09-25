import { Configuracion, ConfigSecciones, SECCIONES_OPCIONALES } from '../../models/configuracion';
import { TEXTOS } from '../../models/textos';
import { SECCIONES, Seccion } from './etiquetas';
import { partes, instante, cierre_desde_ultimo_dia, ultimo_dia_desde_cierre } from './fechas';

/**
 * El borrador: la configuracion como la edita una persona. Las fechas van
 * en dia y hora sueltos, los textos vacios quieren decir "el de fabrica",
 * y todas las secciones tienen `visible` aunque solo algunas se apaguen.
 */
export type Borrador = {
    festejada: string
    titulo:    string
    zona:      string
    fecha_dia: string, fecha_hora: string
    termina_dia: string, termina_hora: string
    ultimo_dia: string
    salon: Configuracion['evento']['salon']
    link_largo: string
    programa: { hora: string, titulo: string, icono: string }[]
    informacion: { titulo: string, texto: string }[]
    regalo: { para: 'todos' | 'algunas', categorias: string[], texto: string, alias: string, cbu: string, titular: string }
    alergias: Configuracion['evento']['confirmacion']['alergias']
    secciones: Record<Seccion, { visible: boolean, textos: Record<string, string> }>
    tema: string
}

export const textos_de = (s: Seccion): Record<string, string> => TEXTOS[s] as Record<string, string>

/** De la configuracion guardada al borrador. */
export const a_borrador = (c: Configuracion): Borrador => {
    const e = c.evento
    const inicio = partes(e.fecha, e.zona), fin = partes(e.termina, e.zona)
    const secciones = {} as Borrador['secciones']
    for(const { id } of SECCIONES) {
        const guardada = (c.secciones as Record<string, { visible?: boolean, textos?: Record<string, string> }>)[id] ?? {}
        secciones[id] = {
            visible: guardada.visible ?? true,
            textos:  Object.fromEntries(Object.keys(textos_de(id)).map(k => [k, guardada.textos?.[k] ?? ''])),
        }
    }
    return {
        festejada: e.festejada, titulo: e.titulo, zona: e.zona,
        fecha_dia: inicio.dia, fecha_hora: inicio.hora,
        termina_dia: fin.dia, termina_hora: fin.hora,
        ultimo_dia: ultimo_dia_desde_cierre(e.cierre),
        salon: { ...e.salon },
        link_largo: '',
        programa: e.programa.map(p => ({ hora: p.hora, titulo: p.titulo, icono: p.icono ?? '' })),
        informacion: e.informacion.map(d => ({ ...d })),
        regalo: {
            para:       e.regalo.visible_para === 'todos' ? 'todos' : 'algunas',
            categorias: Array.isArray(e.regalo.visible_para) ? [...e.regalo.visible_para] : [],
            texto: e.regalo.texto, alias: e.regalo.alias, cbu: e.regalo.cbu, titular: e.regalo.titular,
        },
        alergias: e.confirmacion.alergias,
        secciones,
        tema: c.tema.id,
    }
}

/** Del borrador a los tres documentos, tal como se guardan. */
export const a_configuracion = (b: Borrador): Configuracion => {
    const secciones: Record<string, { visible?: boolean, textos?: Record<string, string> }> = {}
    for(const { id } of SECCIONES) {
        const cambiados = Object.fromEntries(Object.entries(b.secciones[id].textos)
            .map(([k, v]) => [k, v.trim()] as const)
            .filter(([k, v]) => v !== '' && v !== textos_de(id)[k]))
        const s: { visible?: boolean, textos?: Record<string, string> } = {}
        if((SECCIONES_OPCIONALES as readonly string[]).includes(id)) s.visible = b.secciones[id].visible
        if(Object.keys(cambiados).length) s.textos = cambiados
        if(Object.keys(s).length) secciones[id] = s
    }
    return {
        evento: {
            festejada: b.festejada.trim(),
            titulo:    b.titulo.trim(),
            fecha:     instante(b.fecha_dia, b.fecha_hora, b.zona),
            termina:   instante(b.termina_dia, b.termina_hora, b.zona),
            cierre:    cierre_desde_ultimo_dia(b.ultimo_dia),
            zona:      b.zona,
            salon:     { ...b.salon, latitud: Number(b.salon.latitud), longitud: Number(b.salon.longitud) },
            programa:  b.programa.map(p => ({ hora: p.hora, titulo: p.titulo.trim(), icono: p.icono })),
            informacion: b.informacion.map(d => ({ titulo: d.titulo.trim(), texto: d.texto.trim() })),
            regalo: {
                visible_para: b.regalo.para === 'todos' ? 'todos' : b.regalo.categorias,
                texto: b.regalo.texto.trim(), alias: b.regalo.alias.trim(),
                cbu: b.regalo.cbu.trim(), titular: b.regalo.titular.trim(),
            },
            confirmacion: { alergias: b.alergias },
        },
        secciones: secciones as ConfigSecciones,
        tema: { id: b.tema },
    }
}
