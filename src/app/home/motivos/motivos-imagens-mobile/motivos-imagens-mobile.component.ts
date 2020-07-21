import { Component, OnInit, Input } from '@angular/core';
import { ImageCaption } from '../image-caption';

@Component({
  selector: 'app-motivos-imagens-mobile',
  templateUrl: './motivos-imagens-mobile.component.html',
  styleUrls: ['./motivos-imagens-mobile.component.css']
})
export class MotivosImagensMobileComponent implements OnInit {

  @Input() images: ImageCaption[];

  constructor() { }

  ngOnInit(): void {
    
  }

  getSrcFromName(fileName:string) {
    return "../../../../assets/img/home/" + fileName;
  }

}
