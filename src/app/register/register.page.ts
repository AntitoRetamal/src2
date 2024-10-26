import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    // Validar los campos antes de realizar la solicitud
    if (!this.nombre || !this.correo || !this.contrasena) {
      console.error('Todos los campos son obligatorios');
      return;
    }
    this.authService.registerUser(this.nombre, this.correo, this.contrasena).subscribe(
      response => {
        console.log('Usuario registrado con éxito:', response);
        // Redirigir a una página de inicio o mostrar un mensaje de éxito
        alert('Usuario registrado con éxito');
        this.router.navigate(['first-page']);
      },
      error => {
        console.error('Error al registrar usuario:', error);
        // Mostrar mensaje de error al usuario
        alert('Hubo un error al registrar el usuario');
      }
    );
  }
}
