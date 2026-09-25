import { Component, computed, inject, input, output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Tooltip } from '@openng/optimus-ui/tooltip';
import { XVStorage } from '../../../app.config';
import { invitados_confirmados } from '../../../models/tarjeta';
import { FirebaseAuthService } from '../../../services/firebase-auth';

@Component({
  imports: [RouterLink, RouterLinkActive, Tooltip],
  selector: 'xv-menu-lateral',
  styleUrl: './xv-menu-lateral.scss',
  templateUrl: './xv-menu-lateral.html',
})
export class XVMenuLateral {

  private readonly firebase_auth = inject(FirebaseAuthService)
  private readonly router        = inject(Router)

  public readonly solicitudes = input<number | null>(null)

  /** Riel de iconos. El layout solo lo enciende en escritorio. */
  public readonly compacto = input(false)

  /** Si el monograma es un boton o solo la marca (en movil no compacta nada). */
  public readonly alternable = input(false)

  /** El layout lo usa para cerrar el cajon en movil al navegar. */
  public readonly navegar = output<void>()

  /** Pide al layout pasar de menu entero a riel y viceversa. */
  public readonly alternar_compacto = output<void>()

  protected readonly usuario = XVStorage.logged_user

  protected readonly inicial = computed(() => {
    const u = this.usuario()
    return (u?.displayName || u?.email || '?').trim().charAt(0).toUpperCase()
  })

  /** Lo que en el riel reemplaza a las dos lineas del pie. */
  protected readonly resumen_usuario = computed(() => {
    const u = this.usuario()
    if (!u) return ''
    return u.displayName ? `${u.displayName} · ${u.email}` : u.email
  })

  protected readonly items = computed(() => [
    { ruta: '/estadisticas',  etiqueta: 'Estadísticas',          icono: 'pi-chart-bar', contador: null as number | null },
    { ruta: '/tarjetas',      etiqueta: 'Tarjetas de invitados', icono: 'pi-id-card',   contador: XVStorage.tarjetas()?.length ?? null },
    { ruta: '/invitados',     etiqueta: 'Lista de invitados',    icono: 'pi-users',     contador: invitados_confirmados(XVStorage.tarjetas() ?? []).length || null },
    { ruta: '/solicitudes',   etiqueta: 'Solicitudes',           icono: 'pi-inbox',     contador: this.solicitudes() },
    { ruta: '/configuracion', etiqueta: 'Configuración',         icono: 'pi-sliders-h', contador: null as number | null }
  // En el riel el contador se reduce a un punto: el numero pasa al globo.
  ].map(item => ({ ...item, titulo: item.contador === null ? item.etiqueta : `${item.etiqueta} (${item.contador})` })))

  protected readonly salir = async () => {
    await this.firebase_auth.logout()
    await this.router.navigate(['/login'])
  }

}
