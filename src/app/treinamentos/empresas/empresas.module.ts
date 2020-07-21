import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmpresasComponent } from './empresas.component';
import { TrilhasComponent } from './trilhas/trilhas.component';
import { DepoimentoComponent } from './depoimento/depoimento.component';
import { ModulosComponent } from './modulos/modulos.component';
import { DadosContatoComponent } from './dados-contato/dados-contato.component';
import { DisplayTrilhasComponent } from './trilhas/display-trilhas/display-trilhas.component';
import { CardTrilhaComponent } from './trilhas/display-trilhas/card-trilha/card-trilha.component';



@NgModule({
  declarations: [
    EmpresasComponent,
    TrilhasComponent,
    DepoimentoComponent,
    ModulosComponent,
    DadosContatoComponent,
    DisplayTrilhasComponent,
    CardTrilhaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EmpresasModule { }
