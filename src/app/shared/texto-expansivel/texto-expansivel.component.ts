import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-texto-expansivel',
  templateUrl: './texto-expansivel.component.html',
  styleUrls: ['./texto-expansivel.component.css']
})
export class TextoExpansivelComponent implements OnInit {

  @Input() texto: string;
  @Input() tamanho: number;
  @Input() expandirLinkTexto: string;
  @Input() retrairLinkTexto: string;
  @Input() isQuote: boolean = false;

  isTextoExpandido = false;
  textoRetraido: string;
  textoExibicao: string;
  
  constructor() { }

  ngOnInit(): void {
    this.gerarTextoExibicaoInicial();
    if(this.isLinkExpansivel) {
      this.textoExibicao = this.textoRetraido;
    } else {
      this.textoExibicao = this.texto;
    }
  }

  toggleExpansao() {
    this.isTextoExpandido = !this.isTextoExpandido;
    console.log(this.isTextoExpandido);
    if(this.isTextoExpandido) {
      this.textoExibicao = this.texto;
      console.log(this.textoExibicao.length);
    } else {
      this.textoExibicao = this.textoRetraido;
      console.log(this.textoExibicao.length);
    }
  }

  isLinkExpansivel() {
    return this.texto.length >= this.tamanho;
  }

  private gerarTextoExibicaoInicial() {
    if(this.isLinkExpansivel()) {
      var textoSubstring = this.texto.substring(0, this.tamanho);
      for(var i=textoSubstring.length; i>=0; i--) {
        if(textoSubstring.charAt(i) != ' ') {
          textoSubstring = textoSubstring.substring(0, i);
        } else {
          break;
        }
      }
      textoSubstring = textoSubstring.substring(0, textoSubstring.length-2);
      this.textoRetraido = textoSubstring + '...';

    } else {
      this.textoRetraido = this.texto;

    }
  }

}
