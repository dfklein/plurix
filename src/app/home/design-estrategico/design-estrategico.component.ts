import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-design-estrategico',
  templateUrl: './design-estrategico.component.html',
  styleUrls: ['./design-estrategico.component.css']
})
export class DesignEstrategicoComponent implements OnInit {

  public innerWidth: any;

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
  
  scrollToElementSolucoes(): void {
    let x = document.querySelector("#projetos");
    if (x){
      x.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }
  }

}
