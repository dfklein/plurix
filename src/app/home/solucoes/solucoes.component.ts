import { Component, OnInit, HostListener } from '@angular/core';
import { ContatoModalService } from '../../shared/contato-modal.service'

@Component({
  selector: 'app-solucoes',
  templateUrl: './solucoes.component.html',
  styleUrls: ['./solucoes.component.css']
})
export class SolucoesComponent implements OnInit {

  public innerWidth: any;

  constructor(private contatoModalService:ContatoModalService) { }

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

  openContatoModal() {
    this.contatoModalService.openContatoModal();
  }

}
