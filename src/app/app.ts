import { Component, effect, inject, Injector, OnInit, runInInjectionContext, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FirebaseAuthService } from './services/firebase-auth';
import { FirebaseTarjetasService } from './services/firebase-tarjetas';
import { FirebaseConfiguracionService } from './services/firebase-configuracion';
import { FirebaseMesasService } from './services/firebase-mesas';
import { FirebaseAnfitrionesService } from './services/firebase-anfitriones';
import { FirebasePresupuestosService } from './services/firebase-presupuestos';
import { FirebaseCitasService } from './services/firebase-citas';
import { anfitriones_por_defecto } from './models/anfitriones';
import { PLANO_VACIO } from './models/mesas';
import { RUBROS_POR_DEFECTO } from './models/presupuestos';
import { TIPOS_POR_DEFECTO } from './models/citas';
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
  private readonly firebase_mesas    = inject(FirebaseMesasService)
  private readonly firebase_anfitriones = inject(FirebaseAnfitrionesService)
  private readonly firebase_presupuestos = inject(FirebasePresupuestosService)
  private readonly firebase_citas    = inject(FirebaseCitasService)
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

    // El plano de mesas, tambien en vivo: lo usan Mesas, la lista de la
    // puerta y los recordatorios. Sin salon armado todavia, vale vacio.
    effect(onCleanup => {
      if(!XVStorage.logged_user()) {
        XVStorage.plano.set(null)
        return
      }
      const plano$ = runInInjectionContext(this.injector, () => this.firebase_mesas.get_plano())
      const suscripcion = plano$.subscribe({
        next:  plano => XVStorage.plano.set({ mesas: plano?.mesas ?? [], asientos: plano?.asientos ?? {} }),
        error: e => {
          console.error('[mesas]', e)
          XVStorage.plano.set(PLANO_VACIO)
        }
      })
      onCleanup(() => suscripcion.unsubscribe())
    })

    // Los anfitriones, en vivo: cuentan en los totales de casi todas las
    // pantallas. Si nunca se guardaron, se propone a la festejada.
    effect(onCleanup => {
      if(!XVStorage.logged_user()) {
        XVStorage.anfitriones.set(null)
        return
      }
      const lista$ = runInInjectionContext(this.injector, () => this.firebase_anfitriones.get_lista())
      const suscripcion = lista$.subscribe({
        next:  d => XVStorage.anfitriones.set(d?.lista ?? anfitriones_por_defecto(XVStorage.configuracion().evento.festejada)),
        error: e => {
          console.error('[anfitriones]', e)
          XVStorage.anfitriones.set([])
        }
      })
      onCleanup(() => suscripcion.unsubscribe())
    })

    // Los presupuestos, en vivo, como las tarjetas: el resumen de lo pagado
    // tiene que estar al dia aunque otra persona cargue un pago.
    effect(onCleanup => {
      if(!XVStorage.logged_user()) {
        XVStorage.presupuestos.set(null)
        XVStorage.error_presupuestos.set(null)
        return
      }
      const lista$ = runInInjectionContext(this.injector, () => this.firebase_presupuestos.get_lista())
      const suscripcion = lista$.subscribe({
        next: lista => {
          XVStorage.error_presupuestos.set(null)
          XVStorage.presupuestos.set(lista)
        },
        error: e => {
          console.error('[presupuestos]', e)
          XVStorage.error_presupuestos.set('No pudimos leer los presupuestos. Revise la conexión y los permisos.')
          XVStorage.presupuestos.set([])
        }
      })
      onCleanup(() => suscripcion.unsubscribe())
    })

    // Los rubros, en vivo. Si nunca se guardaron, los de fabrica.
    effect(onCleanup => {
      if(!XVStorage.logged_user()) {
        XVStorage.rubros.set(null)
        return
      }
      const rubros$ = runInInjectionContext(this.injector, () => this.firebase_presupuestos.get_rubros())
      const suscripcion = rubros$.subscribe({
        next:  d => XVStorage.rubros.set(d?.lista ?? RUBROS_POR_DEFECTO),
        error: e => {
          console.error('[rubros]', e)
          XVStorage.rubros.set(RUBROS_POR_DEFECTO)
        }
      })
      onCleanup(() => suscripcion.unsubscribe())
    })

    // Las citas, en vivo: la proxima de la cabecera tiene que estar al dia.
    effect(onCleanup => {
      if(!XVStorage.logged_user()) {
        XVStorage.citas.set(null)
        XVStorage.error_citas.set(null)
        return
      }
      const lista$ = runInInjectionContext(this.injector, () => this.firebase_citas.get_lista())
      const suscripcion = lista$.subscribe({
        next: lista => {
          XVStorage.error_citas.set(null)
          XVStorage.citas.set(lista)
        },
        error: e => {
          console.error('[citas]', e)
          XVStorage.error_citas.set('No pudimos leer las citas. Revise la conexión y los permisos.')
          XVStorage.citas.set([])
        }
      })
      onCleanup(() => suscripcion.unsubscribe())
    })

    // Los tipos de cita, en vivo. Si nunca se guardaron, los de fabrica.
    effect(onCleanup => {
      if(!XVStorage.logged_user()) {
        XVStorage.tipos_cita.set(null)
        return
      }
      const tipos$ = runInInjectionContext(this.injector, () => this.firebase_citas.get_tipos())
      const suscripcion = tipos$.subscribe({
        next:  d => XVStorage.tipos_cita.set(d?.lista ?? TIPOS_POR_DEFECTO),
        error: e => {
          console.error('[tipos de cita]', e)
          XVStorage.tipos_cita.set(TIPOS_POR_DEFECTO)
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
