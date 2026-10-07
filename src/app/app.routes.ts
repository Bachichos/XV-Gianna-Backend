import { Routes } from '@angular/router';
import { loginGuard } from './guards/login-guard';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.LoginPage) },

    { path: '',                 pathMatch: 'full', redirectTo: 'estadisticas' },
    { path: 'estadisticas',     canActivate: [loginGuard],  loadComponent: () => import('./pages/estadisticas/estadisticas').then(m => m.EstadisticasPage) },
    { path: 'anfitriones',      canActivate: [loginGuard], loadComponent: () => import('./pages/anfitriones/anfitriones').then(m => m.AnfitrionesPage) },
    { path: 'configuracion',    canActivate: [loginGuard], loadComponent: () => import('./pages/configuracion/configuracion').then(m => m.ConfiguracionPage) },
    { path: 'tarjetas',         canActivate: [loginGuard],      loadComponent: () => import('./pages/tarjetas/tarjetas').then(m => m.TarjetasPage) },
    { path: 'mesas',            canActivate: [loginGuard], loadComponent: () => import('./pages/mesas/mesas').then(m => m.MesasPage) },
    { path: 'invitados',        canActivate: [loginGuard], loadComponent: () => import('./pages/invitados/invitados').then(m => m.InvitadosPage) },
    { path: 'solicitudes',      canActivate: [loginGuard],   loadComponent: () => import('./pages/solicitudes/solicitudes').then(m => m.SolicitudesPage) },
    { path: 'presupuestos',     canActivate: [loginGuard], loadComponent: () => import('./pages/presupuestos/presupuestos').then(m => m.PresupuestosPage) },
    { path: 'presupuestos/:id', canActivate: [loginGuard], loadComponent: () => import('./pages/presupuestos/detalle/detalle').then(m => m.PresupuestoPage) },
    { path: 'album',            canActivate: [loginGuard], loadComponent: () => import('./pages/album/album').then(m => m.AlbumPage) },
    { path: 'calendario',       canActivate: [loginGuard], loadComponent: () => import('./pages/calendario/calendario').then(m => m.CalendarioPage) },
    { path: 'calendario/:id',   canActivate: [loginGuard], loadComponent: () => import('./pages/calendario/detalle/detalle').then(m => m.CitaPage) },

    { path: '**', redirectTo: '' }
];
