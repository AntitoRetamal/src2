import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/usuarioo'; // Actualiza la URL
  private validateUrl = 'http://localhost:3000/api/validate-user'; // URL para validar usuario
  private resetUrl = 'http://localhost:3000/api/reset-password';

  constructor(private http: HttpClient) { }

  registerUser(nombre: string, correo: string, contrasena: string): Observable<any> {
    const userData = { nombre, correo, contrasena };
    return this.http.post(this.apiUrl, userData).pipe(
      catchError(err => {
        console.error('Error en el registro:', err);
        return throwError(err); // Re-lanzar el error
      })
    );
  }

  resetUserPassword(correo: string, nuevaContrasena: string): Observable<any> {
    const data = { correo, nuevaContrasena };
    return this.http.post(this.resetUrl, data).pipe(
      catchError(err => {
        console.error('Error al restablecer la contraseña:', err);
        return throwError(err);
      })
    );
  }

  // Nuevo método para validar usuario
  validateUser(nombre: string, contrasena: string): Observable<any> {
    const data = { nombre, contrasena }; // Ajusta según tu lógica de backend
    return this.http.post(this.validateUrl, data).pipe(
      catchError(err => {
        console.error('Error al validar el usuario:', err);
        return throwError(err);
      })
    );
  }
}
