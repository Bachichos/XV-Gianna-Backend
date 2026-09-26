import { Component, effect, inject, Injector, OnInit, runInInjectionContext, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FirebaseAuthService } from './services/firebase-auth';
import { FirebaseTarjetasService } from './services/firebase-tarjetas';
import { FirebaseConfiguracionService } from './services/firebase-configuracion';
import { XVStorage } from './app.config';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {

  private readonly firebase_auth     = inject(FirebaseAuthService)
  private readonly firebase_tarjetas = inject(FirebaseTarjetasService)
  private readonly firebase_config   = inject(FirebaseConfiguracionService)
  private readonly injector          = inject(Injector)
  private readonly titulo            = inject(Title)

  protected readonly title = signal('backoffice-gianna-drs-xv');

  constructor() {
    // Una sola escucha para toda la sesion. Vive en la raiz, que nunca se
    // destruye, asi que el contador del menu no se congela al cambiar de
    // pantalla. Arranca recien con sesion iniciada: las reglas de Firestore
    // exigen ser admin para listar la coleccion.
    effect(onCleanup => {
      if(!XVStorage.logged_user()) {
        XVStorage.tarjetas.set(null)
        XVStorage.error_tarjetas.set(null)
        return
      }

      // Un effect no corre en contexto de inyeccion: AngularFire avisa si el
      // SDK se llama fuera de el.
      const lista$ = runInInjectionContext(this.injector, () => this.firebase_tarjetas.get_lista())

      const suscripcion = lista$.subscribe({
        next: lista => {
          XVStorage.error_tarjetas.set(null)
          XVStorage.tarjetas.set(lista)
        },
        error: e => {
          console.error('[tarjetas]', e)
          XVStorage.error_tarjetas.set('No pudimos leer las tarjetas. Revise la conexión y los permisos.')
          XVStorage.tarjetas.set([])
        }
      })

      onCleanup(() => suscripcion.unsubscribe())
    })

    // El titulo de la pestana sigue a la marca.
    effect(() => this.titulo.setTitle(`Backoffice · ${XVStorage.marca().nombre}`))

    // La configuracion, una vez por sesion: categorias y mensajes salen de
    // ahi. Si no se puede leer, quedan los valores por defecto.
    effect(() => {
      if(!XVStorage.logged_user()) return
      runInInjectionContext(this.injector, () => this.firebase_config.leer())
        .then(c => XVStorage.configuracion.set(c))
        .catch(e => console.warn('[configuracion] no se pudo leer', e))
    })
  }

  async ngOnInit() {
    // La marca y la configuracion son publicas: se leen enseguida, para que
    // el login ya muestre el nombre, el logo y la fecha de la fiesta.
    // Fuera del constructor no hay contexto de inyeccion: AngularFire avisa si el SDK se llama sin el.
    runInInjectionContext(this.injector, () => this.firebase_config.leer_marca())
      .then(m => XVStorage.marca.set(m))
      .catch(e => console.warn('[marca] no se pudo leer', e))
    runInInjectionContext(this.injector, () => this.firebase_config.leer())
      .then(c => XVStorage.configuracion.set(c))
      .catch(e => console.warn('[configuracion] no se pudo leer', e))

    // Solo restaura la sesion en silencio. El popup lo dispara el boton de /login.
    await this.firebase_auth.restaurar_sesion()
  }

}
