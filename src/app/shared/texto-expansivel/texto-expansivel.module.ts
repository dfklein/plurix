import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextoExpansivelComponent } from './texto-expansivel.component';



@NgModule({
  declarations: [TextoExpansivelComponent],
  exports: [TextoExpansivelComponent],
  imports: [
    CommonModule
  ]
})
export class TextoExpansivelModule { }
