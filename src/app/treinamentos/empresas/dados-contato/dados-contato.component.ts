import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DadosContatoService } from '../dados-contato.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { TrilhasEnum } from '../../../trilhas-enum';

@Component({
  selector: 'app-dados-contato',
  templateUrl: './dados-contato.component.html',
  styleUrls: ['./dados-contato.component.css']
})
export class DadosContatoComponent implements OnInit {

  selectOptions : string[] = Object.values(TrilhasEnum);
  cardSelectedOption: TrilhasEnum;
  successMsg: boolean = false;
  errorMsg: boolean = false;


  contatoForm = new FormGroup({
    interesse: new FormControl(''),
    nome: new FormControl('', [
      Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email])
  },{updateOn:'submit'});

  constructor(private dadosContatoService:DadosContatoService) { }

  ngOnInit(): void {
    this.dadosContatoService.currentComboVal.subscribe(comboVal => { 
      this.contatoForm.get("interesse").setValue(TrilhasEnum[comboVal] == undefined ? '' : TrilhasEnum[comboVal])
    });
    
  }

  onSubmit() {
    if (this.contatoForm.valid) {
      this.dadosContatoService.sendFormDataToGoogle(this.contatoForm.get("nome").value, this.contatoForm.get("email").value, this.contatoForm.get("interesse").value)
          .subscribe((event: HttpEvent<any>) => {
            if (event.type == HttpEventType.Response) {
              //this.alertService.success('Upload complete', true);
              this.contatoForm.reset();
              this.contatoForm.get("interesse").setValue('');
              this.successMsg = true;
              alert('Enviado!');
              
            }
          },
          err => {
            console.log(err);
            this.errorMsg = true;
            
          });


    } else {
      this.contatoForm.markAllAsTouched();
      this.successMsg = false;
      
    }
  }

}
