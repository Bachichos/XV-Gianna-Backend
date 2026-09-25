import { inject, Injector, runInInjectionContext, Service } from '@angular/core';
import { Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { Usuario } from '../models/usuario';
import { firstValueFrom } from 'rxjs';
import { XVStorage } from '../app.config';

/**
 * Las mismas cuentas que la lista blanca de firestore.rules.
 * Aca solo sirve para dar un mensaje claro: la seguridad real son las reglas.
 */
const ADMINS = [
    'alejandrobermejorickel@gmail.com',
    'derobertisalejandramicaela@gmail.com',
    'giannajulietaderobertis.drs@gmail.com'
]

const es_admin = (user: User | null): boolean =>
    !!user && user.emailVerified && ADMINS.includes((user.email ?? '').toLowerCase())

const cuenta_no_autorizada = () => {
    const error: any = new Error('cuenta no autorizada')
    error.code = 'auth/cuenta-no-autorizada'
    return error
}

@Service()
export class FirebaseAuthService {

    private readonly auth     = inject(Auth)
    private readonly injector = inject(Injector)

    /**
     * AngularFire avisa cuando se llama al SDK fuera del contexto de inyeccion:
     * estos metodos son async y salen de ese contexto en el primer await.
     */
    private readonly en_contexto = <T>(fn: () => T): T =>
        runInInjectionContext(this.injector, fn)

    /** Espera a que Firebase restaure la sesion guardada. No abre ningun popup. */
    public readonly restaurar_sesion = async (): Promise<Usuario | null> => {
        const actual = await this.en_contexto(() => firstValueFrom(authState(this.auth)))

        if(actual && !es_admin(actual)) {
            await this.en_contexto(() => signOut(this.auth))
            XVStorage.logged_user.set(null)
            return null
        }

        const user = actual ? Usuario(actual) : null
        XVStorage.logged_user.set(user)
        return user
    }

    /** Abre el popup de Google. Llamar solo desde un click del usuario. */
    public readonly login = async (): Promise<Usuario | null> => {
        const cache = await this.restaurar_sesion()
        if(cache) return cache

        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })
        const credencial = await this.en_contexto(() => signInWithPopup(this.auth, provider))

        if(!es_admin(credencial.user)) {
            console.log('[login] cuenta no autorizada', credencial.user)
            await this.en_contexto(() => signOut(this.auth))
            XVStorage.logged_user.set(null)
            throw cuenta_no_autorizada()
        }

        const user = Usuario(credencial.user)
        XVStorage.logged_user.set(user)
        return user
    }

    public readonly logout = async (): Promise<void> => {
        XVStorage.logged_user.set(null)
        await this.en_contexto(() => signOut(this.auth))
    }

}
