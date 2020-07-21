import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';
import { DesignEstrategicoComponent } from './design-estrategico/design-estrategico.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { MotivosComponent } from './motivos/motivos.component';
import { DepoimentoComponent } from './solucoes/depoimento/depoimento.component';
import { TextoExpansivelModule } from '../shared/texto-expansivel/texto-expansivel.module';
import { MotivosImagensDesktopComponent } from './motivos/motivos-imagens-desktop/motivos-imagens-desktop.component';
import { MotivosImagensMobileComponent } from './motivos/motivos-imagens-mobile/motivos-imagens-mobile.component';
import { HomeContatoComponent } from './home-contato/home-contato.component';

@NgModule({
  declarations: [ HomeComponent, DesignEstrategicoComponent, SolucoesComponent, MotivosComponent, DepoimentoComponent, MotivosImagensDesktopComponent, MotivosImagensMobileComponent, HomeContatoComponent ],
  exports: [ ],
  imports: [
    NgbModule,
    CommonModule,
    AppRoutingModule,
    TextoExpansivelModule
  ]
})
export class HomeModule { }
