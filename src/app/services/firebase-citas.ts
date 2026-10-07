import { inject, Service } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cita, CitaConId, para_guardar, TipoCita } from '../models/citas';

/**
 * Las citas (coleccion `citas`) y sus tipos (un solo documento,
 * tipos_cita/lista). Ver models/citas.ts.
 */
@Service()
export class FirebaseCitasService {

    private readonly firestore = inject(Firestore);
    private readonly ref       = collection(this.firestore, 'citas');
    private readonly ref_tipos = doc(this.firestore, 'tipos_cita', 'lista');

    // ------------------------------------------------------------ citas

    /** La lista en vivo. */
    public readonly get_lista = () =>
        collectionData(this.ref, { idField: 'id' }) as Observable<CitaConId[]>

    /** Alta. Devuelve el id que le dio Firestore. */
    public readonly crear = async (cita: Cita): Promise<string> => {
        const creada = await addDoc(this.ref, para_guardar(cita))
        return creada.id
    }

    /** Reemplaza la cita entera. */
    public readonly guardar = async (id: string, cita: Cita): Promise<void> => {
        await setDoc(doc(this.ref, id), para_guardar(cita))
    }

    public readonly borrar = async (id: string): Promise<void> => {
        await deleteDoc(doc(this.ref, id))
    }

    // ------------------------------------------------------------ tipos

    /** En vivo. undefined si todavia no se guardo nunca. */
    public readonly get_tipos = () =>
        docData(this.ref_tipos) as Observable<{ lista?: TipoCita[] } | undefined>

    /** Reemplaza la lista entera. */
    public readonly guardar_tipos = async (lista: TipoCita[]): Promise<void> => {
        await setDoc(this.ref_tipos, { lista })
    }
}
