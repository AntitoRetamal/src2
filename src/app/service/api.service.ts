//PRIMERO CREAMOS EL SERVICIO: OK 
//INSTALAMOS LAS IMPORTACIONES: npm install @angular/common OK
//importamos el modulo en app.modules.ts HttpClientModule  
import { Injectable } from '@angular/core';
//Esto nos ayudara a realizar solicitudes o peticciones de tipo GET
import { HttpClient } from '@angular/common/http';
// Esto nos permite manajat respuestas de forma asincrona 
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class APIService {
  //API URL: Esta URL la copiamos desde la pagina oficial de randomUser
  apiURL = 'https://randomuser.me/api'
  users: any[]=[] //Para almacenar los usuarios
  datosAsistencia: any;
  presente: number = 0;
  ausente: number = 0;

  
  constructor(private http: HttpClient, private alert : AlertController) { } //Creando una "instancia" para hacer las consultas http

  //Creacion o utilización del metodo GET 
  getRandomUser(count:number):Observable<any> { //Count: sera el numero de usuarios que se pedira
    return this.http.get(`${this.apiURL}/?results=${count}&seed=foobar&nat=es`);

  }

  marcarAsistencia(user: any, estado: string) {
    if (estado === "presente") {
      user.estaAusente = false;
      user.estaPresente = true;

    } else if (estado === "ausente"){
      user.estaAusente = true;
      user.estaPresente = false;

    }

  }
  //Crear funcion en localStogare o aqui para almacenar la cantidad de asistencias de los alumnos
  asisntenciaEstudiantes(){
    //Con esto nos llevamos la matris del usuario completo
    //esta matris la encontramos al precionar el boton tomar asistencia
    return this.users.filter(user => user.estaPresente === true);
    console.log("Estas usando la funcion service count asistencia ")
   
  }


  //Mensaje de error o de funciona de la API si o si debe estar en serice para optimizar codigo

  async AltertaApi(mensajeAPI: string) {
    const alert = await this.alert.create({
      header: 'Estado del sistema ',
      subHeader: mensajeAPI,

      buttons: [
        {
          text: 'Acpetar',
          handler: () => {
            console.log('ok');
          },
        },
      ],
    });

    await alert.present();
  }


}
