import { inject, Service } from '@angular/core';
import { deleteField, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Mesa, PlanoMesas } from '../models/mesas';

/**
 * El plano de mesas: un solo documento, mesas/plano (ver models/mesas.ts).
 * Todas las escrituras son "merge": dos personas pueden estar sentando
 * gente a la vez sin pisarse, porque cada una toca solo sus asientos.
 */
@Service()
export class FirebaseMesasService {

    private readonly firestore = inject(Firestore);
    private readonly ref       = doc(this.firestore, 'mesas', 'plano');

    /** En vivo. undefined si todavia no se armo el salon. */
    public readonly get_plano = () =>
        docData(this.ref) as Observable<PlanoMesas | undefined>

    /**
     * Un solo cambio, de una vez: las mesas del salon (si vienen) y los
     * asientos que cambian, 'tarjeta/persona' -> mesa. null = sin mesa.
     */
    public readonly guardar = async (cambios: { mesas?: Mesa[], asientos?: Record<string, string | null> }): Promise<void> => {
        const asientos = Object.fromEntries(Object.entries(cambios.asientos ?? {})
            .map(([clave, mesa]) => [clave, mesa ?? deleteField()]))
        await setDoc(this.ref, {
            ...(cambios.mesas ? { mesas: cambios.mesas } : {}),
            asientos,
        }, { merge: true })
    }

    /** Sienta a esas personas en la mesa; con null, las deja sin mesa. */
    public readonly sentar = (claves: string[], mesa: string | null): Promise<void> =>
        this.guardar({ asientos: Object.fromEntries(claves.map(clave => [clave, mesa])) })
}
