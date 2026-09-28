import type { CellHookData, RowInput, Styles } from 'jspdf-autotable';
import { Invitado, invitados_confirmados, TarjetaConId } from '../../models/tarjeta';
import { sin_acentos } from '../../models/texto';
import type { Anfitrion } from '../../models/anfitriones';
import { ANFITRIONES, CASA, clave_de, comensales_de, mesa_de, nombre_de_mesa, ocupa_lugar, PlanoMesas } from '../../models/mesas';

/**
 * La lista de invitados en PDF, para imprimir o pasar por WhatsApp.
 *
 * jsPDF pesa unos 350 kB: se trae recien cuando alguien toca el boton, con
 * import(), para que el backoffice no cargue eso al abrir.
 *
 * OJO de seguridad: de jsPDF solo se usan texto, lineas y save(). Nada de
 * html(), addJS, formularios ni loadFile, que es donde estuvieron todas sus
 * vulnerabilidades. Los nombres los escriben los invitados: van siempre
 * como texto de una celda, que jsPDF escapa.
 */

export type OrdenLista = 'alfabetico' | 'tarjeta' | 'categoria' | 'mesa'

export const ORDENES: { valor: OrdenLista, titulo: string, detalle: string, icono: string }[] = [
  {
    valor:   'alfabetico',
    titulo:  'Orden alfabético',
    detalle: 'Para la puerta: se busca a cada uno por su nombre y se tilda a mano.',
    icono:   'pi pi-sort-alpha-down'
  },
  {
    valor:   'tarjeta',
    titulo:  'Agrupada por tarjeta',
    detalle: 'Cada familia junta, con sus alergias y su mesa.',
    icono:   'pi pi-id-card'
  },
  {
    valor:   'categoria',
    titulo:  'Agrupada por categoría',
    detalle: 'Familia, colegio… Para armar las mesas por grupo.',
    icono:   'pi pi-sitemap'
  },
  {
    valor:   'mesa',
    titulo:  'Agrupada por mesa',
    detalle: 'Para el salón: quién va en cada mesa, con sus alergias y menús.',
    icono:   'pi pi-th-large'
  },
]

const SIN_CATEGORIA = 'Sin categoría'

/** Un confirmado, con su mesa ya resuelta. */
type Renglon = Invitado & { mesa_id: string | null, mesa: string }

type Grupo = { titulo: string, invitados: Renglon[] }

// ------------------------------------------------------------ los datos

/**
 * Los confirmados, repartidos en grupos. En orden alfabetico hay un solo
 * grupo sin titulo. Dentro de una tarjeta la gente va en el orden en que se
 * cargo (primero los padres, despues los chicos), no alfabetico.
 */
