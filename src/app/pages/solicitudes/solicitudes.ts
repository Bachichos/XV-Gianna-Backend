import { Component, computed, signal } from '@angular/core';
import { XVLayout } from "../../components/design/xv-layout/xv-layout";
import { XVStorage } from '../../app.config';
import { con_alimentacion, menus_de } from '../../models/tarjeta';

@Component({
  imports: [XVLayout],
  selector: 'app-solicitudes',
  styleUrl: './solicitudes.scss',
  templateUrl: './solicitudes.html',
})
export class SolicitudesPage {

  /** La escucha vive en app.ts: aca solo se lee lo que dejo en XVStorage. */
  protected readonly cargando = computed(() => XVStorage.tarjetas() === null)

  /** Quienes confirmaron y declararon una alergia, intolerancia o dieta. */
  protected readonly lista = computed(() => con_alimentacion(XVStorage.tarjetas() ?? [], XVStorage.anfitriones() ?? []))

  /** Los menus de quienes confirmaron: lo otro que el salon necesita saber. */
  protected readonly menus = computed(() => menus_de(XVStorage.tarjetas() ?? [], true, XVStorage.anfitriones() ?? []))

  protected readonly hay_algo = computed(() =>
    this.lista().length > 0 || this.menus().adultos + this.menus().infantiles > 0)

  protected readonly copiado = signal(false)

  /**
   * La lista como texto, para pegarla en un WhatsApp o un mail al salon:
   * una linea por persona, y el total arriba.
   */
  protected readonly copiar = async () => {
    const lista = this.lista()
    const m = this.menus()
    const texto = [
      `Menús (confirmados y anfitriones): ${m.adultos} de adulto · ${m.infantiles} ${m.infantiles === 1 ? 'infantil' : 'infantiles'}`,
      '',
      `Alergias, intolerancias y dietas: ${lista.length} ${lista.length === 1 ? 'persona' : 'personas'}`,
      ...lista.map(d => `• ${d.nombre}${d.menu_infantil ? ' (menú infantil)' : ''}: ${d.alimentacion}`),
    ].join('\n')

    try {
      await navigator.clipboard.writeText(texto)
      this.copiado.set(true)
      setTimeout(() => this.copiado.set(false), 2000)
    }
    catch(e) { console.error('[copiar]', e) }
  }
}
