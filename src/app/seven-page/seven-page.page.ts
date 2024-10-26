import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seven-page',
  templateUrl: './seven-page.page.html',
  styleUrls: ['./seven-page.page.scss'],
})

export class SevenPagePage implements OnInit {
  //Datos de la pagina six
  datosAsistencia: any;
  //Nro de clases totales
  nroClases: number = 10;
  //Count de ausentes y presentes
  presente: number = 0;
  ausente: number = 0;

  constructor(private router:Router) { }

  ngOnInit() {
    this.datosAsistencia = history.state.datosAsistencia;
    console.log(this.datosAsistencia)
    
    //Obtenemos el array de los presentes: como objetivo es obtener todas las asistencias 
    //Luego recorrer las asistencias por los presentes y acumularlos

    const alumno = this.datosAsistencia.presentes
    console.log("mostrando de los presentes", alumno)
      if (this.datosAsistencia.estaPresente = true) {
          this.presente += 1;
          console.log("presente if",this.presente);

      }
      
      else if (!this.datosAsistencia.estaPresente) {
          this.ausente += 1;
          console.log("ausente else",this.ausente);
      }
     
  }

  //No terminado
  calculoAsistencia() {
    const porcentajeAsistencia = (this.presente / this.nroClases) * 100;
    return porcentajeAsistencia;
  }

}


