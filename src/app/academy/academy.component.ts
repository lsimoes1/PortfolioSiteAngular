import { infoAcademy } from './../models/infoAcademy';
import { AcademyService } from './../services/academy.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css'],
})

export class AcademyComponent implements OnInit {

  cursosTI:Array<infoAcademy> = [];
  cursoIdiomas:Array<infoAcademy> = [];
  cursoGraduacao:Array<infoAcademy> = [];
  loading = true;

  constructor(private AcademyService: AcademyService) { }

  ngOnInit(){
    this.getInfoAcademy();
  }

  getInfoAcademy(){
    this.AcademyService.getAuthToken().subscribe((token) => {
      this.AcademyService.getInfoAcademy(token.accessToken).subscribe((response) => {
        
        try {
          response.forEach(element =>{
            if(element.Tipo == "1"){
              this.cursoGraduacao.push(element);
            }
            else if(element.Tipo == "3"){
              this.cursoIdiomas.push(element)
            }
            else{
              this.cursosTI.push(element)
            }
          })
        } catch (error) {
          this.error(error)
        }  
        
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
  };

  error(msg: string){
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: msg,  
    });
  }
};