const agrupar = (todos: Renglon[], datos: DatosLista): Grupo[] => {
  const { tarjetas, categorias, orden } = datos
  if(orden === 'alfabetico') return [{ titulo: '', invitados: todos }]

  const posicion = new Map<string, number>()
  for(const t of tarjetas)
    (t.personas ?? []).forEach((p, i) => posicion.set(`${t.id}/${p.id}`, i))

  const lugar = (i: Renglon) => posicion.get(`${i.tarjeta_id}/${i.persona_id}`) ?? 0
  const por_tarjeta = (a: Renglon, b: Renglon) =>
    a.tarjeta_nombre.localeCompare(b.tarjeta_nombre, 'es')
    || a.tarjeta_id.localeCompare(b.tarjeta_id)
    || lugar(a) - lugar(b)

  const ordenados = [...todos].sort(por_tarjeta)

  if(orden === 'tarjeta') {
    const grupos = new Map<string, Renglon[]>()
    for(const i of ordenados)
      grupos.set(i.tarjeta_id, [...(grupos.get(i.tarjeta_id) ?? []), i])

    return [...grupos.values()].map(invitados => {
      const primero = invitados[0]
      const confirmados = invitados.length === 1 ? '1 confirmado' : `${invitados.length} confirmados`
      return {
        titulo: [primero.tarjeta_nombre, primero.categoria || SIN_CATEGORIA, confirmados].join('  ·  '),
        invitados
      }
    })
  }

  /* Por mesa: en el orden del plano; quien no tiene mesa, al final. */
  if(orden === 'mesa') {
    const personas = (n: number) => n === 1 ? '1 persona' : `${n} personas`
    const infantiles = (g: Renglon[]) => {
      const n = g.filter(i => i.menu_infantil).length
      return n ? ` (${n} ${n === 1 ? 'infantil' : 'infantiles'})` : ''
    }
    const grupos: Grupo[] = datos.plano.mesas
      .map(m => ({ m, gente: ordenados.filter(i => i.mesa_id === m.id) }))
      .filter(g => g.gente.length)
      .map(g => ({
        titulo:    `${nombre_de_mesa(g.m, datos.festejada)}  ·  ${personas(g.gente.length)}${infantiles(g.gente)}  ·  ${g.m.lugares} lugares`,
        invitados: g.gente,
      }))
    const sin = ordenados.filter(i => !i.mesa_id)
    if(sin.length) grupos.push({ titulo: `Sin mesa  ·  ${personas(sin.length)}`, invitados: sin })
    return grupos
  }

  /* Por categoria: en el orden de Configuracion; las que no esten ahi, al final. */
  const categoria = (i: Renglon) => i.categoria || SIN_CATEGORIA
  const nombres = [...categorias]
  for(const i of ordenados)
    if(!nombres.includes(categoria(i))) nombres.push(categoria(i))

  return nombres
    .map(nombre => ({ nombre, invitados: ordenados.filter(i => categoria(i) === nombre) }))
    .filter(g => g.invitados.length > 0)
    .map(g => ({
      titulo: `${g.nombre}  ·  ${g.invitados.length === 1 ? '1 persona' : `${g.invitados.length} personas`}`,
      invitados: g.invitados
    }))
}

/**
 * Las fuentes que trae jsPDF solo saben dibujar el alfabeto latino
 * (acentos, ñ, ü, comillas). Un emoji u otro alfabeto en un nombre saldria
 * como basura: se quita.
 */
