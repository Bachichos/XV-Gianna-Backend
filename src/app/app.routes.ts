import { Routes } from '@angular/router';
import { loginGuard } from './guards/login-guard';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.LoginPage) },

    { path: '',                 pathMatch: 'full', redirectTo: 'estadisticas' },
    { path: 'estadisticas',     canActivate: [loginGuard],  loadComponent: () => import('./pages/estadisticas/estadisticas').then(m => m.EstadisticasPage) },
    { path: 'configuracion',    canActivate: [loginGuard], loadComponent: () => import('./pages/configuracion/configuracion').then(m => m.ConfiguracionPage) },
    { path: 'tarjetas',         canActivate: [loginGuard],      loadComponent: () => import('./pages/tarjetas/tarjetas').then(m => m.TarjetasPage) },
    { path: 'invitados',        canActivate: [loginGuard], loadComponent: () => import('./pages/invitados/invitados').then(m => m.InvitadosPage) },
    { path: 'solicitudes',      canActivate: [loginGuard],   loadComponent: () => import('./pages/solicitudes/solicitudes').then(m => m.SolicitudesPage) },

    { path: '**', redirectTo: '' }
];
