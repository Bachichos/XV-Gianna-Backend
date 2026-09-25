import { inject, Service } from '@angular/core';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { combinar, Configuracion, POR_DEFECTO } from '../models/configuracion';

/** Los tres documentos de la coleccion `configuracion`. */
export type Documento = keyof Configuracion

/**
 * Lee y guarda la configuracion de la fiesta. La invitacion la lee de los
 * mismos documentos (frontend/src/services/firestore.svelte.ts).
 */
@Service()
export class FirebaseConfiguracionService {

    private readonly firestore = inject(Firestore);

    /**
     * La configuracion completa: lo guardado encima de los valores por
     * defecto. Un documento que todavia no existe sale entero por defecto.
     */
    public readonly leer = async (): Promise<Configuracion> => {
        const [evento, secciones, tema] = await Promise.all(
            (['evento', 'secciones', 'tema'] as Documento[]).map(async id => {
                const snap = await getDoc(doc(this.firestore, 'configuracion', id))
                return snap.exists() ? snap.data() : undefined
            })
        )
        return {
            evento:    combinar(POR_DEFECTO.evento,    evento),
            secciones: combinar(POR_DEFECTO.secciones, secciones),
            tema:      combinar(POR_DEFECTO.tema,      tema),
        }
    }

    /** Reemplaza el documento entero: lo que no vaya, deja de estar. */
    public readonly guardar = async <D extends Documento>(id: D, datos: Configuracion[D]): Promise<void> => {
        await setDoc(doc(this.firestore, 'configuracion', id), datos as object)
    }
}
