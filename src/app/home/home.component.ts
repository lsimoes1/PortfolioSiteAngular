import { Component } from '@angular/core';
import { isDate, toDate } from '@angular/common/src/i18n/format_date';
import { DatePipe } from '@angular/common';
import { initDomAdapter } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {

  anoNascimento = 1992;
  anoAtual = new Date().getFullYear();
  idade = this.anoAtual  - this.anoNascimento;
}
