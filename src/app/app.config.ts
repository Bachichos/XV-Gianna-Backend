import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, signal } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import es_AR from '@angular/common/locales/es-AR';
import { provideRouter } from '@angular/router';
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

  /** El nombre del evento y su logo (models/marca.ts). Se lee al abrir, antes del login. */
  marca:          signal<Marca>(MARCA_POR_DEFECTO),
}

const firebase_config = {
  projectId:         'gianna-drs-xv',
  appId:             '1:1039836116529:web:ebda967c70f152bf884710',
  storageBucket:     'gianna-drs-xv.firebasestorage.app',
  apiKey:            'AIzaSyA4EOllYUMzOvT8V8TFN3MZ4JmRodb3pys',
  authDomain:        'gianna-drs-xv.firebaseapp.com',
  messagingSenderId: '1039836116529'
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
    provideRouter(routes),
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
