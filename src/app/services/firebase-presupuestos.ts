import { inject, Service } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { archivos_de, para_guardar, Presupuesto, PresupuestoConId, Rubro } from '../models/presupuestos';
import { FirebaseArchivosService } from './firebase-archivos';

/**
 * Los presupuestos (coleccion `presupuestos`) y sus rubros (un solo
 * documento, rubros/lista). Ver models/presupuestos.ts.
 */
@Service()
export class FirebasePresupuestosService {

    private readonly firestore = inject(Firestore);
    private readonly archivos  = inject(FirebaseArchivosService);
    private readonly ref       = collection(this.firestore, 'presupuestos');
    private readonly ref_rubros = doc(this.firestore, 'rubros', 'lista');

    // ------------------------------------------------------------ presupuestos

    /** La lista en vivo. */
    public readonly get_lista = () =>
        collectionData(this.ref, { idField: 'id' }) as Observable<PresupuestoConId[]>

    /** Alta. Devuelve el id que le dio Firestore. */
    public readonly crear = async (presupuesto: Presupuesto): Promise<string> => {
        const creado = await addDoc(this.ref, para_guardar(presupuesto))
        return creado.id
    }

    /** Reemplaza el presupuesto entero, pagos incluidos. */
    public readonly guardar = async (id: string, presupuesto: Presupuesto): Promise<void> => {
        await setDoc(doc(this.ref, id), para_guardar(presupuesto))
    }

    /**
     * Borra el presupuesto y despues sus archivos. En ese orden: si se corta
     * a mitad de camino, sobra un archivo que nadie ve, pero nunca queda un
     * presupuesto con el clip apuntando a la nada.
     */
    public readonly borrar = async (presupuesto: PresupuestoConId): Promise<void> => {
        await deleteDoc(doc(this.ref, presupuesto.id))
        await Promise.all(archivos_de(presupuesto).map(id => this.archivos.borrar(id)))
    }

    // ------------------------------------------------------------ rubros

    /** En vivo. undefined si todavia no se guardo nunca. */
    public readonly get_rubros = () =>
        docData(this.ref_rubros) as Observable<{ lista?: Rubro[] } | undefined>

    /** Reemplaza la lista entera. */
    public readonly guardar_rubros = async (lista: Rubro[]): Promise<void> => {
        await setDoc(this.ref_rubros, { lista })
    }
}
