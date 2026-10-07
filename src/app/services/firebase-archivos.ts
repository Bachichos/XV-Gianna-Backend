import { inject, Service } from '@angular/core';
import { Bytes, collection, doc, Firestore, getDoc, writeBatch } from '@angular/fire/firestore';
import { ArchivoGuardado, ArchivoPreparado, partir, unir } from '../models/archivos';
import { Adjunto } from '../models/presupuestos';

/**
 * Los archivos: archivos/{id} y sus partes en archivos/{id}/partes/{n}
 * (ver models/archivos.ts). Aca solo se sube, se baja y se borra: achicar
 * y descomprimir es cosa del modelo.
 */
@Service()
export class FirebaseArchivosService {

    private readonly firestore = inject(Firestore);
    private readonly ref       = collection(this.firestore, 'archivos');

    private readonly parte = (id: string, n: number) =>
        doc(this.firestore, 'archivos', id, 'partes', String(n))

    /**
     * Sube el archivo ya preparado y devuelve su Adjunto. Todo en un solo
     * lote: o se guardan todas las partes y el indice, o nada. Un archivo a
     * medio subir no se podria abrir nunca.
     */
    public readonly subir = async (archivo: ArchivoPreparado): Promise<Adjunto> => {
        const indice = doc(this.ref)
        const lote   = writeBatch(this.firestore)

        partir(archivo.datos).forEach((pedazo, n) =>
            lote.set(this.parte(indice.id, n), { datos: Bytes.fromUint8Array(pedazo) }))

        const { datos, ...guardado } = archivo
        lote.set(indice, guardado satisfies ArchivoGuardado)
        await lote.commit()

        return { id: indice.id, nombre: archivo.nombre, tipo: archivo.tipo, bytes: archivo.bytes }
    }

    /** El contenido tal como se guardo (comprimido o no) y su indice. null si ya no existe. */
    public readonly bajar = async (id: string): Promise<{ guardado: ArchivoGuardado, datos: Uint8Array } | null> => {
        const indice = await getDoc(doc(this.ref, id))
        if(!indice.exists()) return null
        const guardado = indice.data() as ArchivoGuardado

        // Una por una por su numero: pedidas como coleccion vendrian en
        // orden de texto, y la "10" llegaria antes que la "2".
        const partes = await Promise.all(Array.from({ length: guardado.partes }, async (_, n) => {
            const parte = await getDoc(this.parte(id, n))
            return (parte.get('datos') as Bytes).toUint8Array()
        }))
        return { guardado, datos: unir(partes) }
    }

    /** Borra el indice y todas sus partes, de una vez. Si ya no existia, no hace nada. */
    public readonly borrar = async (id: string): Promise<void> => {
        const indice = await getDoc(doc(this.ref, id))
        if(!indice.exists()) return
        const lote = writeBatch(this.firestore)
        for(let n = 0; n < (indice.data() as ArchivoGuardado).partes; n++) lote.delete(this.parte(id, n))
        lote.delete(indice.ref)
        await lote.commit()
    }
}
