import { Component, OnInit, HostListener } from '@angular/core';
import { ImageCaption } from './image-caption';

@Component({
  selector: 'app-motivos',
  templateUrl: './motivos.component.html',
  styleUrls: ['./motivos.component.css']
})
export class MotivosComponent implements OnInit {

  public innerWidth: any;

  images: ImageCaption[] = [
    { fileName:"motivo-postit.png", figcaption:"Usamos mais cores de post-its do que a concorrência.", alt:"Post-its sendo utilizados em um quadro" },
    { fileName:"motivo-letra-bonita.png", figcaption:"Escrevemos rápido e com letra bonita durante os workshops.", alt:"Pessoas sentadas vendo um palestrante escrever em um quadro na parede" },
    { fileName:"motivo-jogos.png", figcaption:"Planejamos jogos que nem sempre serão úteis, mas serão legais.", alt:"Pessoas executando jogos de desenvolvimento de projetos" }
  ];

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;

  }

  isDesktopView(width) {
    return this.innerWidth >= width;
  }

}
