import { Component, OnInit } from '@angular/core';

import data from './cursos.json';

// const cursos = data.cursos;

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css'],
})

export class AcademyComponent {

  cursos = data.cursos;
  
}
