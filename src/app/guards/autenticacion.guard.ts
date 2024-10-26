import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
//Importacion de service/autenticacion Service
import { AutenticacionService } from '../service/autenticacion.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionGuard implements CanActivateFn {
  constructor(private authService: AutenticacionService, private router:Router) {
  }
  //Decide si se puede acceder a la ruta (IMPORTANTE SI EL USUARIO PUEDE ENTRAR A LA RUTA SI ESTAS LOGUEADO)
  canActivate(): boolean {
    if (this.authService.isLogeado()){
      return true;

    } else {
      this.router.navigate(["/"]);
      return false;

    }
  } 

}

