import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() titulo: string;
  @Input() descricao: string;
  @Input() t1Titulo: string;
  @Input() t1Descricao: string;
  @Input() t2Titulo: string;
  @Input() t2Descricao: string;
  @Input() buttonLink:string;

  constructor() { }

  ngOnInit(): void {
  }

}
