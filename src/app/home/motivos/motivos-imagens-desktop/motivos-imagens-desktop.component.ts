import { Component, OnInit, Input } from '@angular/core';
import { ImageCaption } from '../image-caption';

@Component({
  selector: 'app-motivos-imagens-desktop',
  templateUrl: './motivos-imagens-desktop.component.html',
  styleUrls: ['./motivos-imagens-desktop.component.css']
})
export class MotivosImagensDesktopComponent implements OnInit {

  @Input() images: ImageCaption[];

  constructor() { }

  ngOnInit(): void {
  }

  getSrcFromName(fileName:string) {
     return "../../../../assets/img/home/" + fileName;
  }

}
