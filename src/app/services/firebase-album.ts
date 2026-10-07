import { inject, Service } from '@angular/core';
import { Bytes, collection, collectionData, doc, docData, Firestore, getDoc, writeBatch } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ClaveAlbum, ConfigAlbum, FotoAlbum } from '../models/album';

/** Una foto como llega del album: sus datos, su id y la miniatura. */
export type FotoGuardada = FotoAlbum & { id: string, miniatura: Bytes }

/**
 * El album de fotos (ver models/album.ts). El backoffice lee las fotos, las
 * borra y maneja la clave del QR. Subir lo hacen los invitados, desde la
 * invitacion: aca no.
 */
@Service()
export class FirebaseAlbumService {

    private readonly firestore = inject(Firestore);
    private readonly ref_clave = doc(this.firestore, 'album_clave', 'actual');

    /** En vivo. undefined si todavia no se genero el QR. */
    public readonly get_clave = () =>
        docData(this.ref_clave) as Observable<ClaveAlbum | undefined>

    private readonly ref_config = doc(this.firestore, 'configuracion', 'album');

    /** Los ajustes publicos (ventana y textos de las misiones). En vivo; undefined si nunca se guardaron. */
    public readonly get_config = () =>
        docData(this.ref_config) as Observable<ConfigAlbum | undefined>

    /**
     * La clave y la ventana; y la ventana sola, sin la clave, en
     * configuracion/album, que es publica: con eso la mini web avisa
     * "el album abre el sabado" y la invitacion sabe cuando mostrar su
     * boton. Merge: los textos de las misiones que ya estaban, quedan.
     */
    public readonly guardar_clave = async (clave: ClaveAlbum): Promise<void> => {
        const lote = writeBatch(this.firestore)
        lote.set(this.ref_clave, clave)
        lote.set(this.ref_config, { desde_ms: clave.desde_ms, hasta_ms: clave.hasta_ms }, { merge: true })
        await lote.commit()
    }

    /**
     * Los ajustes del backoffice: la ventana (en los dos documentos, de una
     * vez) y los textos de las misiones. La clave no se toca.
     */
    public readonly guardar_ajustes = async (config: ConfigAlbum): Promise<void> => {
        const lote = writeBatch(this.firestore)
        lote.set(this.ref_clave, { desde_ms: config.desde_ms, hasta_ms: config.hasta_ms }, { merge: true })
        lote.set(this.ref_config, config)
        await lote.commit()
    }

    /** Las fotos en vivo, con su miniatura: van apareciendo a medida que suben. */
    public readonly get_fotos = () =>
        collectionData(collection(this.firestore, 'album'), { idField: 'id' }) as Observable<FotoGuardada[]>

    /** La foto entera, para verla grande o descargarla. null si ya no existe. */
    public readonly bajar_original = async (id: string): Promise<Uint8Array | null> => {
        const snap = await getDoc(doc(this.firestore, 'album_original', id))
        return snap.exists() ? (snap.get('datos') as Bytes).toUint8Array() : null
    }

    /** Borra la foto y su original, de una vez. */
    public readonly borrar = async (id: string): Promise<void> => {
        const lote = writeBatch(this.firestore)
        lote.delete(doc(this.firestore, 'album', id))
        lote.delete(doc(this.firestore, 'album_original', id))
        await lote.commit()
    }
}
