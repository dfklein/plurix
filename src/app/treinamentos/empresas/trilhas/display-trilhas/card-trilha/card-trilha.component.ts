import { Component, OnInit, Input } from '@angular/core';
import { DadosContatoService } from '../../../dados-contato.service'

@Component({
  selector: 'app-card-trilha',
  templateUrl: './card-trilha.component.html',
  styleUrls: ['./card-trilha.component.css']
})
export class CardTrilhaComponent implements OnInit {

  @Input() titulo:string;
  @Input() conteudo:string;
  @Input() modulos:string[];
  @Input() link:string;
  @Input() linkHref:string;
  @Input() tituloAzul:boolean;
  @Input() trilhaVal:string;
  
  constructor(private dadosContatoService:DadosContatoService) { }

  ngOnInit(): void {
    
  }

  submit() {
    this.dadosContatoService.updateComboVal(this.trilhaVal);
    let x = document.querySelector("#contatoform");
    if (x){
      x.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }
  }

}
