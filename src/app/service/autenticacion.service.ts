//En este servicio se maneja el punto 1 de la evaluacion
//Guards para asegurar la navegación entre páginas
import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root' //Indicando que el servicio "Autenticacion" sera global
})


//Esta clase nos ayudara a exportar nuestras funciones a las demas paginas
export class AutenticacionService {
    //El usuario no debe estar logeado al iniciar el proyecto
    private usuarioLogeado: boolean = false;

    constructor (){}
        //Metodos del usuario logeado
    isLogeado(): boolean {
        return this.usuarioLogeado;
    
    }

    iniciarSesion(){
        this.usuarioLogeado = true;

    }
    
    cerrarSesion() {
        this.usuarioLogeado = false;
        
    }

    //Luego de crear el servicio de autenticacion se creo
    //El guard con el siguiente comando
    //entrar a la carpeta cd 
    //ionic generate guard guards/autenticacion
    //Primera opcion CanActivate
    
}