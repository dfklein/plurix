import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '../app-routing.module';
import { TreinamentosComponent } from './treinamentos.component';
import { EmpresasModule } from './empresas/empresas.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { IntroducaoTreinamentosComponent } from './introducao-treinamentos/introducao-treinamentos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TreinamentosComponent,
    IntroducaoTreinamentosComponent
  ],
  exports: [  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EmpresasModule,
    PessoasModule,
    
  ]
})
export class TreinamentosModule { }
