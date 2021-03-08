import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { ProfessionalService } from '../services/professional.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  professional: Array<any>;
  loading = true;

  constructor(private ProfessionalService: ProfessionalService) { }

  ngOnInit(){
    this.getRepository();
  }

  getRepository(){

      this.ProfessionalService.getInfoProfessional().subscribe((response) => {
        this.professional = response;
        this.loading = false;
        console.log(this.professional);
      },
      err => {
       this.error(err.message);
        this.loading = false;
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
