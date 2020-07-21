import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ContatoModalService {
  private contatoModalComponentSource = new Subject<boolean>();
  contatoModalComponent$ = this.contatoModalComponentSource.asObservable();

  constructor() { }

  openContatoModal() {
    this.contatoModalComponentSource.next(null);
  }

  
}
