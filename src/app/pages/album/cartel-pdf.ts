import { DatosMision } from '../../models/album';

/**
 * El cartel para las mesas: una hoja A5 con el QR grande, el titulo y las
 * tres misiones. Se imprime varias veces y se reparte por el salon.
 *
 * Como en la lista de invitados, de jsPDF solo se usan texto, formas e
 * imagen; y se trae recien al tocar el boton (pesa unos 350 kB). Las
 * fuentes de jsPDF no tienen emojis: las misiones van sin el suyo.
 */
export const descargar_cartel = async (qr_png: string, festejada: string, misiones: DatosMision[]): Promise<void> => {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF({ unit: 'mm', format: 'a5' })    // 148 x 210
    const ancho = 148, centro = ancho / 2
    const tinta = [28, 39, 53] as const, tenue = [86, 101, 119] as const, plata = [195, 204, 216] as const

    doc.setProperties({ title: `Álbum de ${festejada}` })

    // Un marco fino, redondeado, como las tarjetas.
    doc.setDrawColor(...plata)
    doc.setLineWidth(0.6)
    doc.roundedRect(8, 8, ancho - 16, 194, 6, 6)

    doc.setTextColor(...tinta)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(26)
    doc.text('¡Subí tus fotos!', centro, 30, { align: 'center' })

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(13)
    doc.setTextColor(...tenue)
    doc.text(`al álbum de ${festejada}`, centro, 39, { align: 'center' })

    const lado = 82
    // 'FAST': el PNG va comprimido; sin eso, el cartel pesaba 3 MB.
    doc.addImage(qr_png, 'PNG', centro - lado / 2, 47, lado, lado, 'qr', 'FAST')

    doc.setFontSize(11)
    doc.text('Escaneá el código con la cámara del teléfono', centro, 137, { align: 'center' })

    doc.setDrawColor(...plata)
    doc.line(30, 145, ancho - 30, 145)

    doc.setTextColor(...tinta)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text('Tres misiones', centro, 155, { align: 'center' })

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(11)
    misiones.forEach((m, i) => doc.text(`${i + 1}.  ${m.titulo}`, centro, 165 + i * 8, { align: 'center' }))

    doc.setTextColor(...tenue)
    doc.setFontSize(10)
    doc.text('...y las mejores fotos de la noche.', centro, 194, { align: 'center' })

    doc.save('cartel-album.pdf')
}
