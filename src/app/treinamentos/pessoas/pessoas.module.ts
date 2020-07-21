import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasComponent } from './pessoas.component';
import { IntroducaoComponent } from './introducao/introducao.component';
import { CustomerExperienceComponent } from './customer-experience/customer-experience.component';
import { UserExperienceComponent } from './user-experience/user-experience.component';
import { DiferenciaisComponent } from './diferenciais/diferenciais.component';
import { CursoComponent } from './curso/curso.component';
import { DiferencialComponent } from './diferenciais/diferencial/diferencial.component';



@NgModule({
  declarations: [
    PessoasComponent,
    IntroducaoComponent,
    CustomerExperienceComponent,
    UserExperienceComponent,
    DiferenciaisComponent,
    CursoComponent,
    DiferencialComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PessoasModule { }
