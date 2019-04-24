import { Component, OnInit } from '@angular/core';
import data from "./projetos.json";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  projetos = data.projetos;

}
