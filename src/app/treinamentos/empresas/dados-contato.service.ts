import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosContatoService {

  
  
  private comboVal = new BehaviorSubject('');
  currentComboVal = this.comboVal.asObservable();
  
  constructor(private http: HttpClient) { }

  updateComboVal(val: string) {
    this.comboVal.next(val)
  }

  sendFormDataToGoogle(nome: string, email: string, interesse: string) {
    const headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
                                     //.set('Access-Control-Allow-Origin', '*');

    const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSekAMQItXYWim_wM-HY_wHtTOYaj5-Ktf3jmiPvrytq1SDkng/formResponse';

    const body = new HttpParams().set('entry.1679102942', nome)
                                 .set('entry.267440979', email)
                                 .set('entry.344308574', interesse);

    return this.http.post(url, body.toString(), {headers:headers});
    
  }
  
}
