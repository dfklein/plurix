import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { SobreComponent } from './sobre/sobre.component'
import { TreinamentosComponent } from './treinamentos/treinamentos.component'
import { EmpresasComponent } from './treinamentos/empresas/empresas.component'
import { PessoasComponent } from './treinamentos/pessoas/pessoas.component'

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};

const routes: Routes = [
  { path:'home', component: HomeComponent, data: {animation: 'Home'} },
  { path:'sobre', component: SobreComponent, data: {animation: 'Sobre'} },
  { path:'treinamentos', component: TreinamentosComponent, 
    children: [
      { path: '', redirectTo: 'empresas', pathMatch: 'full' },
      { path: 'empresas', component: EmpresasComponent, data: {animation: 'Empresas'} },
      { path: 'pessoas', component: PessoasComponent, data: {animation: 'Pessoas'} }
    ], data: {animation: 'Treinamentos'}
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
