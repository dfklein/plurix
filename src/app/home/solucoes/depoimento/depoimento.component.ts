import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-depoimento',
  templateUrl: './depoimento.component.html',
  styleUrls: ['./depoimento.component.css']
})
export class DepoimentoComponent implements OnInit {

  public innerWidth: any;
  
  @Input() logoUri: string;
  @Input() logoAlt: string;
  @Input() depoimento: string;
  @Input() autor: string;
  @Input() cargo: string;
  @Input() descricao: string;
  @Input() tags: string[];

  isExibirSobre = false;
  
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  isDesktopView() {
    return this.innerWidth >= 1155;
  }

  toggleExibirSobre() {
    this.isExibirSobre = !this.isExibirSobre;
  }

}
