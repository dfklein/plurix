import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.component.html',
  styleUrls: ['./metodos.component.css']
})
export class MetodosComponent implements OnInit {

  @Input() metodos:string[];
  @Input() isDesktopView:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
