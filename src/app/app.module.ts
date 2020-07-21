import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { NavBarModule } from './shared/nav-bar/nav-bar.module';
import { FooterModule } from './shared/footer/footer.module';
import { HomeModule } from './home/home.module';
import { SobreModule } from './sobre/sobre.module';
import { TreinamentosModule } from './treinamentos/treinamentos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavBarModule,
    FooterModule,
    HomeModule,
    SobreModule,
    TreinamentosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
