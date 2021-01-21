import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import sortBy from 'sort-by'


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projetos: Array<any>;
  loading = true;
  
  constructor(private GithubService: GithubService ){}

  ngOnInit(){
   this.getRepository();
  }

  getRepository(){
    this.GithubService.getRepo().subscribe((response) => {
      this.projetos = response.sort(sortBy('-updated_at'));
      this.loading = false;
    }); 
  };
  
}