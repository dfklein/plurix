import { Component, OnInit, HostListener } from '@angular/core';
import { ContatoModalService } from 'src/app/shared/contato-modal.service';

@Component({
  selector: 'app-home-contato',
  templateUrl: './home-contato.component.html',
  styleUrls: ['./home-contato.component.css']
})
export class HomeContatoComponent implements OnInit {

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
