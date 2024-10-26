import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.page.html',
  styleUrls: ['./third-page.page.scss'],
})
export class ThirdPagePage implements OnInit {
  nombre: string = '';
  mensaje: string = '';
  inputExtractName: string = '';
  correo: string = '';
  nuevaContrasena: string = '';
  confirmarContrasena: string = '';
  usuarioValido: boolean = false;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.nombre = navigation.extras.state['nombre'];
    }
  }

  ionViewDidLeave() {
    this.mensaje = '';
    console.log("Mensaje borrado al cambiar de pagina");
  }

  async recoverPassword() {
    // Verifica si el nombre de usuario y el correo coinciden
    if (this.inputExtractName === this.nombre && this.correo === this.nombre + '@ejemplo.com' && this.nombre.length > 0) {
      this.usuarioValido = true;
      this.mensaje = 'Usuario encontrado. Ingresa la nueva contraseña.';
    } else {
      this.mensaje = 'El usuario o correo que has ingresado no existen, por favor vuelve a intentarlo';
    }
  }
  

  async resetPassword() {
    if (!this.nuevaContrasena || !this.confirmarContrasena) {
      console.error('Todos los campos son obligatorios');
      return;
    }

    if (this.nuevaContrasena !== this.confirmarContrasena) {
      this.mensaje = 'Las contraseñas no coinciden. Por favor, inténtalo nuevamente.';
      return;
    }

    this.authService.resetUserPassword(this.correo, this.nuevaContrasena).subscribe(
      async response => {
        console.log('Contraseña restablecida:', response);
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'La contraseña ha sido restablecida exitosamente.',
          buttons: ['OK']
        });
        await alert.present();
        this.router.navigateByUrl('/first-page');
      },
      async error => {
        console.error('Error al restablecer la contraseña:', error);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Hubo un problema al restablecer la contraseña. Inténtalo de nuevo.',
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }

  goBack() {
    this.router.navigateByUrl('/first-page');
  }
}
