import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, signal } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import es_AR from '@angular/common/locales/es-AR';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideOptimus } from '@openng/optimus-ui/config';
import { definePreset } from '@openng/optimus-ui-themes';
import Aura from '@openng/optimus-ui-themes/aura';
import { Usuario } from './models/usuario';
import { TarjetaConId } from './models/tarjeta';
import { Configuracion, POR_DEFECTO } from './models/configuracion';
import { Marca, MARCA_POR_DEFECTO } from './models/marca';
import { PlanoMesas } from './models/mesas';
import { Anfitrion } from './models/anfitriones';
import { PresupuestoConId, Rubro } from './models/presupuestos';
import { CitaConId, TipoCita } from './models/citas';

/* Fechas, numeros y meses en castellano: sin esto el DatePipe escribe en ingles. */
registerLocaleData(es_AR);

export const XVStorage = {
  logged_user: signal<Usuario | null>(null),

  /** La coleccion en vivo. null mientras no haya sesion o no haya llegado. */
  tarjetas:       signal<TarjetaConId[] | null>(null),
  error_tarjetas: signal<string | null>(null),

  /**
   * La configuracion de la fiesta. Arranca con los valores por defecto y se
   * reemplaza cuando llega la guardada (app.ts) o cuando se guarda una nueva
   * (pantalla Configuracion). De aca salen las categorias y los mensajes.
   */
  configuracion:  signal<Configuracion>(POR_DEFECTO),

  /** Las mesas y quien se sienta en cada una (models/mesas.ts). En vivo; null mientras llega. */
  plano:          signal<PlanoMesas | null>(null),

  /** Quienes estan sin invitacion (models/anfitriones.ts). En vivo; null mientras llega. */
  anfitriones:    signal<Anfitrion[] | null>(null),

  /** El nombre del evento y su logo (models/marca.ts). Se lee al abrir, antes del login. */
  marca:          signal<Marca>(MARCA_POR_DEFECTO),

  /** Los presupuestos (models/presupuestos.ts). En vivo; null mientras llega. */
  presupuestos:       signal<PresupuestoConId[] | null>(null),
  /** Con plata de por medio, una lista vacia por error no puede pasar por "no hay ninguno". */
  error_presupuestos: signal<string | null>(null),

  /** Los rubros de los presupuestos. En vivo; null mientras llega. */
  rubros:         signal<Rubro[] | null>(null),

  /** Las citas de la organizacion (models/citas.ts). En vivo; null mientras llega. */
  citas:          signal<CitaConId[] | null>(null),
  error_citas:    signal<string | null>(null),

  /** Los tipos de cita. En vivo; null mientras llega. */
  tipos_cita:     signal<TipoCita[] | null>(null),
}

const firebase_config = {
  apiKey: "AIzaSyDTeR8rNZOFmsN9kAB2WdFvaJfo0IB7OIk",
  authDomain: "dev-creatusinvitaciones.firebaseapp.com",
  projectId: "dev-creatusinvitaciones",
  storageBucket: "dev-creatusinvitaciones.firebasestorage.app",
  messagingSenderId: "821120569335",
  appId: "1:821120569335:web:d9cfcdc3a10aa9ab03a8f2"
}

/** Aura con la paleta del proyecto: azul porcelana, grisado y frio. */
const XVPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '#f3f6fa',
      100: '#e4ecf4',
      200: '#c8d8e8',
      300: '#a3bcd5',
      400: '#7799bc',
      500: '#5279a2',
      600: '#416186',
      700: '#374e6b',
      800: '#31435a',
      900: '#2c3a4d',
      950: '#1d2634'
    }
  }
})

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' },
    provideBrowserGlobalErrorListeners(),
    // anchorScrolling: "Pagos (2)" en la lista lleva a /presupuestos/{id}#pagos, a esa seccion.
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })),
    provideFirebaseApp(() => initializeApp(firebase_config)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideOptimus({
      theme: {
        preset: XVPreset,
        options: {
          // La invitacion vive en blanco helado: el backoffice acompana.
          // Para reactivar el modo oscuro, poner 'system'.
          darkModeSelector: '.xv-oscuro'
        }
      }
    })
  ]
};
