import { restaurar } from '../../models/archivos';
import { Adjunto } from '../../models/presupuestos';
import { FirebaseArchivosService } from '../../services/firebase-archivos';

/**
 * Baja un archivo y lo abre en otra pestaña. Lo usan la lista de
 * presupuestos y el dialogo de pagos.
 *
 * La pestaña se abre ANTES de bajar: abierta despues de esperar, el
 * navegador la toma por un popup y la bloquea. Si igual no se pudo abrir,
 * se descarga. Si falla, cierra la pestaña vacia y tira el error.
 */
export const abrir_adjunto = async (archivos: FirebaseArchivosService, adjunto: Adjunto): Promise<void> => {
    const pestana = window.open('', '_blank')
    try {
        const bajado = await archivos.bajar(adjunto.id)
        if(!bajado) throw new Error('El archivo ya no existe.')
        const url = URL.createObjectURL(await restaurar(bajado.datos, bajado.guardado))

        if(pestana) pestana.location.href = url
        else Object.assign(document.createElement('a'), { href: url, download: adjunto.nombre }).click()
        // Que la pestaña alcance a leerlo antes de soltarlo.
        setTimeout(() => URL.revokeObjectURL(url), 60_000)
    }
    catch(e) {
        pestana?.close()
        throw e
    }
}
