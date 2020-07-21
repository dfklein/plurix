import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-introducao-treinamentos',
  templateUrl: './introducao-treinamentos.component.html',
  styleUrls: ['./introducao-treinamentos.component.css']
})
export class IntroducaoTreinamentosComponent implements OnInit {

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
    return this.innerWidth >= 992;
  }

}
