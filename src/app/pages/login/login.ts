import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { XVStorage } from '../../app.config';
import { Router } from '@angular/router';
import { Button } from '@openng/optimus-ui/button';
import { Message } from '@openng/optimus-ui/message';
import { FirebaseAuthService } from '../../services/firebase-auth';

@Component({
  imports: [Button, Message],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class LoginPage implements OnInit {

  private readonly firebase_auth = inject(FirebaseAuthService)
  private readonly router        = inject(Router)

  protected readonly marca = XVStorage.marca.asReadonly()

  /** "3 de abril de 2027": la fecha de la fiesta, de la configuracion. */
  protected readonly fecha = computed(() => {
    const e = XVStorage.configuracion().evento
    return new Intl.DateTimeFormat('es-AR', { timeZone: e.zona, day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(e.fecha))
  })

  protected readonly cargando = signal(false)
  protected readonly error    = signal<string | null>(null)

  async ngOnInit() {
    const user = await this.firebase_auth.restaurar_sesion()
    if(user) await this.router.navigate(['/tarjetas'])
  }

  protected readonly entrar = async () => {
    this.cargando.set(true)
    this.error.set(null)

    try {
      const user = await this.firebase_auth.login()
      if(user) {
        await this.router.navigate(['/tarjetas'])
        return
      }
      this.error.set('No pudimos iniciar sesión. Inténtelo de nuevo.')
    }
    catch(e: any) {
      this.error.set(this.mensaje_de(e?.code))
    }
    finally {
      this.cargando.set(false)
    }
  }

  private readonly mensaje_de = (code?: string): string => {
    if(code === 'auth/cuenta-no-autorizada')   return 'Esa cuenta no tiene acceso al backoffice.'
    if(code === 'auth/popup-closed-by-user')   return 'Cerró la ventana de Google antes de terminar.'
    if(code === 'auth/popup-blocked')          return 'El navegador bloqueó la ventana de Google. Permítala y vuelva a intentar.'
    if(code === 'auth/network-request-failed') return 'No hay conexión. Revise su conexión a internet.'
    return 'No pudimos iniciar sesión. Inténtelo de nuevo.'
  }

}
