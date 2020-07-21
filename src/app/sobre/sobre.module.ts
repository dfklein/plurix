import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { ValoresComponent } from './valores/valores.component';
import { HistoriaComponent } from './historia/historia.component';
import { MetodologiaComponent } from './metodologia/metodologia.component';
import { MetodosComponent } from './metodologia/metodos/metodos.component';
import { TreinamentoComponent } from './treinamento/treinamento.component';
import { SobreContatoComponent } from './sobre-contato/sobre-contato.component';




@NgModule({
  declarations: [SobreComponent, ValoresComponent, HistoriaComponent, MetodologiaComponent, MetodosComponent, TreinamentoComponent, SobreContatoComponent ],
  imports: [
    NgbModule,
    CommonModule
  ]
})
export class SobreModule { }
