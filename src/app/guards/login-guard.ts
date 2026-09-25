import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { XVStorage } from '../app.config';
import { FirebaseAuthService } from '../services/firebase-auth';

export const loginGuard: CanActivateFn = async () => {
  const firebase_auth = inject(FirebaseAuthService);
  const router        = inject(Router);

  if(XVStorage.logged_user() !== null) return true;

  // Al refrescar, Firebase restaura la sesion de forma asincrona:
  // hay que esperarla antes de decidir, o expulsa a quien ya estaba dentro.
  const user = await firebase_auth.restaurar_sesion();

  return user !== null ? true : router.createUrlTree(['/login']);
};
