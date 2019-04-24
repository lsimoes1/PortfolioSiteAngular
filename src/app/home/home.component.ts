import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  p1 = `Meu nome é Luan, tenho atualmente 27 anos.
    Em 2014 iniciei meus estudos e trabalhos na área da tecnologia. Atuei na area de Suporte auxiliando
    lojas na instalação de sua ferramenta transacional e na integração com PDVs. `
    
  p2 = `Em 2015 tive a oportunidade de me desenvolver na área de Produção e Monitoramento realizando consultas,
    alterações e extrações de relatório diretamente no banco de dados SQL Server, monitorações em servidores,
    IIS e todo ambiente transacional. Nesse período obtive um pequeno conhecimento em Reporting Service também!`

  p3 = `Atualmente exerço a função no setor de sustentação sendo de nossa competência a correção de bugs em
    sistemas internos nas aplicações Windows, Web, Windows Services e banco de dados Sql Server. As linguagens as quais utilizamos
    são: C#, Visual Basic, Asp.Net, SQL Server e Object Pascal (Delphi).`
}
