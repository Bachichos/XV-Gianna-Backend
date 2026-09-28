import { inject, Service } from '@angular/core';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Anfitrion } from '../models/anfitriones';

/** Los anfitriones: un solo documento, anfitriones/lista (ver models/anfitriones.ts). */
@Service()
export class FirebaseAnfitrionesService {

    private readonly firestore = inject(Firestore);
    private readonly ref       = doc(this.firestore, 'anfitriones', 'lista');

    /** En vivo. undefined si todavia no se guardo nunca. */
    public readonly get_lista = () =>
        docData(this.ref) as Observable<{ lista?: Anfitrion[] } | undefined>

    /** Reemplaza la lista entera. */
    public readonly guardar = async (lista: Anfitrion[]): Promise<void> => {
        await setDoc(this.ref, { lista })
    }
}
