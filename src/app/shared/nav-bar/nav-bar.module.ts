import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavBarComponent } from './nav-bar.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ContatoModalModule } from '../contato-modal/contato-modal.module';


@NgModule({
    declarations: [
        NavBarComponent,
    ],
    exports: [
        NavBarComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        NgbCollapseModule,       
        NgbModalModule,
        FontAwesomeModule,
        ContatoModalModule
    ]
})
export class NavBarModule {

}