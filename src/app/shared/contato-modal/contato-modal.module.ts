import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoModalComponent } from './contato-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContatoModalBodyComponent } from './contato-modal-body/contato-modal-body.component';



@NgModule({
  declarations: [ContatoModalComponent, ContatoModalBodyComponent],
  exports: [ContatoModalComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ContatoModalModule { }
