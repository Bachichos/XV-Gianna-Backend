import { Component, computed, DestroyRef, effect, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { inject } from '@angular/core';
import { filter } from 'rxjs';
import { XVMenuLateral } from "../xv-menu-lateral/xv-menu-lateral";
import { XVStorage } from '../../../app.config';

/** El mismo corte que usa el SCSS para separar movil de escritorio. */
const ESCRITORIO = '(min-width: 60.0625rem)'

/** La preferencia del riel sobrevive a la recarga. */
const CLAVE_COMPACTO = 'xv-menu-compacto'

@Component({
  imports: [XVMenuLateral],
  selector: 'xv-layout',
  styleUrl: './xv-layout.scss',
  templateUrl: './xv-layout.html',
  host: {
    '(document:keydown.escape)': 'cerrar()'
  }
})
export class XVLayout {

  private readonly router      = inject(Router)
  private readonly destroy_ref = inject(DestroyRef)

  /** Solo aplica en movil: en escritorio el lateral esta siempre visible. */
  protected readonly abierto = signal(false)

  /** El nombre del evento, en la barra del telefono. */
  protected readonly marca = XVStorage.marca.asReadonly()

  /** Lo que eligio la persona. Solo tiene sentido en escritorio. */
  private readonly compacto_elegido = signal(localStorage.getItem(CLAVE_COMPACTO) === '1')

  private readonly consulta = matchMedia(ESCRITORIO)

  /** En movil no hay riel: el menu se abre entero o no se abre. */
  protected readonly escritorio = signal(this.consulta.matches)

  protected readonly compacto = computed(() => this.escritorio() && this.compacto_elegido())

  constructor() {
    // Achicar la ventana con el riel puesto no debe dejar un cajon de iconos.
    const al_cambiar = (e: MediaQueryListEvent) => this.escritorio.set(e.matches)
    this.consulta.addEventListener('change', al_cambiar)
    this.destroy_ref.onDestroy(() => this.consulta.removeEventListener('change', al_cambiar))

    // Si la navegacion ocurre por cualquier via (atras del navegador incluido),
    // el cajon se cierra.
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(() => this.cerrar())

    // Con el cajon abierto, la pagina de atras no debe poder desplazarse.
    effect(() => {
      document.body.classList.toggle('xv-sin-scroll', this.abierto())
    })
  }

  protected readonly alternar = () => this.abierto.update(v => !v)
  protected readonly cerrar   = () => this.abierto.set(false)

  protected readonly alternar_compacto = () => {
    const compacto = !this.compacto_elegido()
    this.compacto_elegido.set(compacto)
    localStorage.setItem(CLAVE_COMPACTO, compacto ? '1' : '0')
  }

}
