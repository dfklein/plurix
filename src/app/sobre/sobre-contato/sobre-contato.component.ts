import { Component, OnInit, HostListener } from '@angular/core';
import { ContatoModalService } from 'src/app/shared/contato-modal.service';

@Component({
  selector: 'app-sobre-contato',
  templateUrl: './sobre-contato.component.html',
  styleUrls: ['./sobre-contato.component.css']
})
export class SobreContatoComponent implements OnInit {

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
    return this.innerWidth >= 575;
  }

  openContatoModal() {
    this.contatoModalService.openContatoModal();
  }
  
}
