import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-six-page',
  templateUrl: './six-page.page.html',
  styleUrls: ['./six-page.page.scss'],
})
export class SixPagePage implements OnInit {
  users: any[]=[] //Para almacenar los usuarios
  mensaje: string = ""; //Para mostrar mensajes
  //CheckBox asitencia 
  estaPresente: boolean = false;

  //Constructor para acceder a las funciones get del API
  constructor(private api: APIService, private router:Router) { }

  ngOnInit() {
    this.api.getRandomUser(5).subscribe (
      
      //Respuesta tipo JSON
      (res)=> {
        this.users = res.results;
        this.mensaje = "¡Se han cargado los datos de los estudiantes exitosamente!"
        estaPresente: false; //cuando se generan los usuarios estan ausentes
        this.api.AltertaApi(this.mensaje)

      },
      
      //Error de la API
      (error)=>{
        //Para generar un error a proposito debes manipular la URl de la api
        this.mensaje = "No se han cargados los estudiantes"
        console.log(error);
        this.api.AltertaApi(this.mensaje)

      }
      
    );

    //servicio de la api de cambio de asistencia
    this.api.asisntenciaEstudiantes    

  }

  marcarAsistencia(user: any, estado: string) {
    this.api.marcarAsistencia(user, estado);

  }


  //Esta funcion nos ayudara a que los estados de asistencia de los estudiantes sean de manera individual
  //Para tomar en consideracion los siguientes factores para esta funcion
  //Si el alumno esta ausente no pasa nada, ni se suma ni se resta un valor
  //si el alumno no pasa del 70% de asistencia queda reprobado
  //si el alumno esta presente se le aumenta la asistencia
  //si el alumno tiene >= 70% queda con buena asistencia
  //considerar que la materia debe tener un maximo de clases ejemplo: 10
  //al hacer click al boton se deberia activar este evento

tomarAsistencia() {
  //Mi logica fue que use el filter para contar la cantidad del largo de los true y false
  //quise sacar solo los ausentes y presentes
  //Luego, me llevare todos los datos de los array de los estudiantes y me lo llevare a la otra pagina para ver la asistencia de los estudiantes
  //en esa pagina se imprimira a todos los estudiantes y sus asistencias:
  //asistencias: 1
  //faltas = 4
  //total de clases: 10
  //calculo porcentaje: 60%
  //if alumno tiene <= 70% problemas de asistencia

  const presentes = this.users.filter(user => user.estaPresente === true);
  const ausentes = this.users.filter(user => user.estaAusente === true);

  const cantidadPresentes = presentes.length;
  const cantidadAusentes = ausentes.length;

  console.log(`Total presentes: ${cantidadPresentes}`);
  console.log(`Total ausentes: ${cantidadAusentes}`);

  //Los datos que movere para la pagina seven.
  const datosAsistencia: any = {
    presentes: presentes,
    ausentes: ausentes,
    lenghtAusentes: cantidadAusentes,
    lenghtPresentes: cantidadPresentes,

  }

  //Por ahora es ROUTER pero deberia ser services o Base de datos para matener todas las asistencias de los alumnos
  this.router.navigate(["/seven-page"], { state: { datosAsistencia:datosAsistencia } })
  }  
}
