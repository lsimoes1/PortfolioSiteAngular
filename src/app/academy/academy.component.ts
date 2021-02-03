import { AcademyService } from './../services/academy.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 

import data from './cursos.json';

// const cursos = data.cursos;

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css'],
})

export class AcademyComponent implements OnInit {

  cursosTI = data.cursosTI;
  cursoIdiomas = data.cursosIdiomas;
  cursoGraduacao = data.graduacao;s
  loading:boolean;

  constructor(private AcademyService: AcademyService) { }

  ngOnInit(){
    this.getInfoAcademy();
  }


  getInfoAcademy(){
    this.AcademyService.getAuthToken().subscribe((token) => {
      this.AcademyService.getInfoAcademy(token.accessToken).subscribe((response) => {
        console.log(response)
        this.loading = false;
      },
      err => {
       this.error(err.message);
        this.loading = false;
      })
    },
    err => {
      this.error(err.message);
    })
  }

  error(msg: string){
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: msg,  
    });
  }

}
