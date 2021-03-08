import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import sortBy from 'sort-by'
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { animate, style, transition, trigger } from '@angular/animations';
import { listAnimation } from '../listAnimation';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [ listAnimation ],
})


export class ProjectComponent implements OnInit {  

  projetos: Array<any>;
  loading = true;

  constructor(private GithubService: GithubService) { }

  ngOnInit(){
    this.getRepository();
  }

  getRepository(){
      this.GithubService.getRepo().subscribe((response) => {
        this.projetos = response.sort(sortBy('-updated_at'));
        this.loading = false;
      },
      err => {
       this.error(err.message);
        this.loading = false;
      })
    }

  //DESATIVADO DEVIDO A BAIXA PERFORMANCE NA GERAÇÃO DO TOKEN.
  // getRepository(){
  //   this.GithubService.getAuthToken().subscribe((token) => {
  //     this.GithubService.getRepo(token.accessToken).subscribe((response) => {
  //       this.projetos = response.sort(sortBy('-updated_at'));
  //       this.loading = false;
  //     },
  //     err => {
  //      this.error(err.message);
  //       this.loading = false;
  //     })
  //   },
  //   err => {
  //     this.error(err.message);
  //   })    
  // }

  error(msg: string){
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: msg,  
    });
  }
}