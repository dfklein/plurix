import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ContatoModalService } from '../contato-modal.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isCollapsed = true;
  faBars = faBars;
  faTimes = faTimes;

  constructor(private router: Router, private contatoModalService: ContatoModalService) {}
  ngOnInit() { }

  openContatoModal() {
    this.contatoModalService.openContatoModal();
  }
 
}
