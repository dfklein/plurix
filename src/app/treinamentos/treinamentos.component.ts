import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../route-animation';

@Component({
  selector: 'app-treinamentos',
  templateUrl: './treinamentos.component.html',
  styleUrls: ['./treinamentos.component.css'],
  animations: [ slideInAnimation ]
  
})
export class TreinamentosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
