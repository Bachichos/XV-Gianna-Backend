import { inject, Service } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tarjeta, TarjetaConId } from '../models/tarjeta';

@Service()
export class FirebaseTarjetasService {

    private readonly firestore = inject(Firestore);
    private readonly ref       = collection(this.firestore, 'tarjetas');


    /**
     * La lista en vivo. Firestore mantiene abierta la escucha y empuja cada
     * cambio: cuando un invitado confirma, la fila se actualiza sola.
     * Vale undefined mientras llega la primera respuesta.
     */
    public  readonly get_lista = () => 
        collectionData(this.ref, { idField: 'id' }) as Observable<TarjetaConId[]>


    public readonly get_by_id = async (id: string): Promise<Tarjeta | null> => {
        const snapshot = await getDoc(doc(this.firestore, 'tarjetas', id));
        return snapshot.exists() ? snapshot.data() as Tarjeta : null;
    }

    /**
     * Alta. El id lo genera Firestore: 20 caracteres aleatorios que son,
     * ademas, el token del link de la invitacion. Por eso nunca se elige a mano.
     */
    public readonly add = async (tarjeta: Tarjeta): Promise<string> => {
        const creado = await addDoc(this.ref, tarjeta);
        return creado.id;
    };

    public readonly create = async (id: string, tarjeta: Tarjeta): Promise<void> => {
        await setDoc(doc(this.firestore, 'tarjetas', id), tarjeta);
    };

    public readonly update = async (id: string, tarjeta: Partial<Tarjeta>): Promise<void> => {
        await updateDoc(doc(this.firestore, 'tarjetas', id), tarjeta);
    };

    public readonly delete = async (id: string): Promise<void> => {
        await deleteDoc(doc(this.firestore, 'tarjetas', id));
    };

}
