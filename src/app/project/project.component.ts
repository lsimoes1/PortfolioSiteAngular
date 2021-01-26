import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import sortBy from 'sort-by'


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  token:string;
  projetos: Array<any>;
  loading = true;
  
  constructor(private GithubService: GithubService ){}

  ngOnInit(){
    this.getRepository();
  }

  getRepository(){
    this.GithubService.getAuthToken().subscribe((responseToken) => {
      this.GithubService.getRepo(responseToken.accessToken).subscribe((response) => {
        this.projetos = response.sort(sortBy('-updated_at'));
        this.loading = false;
      });
    });
  };

  getAuthToken(){
    this.GithubService.getAuthToken().subscribe((responseToken) => {
      this.token = responseToken.accessToken;
    },
    erro => {
      console.log(erro);
    })
  }
}