const imprimible = (texto: string): string =>
  (texto ?? '')
    .normalize('NFC')
    .replace(/[^ -ÿ–—‘’“”•…€]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

// ------------------------------------------------------------ las columnas

type Columna = {
  titulo:  string
  ancho?:  number                 // mm; sin ancho, se reparte lo que sobra
  dato:    (i: Renglon, n: number) => string
}

const NUMERO:       Columna = { titulo: '#',            ancho: 10, dato: (_, n) => String(n) }
const NOMBRE:       Columna = { titulo: 'Nombre',                  dato: i => i.nombre }
const TARJETA:      Columna = { titulo: 'Tarjeta',                 dato: i => i.tarjeta_nombre }
const CATEGORIA:    Columna = { titulo: 'Categoría',    ancho: 34, dato: i => i.categoria || SIN_CATEGORIA }
const ALIMENTACION: Columna = { titulo: 'Alimentación', ancho: 48,
                                dato: i => [i.menu_infantil ? 'Menú infantil' : '', i.alimentacion].filter(Boolean).join(' · ') }
const MESA:         Columna = { titulo: 'Mesa',         ancho: 26, dato: i => i.mesa }
const CASILLA:      Columna = { titulo: '',             ancho: 11, dato: () => '' }

const COLUMNAS: Record<OrdenLista, Columna[]> = {
  alfabetico: [NUMERO, NOMBRE, TARJETA, CATEGORIA, MESA, CASILLA],
  tarjeta:    [NUMERO, NOMBRE, ALIMENTACION, MESA],
  categoria:  [NUMERO, NOMBRE, TARJETA, ALIMENTACION, MESA],
  mesa:       [NUMERO, NOMBRE, TARJETA, ALIMENTACION],
}

// ------------------------------------------------------------ el PDF

/* La paleta del backoffice (app.config.ts), en RGB para jsPDF. */
const TINTA:    [number, number, number] = [44, 58, 77]      // primary 900
const TENUE:    [number, number, number] = [110, 120, 134]
const CABEZA:   [number, number, number] = [55, 78, 107]     // primary 700
const GRUPO:    [number, number, number] = [228, 236, 244]   // primary 100
const LINEA:    [number, number, number] = [200, 216, 232]   // primary 200

const MARGEN = 14   // mm
const PIE    = 18   // mm libres abajo, para el numero de pagina

export type DatosLista = {
  tarjetas:   TarjetaConId[]
  categorias: string[]
  titulo:     string   // "Los 15 de Gianna"
  festejada:  string
  orden:      OrdenLista
  /** Las mesas, para la columna Mesa y la lista por mesa. */
  plano:      PlanoMesas
  /** Van en la lista por mesa, y cuentan como personas esperadas. */
  anfitriones: Anfitrion[]
}

/** Arma el PDF y lo descarga. Devuelve cuantas personas salieron en la lista. */
export const descargar_lista = async (datos: DatosLista): Promise<number> => {
  const [{ jsPDF }, { autoTable }] = await Promise.all([
    import('jspdf'),
    import('jspdf-autotable')
  ])

  // Por mesa entran tambien los anfitriones: se sientan como cualquiera.
  const anfitriones: Invitado[] = datos.orden !== 'mesa' ? [] : datos.anfitriones.map(a => ({
    tarjeta_id: CASA, tarjeta_nombre: ANFITRIONES, persona_id: a.id, nombre: a.nombre,
    categoria: ANFITRIONES, ingreso: null, alimentacion: (a.alimentacion ?? '').trim(), menu_infantil: !!a.menu_infantil,
  }))
  const renglones: Renglon[] = [...anfitriones, ...invitados_confirmados(datos.tarjetas)].map(i => {
    const mesa_id = mesa_de(datos.plano, clave_de(i.tarjeta_id, i.persona_id))
    const mesa    = datos.plano.mesas.find(m => m.id === mesa_id)
    return { ...i, mesa_id, mesa: mesa ? nombre_de_mesa(mesa, datos.festejada) : '' }
  })

  const grupos   = agrupar(renglones, datos)
  const columnas = COLUMNAS[datos.orden]
  const total    = grupos.reduce((n, g) => n + g.invitados.length, 0)
  const ahora    = new Date()
  const opcion   = ORDENES.find(o => o.valor === datos.orden)!

  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  doc.setProperties({ title: imprimible(`Lista de invitados · ${datos.titulo}`) })

  // --- Encabezado, solo en la primera hoja
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(17)
  doc.setTextColor(...TINTA)
  doc.text('Lista de invitados', MARGEN, 20)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(...TENUE)
  const fecha = ahora.toLocaleString('es-AR', { dateStyle: 'long', timeStyle: 'short' })
  doc.text(imprimible(`${datos.titulo}  ·  ${opcion.titulo}`), MARGEN, 26.5)
  const infantiles = grupos.reduce((n, g) => n + g.invitados.filter(i => i.menu_infantil).length, 0)
  const menus = `${total - infantiles} de adulto, ${infantiles} ${infantiles === 1 ? 'infantil' : 'infantiles'}`
  const quienes = anfitriones.length
    ? `${total} personas: confirmadas y anfitriones`
    : `${total} ${total === 1 ? 'persona confirmada' : 'personas confirmadas'}`
  doc.text(imprimible(`${quienes} (${menus})  ·  Generada el ${fecha}`), MARGEN, 31.5)

  // Por mesa, el resumen del salon: lo que el salon necesita saber de un vistazo.
  let arranque = 37
  if(datos.orden === 'mesa') {
    const lugares   = datos.plano.mesas.reduce((n, m) => n + m.lugares, 0)
    const esperadas = comensales_de(datos.tarjetas, datos.anfitriones).filter(ocupa_lugar).length
    const estado    = lugares >= esperadas ? 'alcanza para todos' : `faltan ${esperadas - lugares} lugares`
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...TINTA)
    doc.text(imprimible(`Resumen: ${datos.plano.mesas.length} mesas  ·  ${lugares} lugares  ·  Capacidad ${lugares} / ${esperadas} personas esperadas, ${estado}`), MARGEN, 38)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...TENUE)
    arranque = 44
  }

  /* Las columnas sin ancho fijo se reparten lo que sobra en partes iguales.
     Con 'auto' cada grupo mediria distinto y las tablas no quedarian alineadas. */
  const util     = doc.internal.pageSize.getWidth() - 2 * MARGEN
  const fijas    = columnas.reduce((n, c) => n + (c.ancho ?? 0), 0)
  const flexible = (util - fijas) / columnas.filter(c => !c.ancho).length

  const estilos_columnas = Object.fromEntries(columnas.map((c, n): [number, Partial<Styles>] => [n, {
    cellWidth: c.ancho ?? flexible,
    ...(c === NUMERO ? { halign: 'right', textColor: TENUE } : {}),
  }]))

  /*
   * Cada grupo es una tabla propia, con su titulo como primera fila del
   * encabezado: si el grupo sigue en otra hoja, el titulo se repite arriba.
   * Y si al grupo no le entran el titulo y un par de personas, arranca en
   * la hoja siguiente, para que no quede un titulo huerfano al pie.
   */
  const alto_hoja    = doc.internal.pageSize.getHeight()
  const minimo_grupo = 9 + 8 + 2 * 8     // titulo + columnas + dos personas, en mm
  let y = arranque

  for(const g of grupos) {
    if(g.titulo && y + minimo_grupo > alto_hoja - PIE) {
      doc.addPage()
      y = MARGEN
    }

    const encabezado: RowInput[] = [columnas.map(c => c.titulo)]
    if(g.titulo)
      encabezado.unshift([{
        content: imprimible(g.titulo),
        colSpan: columnas.length,
        styles:  { halign: 'left', fillColor: GRUPO, textColor: TINTA, fontSize: 10.5 }
      }])

    autoTable(doc, {
      startY:     y,
      margin:     { left: MARGEN, right: MARGEN, top: MARGEN, bottom: PIE },
      head:       encabezado,
      body:       g.invitados.map((i, n) => columnas.map(c => imprimible(c.dato(i, n + 1)))),
      theme:      'grid',
      showHead:   'everyPage',
      rowPageBreak: 'avoid',
      styles: {
        font:        'helvetica',
        fontSize:    10,
        textColor:   TINTA,
        lineColor:   LINEA,
        lineWidth:   0.2,
        cellPadding: 2.2,
        minCellHeight: 8,
        valign:      'middle',
        overflow:    'linebreak',
      },
      headStyles:   { fillColor: CABEZA, textColor: 255, fontStyle: 'bold', fontSize: 9 },
      columnStyles: estilos_columnas,

      /* La casilla para tildar en la puerta: un cuadradito dibujado, porque
         las fuentes de jsPDF no tienen el caracter ☐. */
      didDrawCell: (celda: CellHookData) => {
        if(celda.section !== 'body' || columnas[celda.column.index] !== CASILLA) return
        const lado = 4
        doc.setDrawColor(...TENUE)
        doc.setLineWidth(0.3)
        doc.rect(celda.cell.x + (celda.cell.width - lado) / 2, celda.cell.y + (celda.cell.height - lado) / 2, lado, lado)
      },
    })

    y = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 7
  }

  // --- Pie en todas las hojas, ahora que se sabe cuantas son
  const hojas = doc.getNumberOfPages()
  const ancho = doc.internal.pageSize.getWidth()
  const alto  = doc.internal.pageSize.getHeight()
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.5)
  doc.setTextColor(...TENUE)
  for(let h = 1; h <= hojas; h++) {
    doc.setPage(h)
    doc.text(imprimible(datos.titulo), MARGEN, alto - 9)
    doc.text(`Página ${h} de ${hojas}`, ancho - MARGEN, alto - 9, { align: 'right' })
  }

  const dia    = ahora.toLocaleDateString('sv')   // 2026-09-27: ordena bien en una carpeta
  const nombre = sin_acentos(datos.festejada).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'fiesta'
  doc.save(`invitados-${nombre}-${datos.orden}-${dia}.pdf`)

  return total
}
