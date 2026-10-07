/**
 * El contacto de un proveedor es texto libre ("@fotox · 11 5555-1234").
 * De ahi se sacan los botones para hablarle: WhatsApp y Llamar si hay un
 * telefono, Instagram si hay un @usuario, Escribir si hay un mail, Abrir si
 * hay una pagina. Lo que no se reconoce queda como texto, sin boton.
 *
 * Los telefonos sin codigo de pais se toman como de Argentina, que es
 * donde esta la fiesta. wa.me necesita el numero completo, y los moviles
 * argentinos llevan un 9 despues del 54: sin el, el chat abre vacio.
 */

export type Enlace = {
    tipo:     'whatsapp' | 'llamar' | 'instagram' | 'mail' | 'web'
    etiqueta: string
    url:      string
    icono:    string
}

const MAIL      = /[^\s@<>()]+@[^\s@<>()]+\.[a-z]{2,}/gi
const WEB       = /\b(?:https?:\/\/|www\.)[^\s<>()]+/gi
const INSTAGRAM = /(?:^|[^\w.@])@([a-z0-9._]{2,30})/gi
/** Digitos con sus separadores habituales: +54 9 (11) 5555-1234. */
const TELEFONO  = /\+?\d[\d\s().-]{6,}\d/g

/**
 * El telefono como lo pide wa.me (solo digitos, con codigo de pais), o
 * null si no se puede saber de donde es.
 */
export const internacional = (texto: string): string | null => {
    const con_mas = texto.trim().startsWith('+') || texto.trim().startsWith('00')
    let d = texto.replace(/\D/g, '').replace(/^00/, '')

    if(con_mas || (d.startsWith('54') && d.length >= 12)) {
        // Argentina: el movil lleva el 9 despues del 54.
        if(d.startsWith('54') && !d.startsWith('549') && d.length === 12) d = `549${d.slice(2)}`
        return d.length >= 10 && d.length <= 15 ? d : null
    }

    // Sin codigo de pais: argentino. Sin el 0 de larga distancia...
    d = d.replace(/^0/, '')
    // ...y sin el 15 de los moviles, que va despues del codigo de area (2 a 4 cifras).
    if(d.length === 12) {
        for(const area of [2, 3, 4]) {
            if(d.slice(area, area + 2) === '15') { d = d.slice(0, area) + d.slice(area + 2); break }
        }
    }
    return d.length === 10 ? `549${d}` : null
}

/** Los botones para el contacto, sin repetidos y en este orden: WhatsApp, Llamar, Instagram, Escribir, Abrir. */
export const enlaces_de = (contacto: string): Enlace[] => {
    const texto = contacto ?? ''
    const enlaces: Enlace[] = []
    const agregar = (e: Enlace) => { if(!enlaces.some(x => x.url === e.url)) enlaces.push(e) }

    const mails = [...texto.matchAll(MAIL)].map(m => m[0])
    const webs  = [...texto.matchAll(WEB)].map(m => m[0].replace(/[.,;]+$/, ''))
    // Los numeros de un mail o de una pagina no son telefonos.
    const sin_mails_ni_webs = [...mails, ...webs].reduce((t, x) => t.replace(x, ' '), texto)

    for(const m of sin_mails_ni_webs.matchAll(TELEFONO)) {
        const numero = internacional(m[0])
        if(numero) {
            agregar({ tipo: 'whatsapp', etiqueta: 'WhatsApp', url: `https://wa.me/${numero}`, icono: 'pi-whatsapp' })
            agregar({ tipo: 'llamar',   etiqueta: 'Llamar',   url: `tel:+${numero}`,         icono: 'pi-phone' })
        }
        else if(m[0].replace(/\D/g, '').length >= 8)
            // De donde sea que no sabemos: al menos se puede llamar tal cual.
            agregar({ tipo: 'llamar', etiqueta: 'Llamar', url: `tel:${m[0].replace(/[^\d+]/g, '')}`, icono: 'pi-phone' })
    }

    for(const m of sin_mails_ni_webs.matchAll(INSTAGRAM))
        agregar({ tipo: 'instagram', etiqueta: `@${m[1]}`, url: `https://instagram.com/${m[1].replace(/\.$/, '')}`, icono: 'pi-instagram' })

    for(const mail of mails)
        agregar({ tipo: 'mail', etiqueta: 'Escribir', url: `mailto:${mail}`, icono: 'pi-envelope' })

    for(const web of webs) {
        const url = web.startsWith('http') ? web : `https://${web}`
        // Un link de Instagram es Instagram, no una pagina cualquiera.
        const usuario = /instagram\.com\/([a-z0-9._]+)/i.exec(url)?.[1]
        if(usuario) agregar({ tipo: 'instagram', etiqueta: `@${usuario}`, url: `https://instagram.com/${usuario}`, icono: 'pi-instagram' })
        else        agregar({ tipo: 'web', etiqueta: 'Abrir la página', url, icono: 'pi-external-link' })
    }
    return enlaces
}
