import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diferencial',
  templateUrl: './diferencial.component.html',
  styleUrls: ['./diferencial.component.css']
})
export class DiferencialComponent implements OnInit {

  @Input() titulo: string;
  @Input() descricao: string;
  @Input() img: string;
  @Input() imgAlt: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
