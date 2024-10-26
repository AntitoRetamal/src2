import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; // Corrige la ruta y el nombre del servicio

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {
  nombre: string = ''; // Declara la propiedad username
  contrasena: string = ''; // Declaro la propiedad password
  inputValidoName: boolean = true; // Esto ayudará para saber qué input no cumple con la validación
  inputValidoPass: boolean = true; // Esto ayudará para saber qué input no cumple con la validación
  MensajeValidacion: boolean = true;
  mensaje: string = ''; // Mensaje de la etiqueta p
  logueado: boolean = false;

  constructor(private router: Router,
              private alertController: AlertController,
              private authService: AuthService) { } // Cambié `auten` a `authService`

  ngOnInit() {}

  ionViewDidLeave() {
    this.mensaje = '';
    console.log("Limpiando datos al cambiar de pagina");
    this.inputValidoName = true;
    this.inputValidoPass = true;
  }

  // Array de caracteres de mayúsculas y minúsculas
  DatosValidos = /^[A-Za-z]+$/;

  gotoSecondPage() {
    // Usamos la función test para la restricción de caracteres especiales
    this.inputValidoName = this.DatosValidos.test(this.nombre);

    // Aplicamos una condición para que los datos ingresados sean correctos
    if (this.inputValidoName && this.nombre.length >= 5 && this.contrasena.length >= 5) {
      // Validar usuario en la base de datos
      this.authService.validateUser(this.nombre, this.contrasena).subscribe(
        response => {
          // Si la validación es exitosa, navegar a la segunda página
          this.router.navigate(['/second-page'], { state: { username: this.nombre } });
        },
        error => {
          // Manejar error, mostrando un mensaje
          this.mensaje = 'El usuario o la contraseña son incorrectos. Por favor intenta de nuevo.';
          this.MensajeValidacion = false; // Mostrar mensaje de validación
        }
      );
    } else if (this.nombre.length < 5) {
      this.mensaje = 'El nombre ingresado no es válido.';
      this.inputValidoName = false; // Cambia a false para mostrar el mensaje de error
    } else if (!this.inputValidoName) {
      this.mensaje = 'No se permiten caracteres especiales.';
    } else if (this.nombre.length < 5) {
      this.mensaje = 'La contraseña es demasiado corta o no ha sido ingresada.';
      this.inputValidoPass = false; // Cambia a false para mostrar el mensaje de error
    } else {
      this.mensaje = 'Error en la validación.';
    }
  }

  // Navegación a ThirdPage
  gotoThirdPage() {
    this.inputValidoName = this.DatosValidos.test(this.nombre);
    this.router.navigateByUrl('/third-page', { state: { username: this.nombre } });
  }

  // Este método se ejecutará al hacer clic en el botón
  gotoregister() {
    console.log('correcto');
    this.router.navigateByUrl('/register');  
  }
}
