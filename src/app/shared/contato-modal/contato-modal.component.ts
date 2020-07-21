import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ContatoModalService } from '../contato-modal.service';

@Component({
  selector: 'app-contato-modal',
  templateUrl: './contato-modal.component.html',
  styleUrls: ['./contato-modal.component.css']
})
export class ContatoModalComponent implements OnInit {
  
  @ViewChild('contatoModal') public contatoModal: TemplateRef<any>;

  faTimes = faTimes;

  closeResult = '';

  // listener de chamada a contato-modal.service openContatoModal()
  constructor(private modalService: NgbModal, private contatoModalService: ContatoModalService) {
    this.contatoModalService.contatoModalComponent$.subscribe(response => {
      this.open();
    });
  }

  ngOnInit(): void {
  }

  open() {
    this.modalService.open(this.contatoModal, {ariaLabelledBy: 'modal-basic-title', windowClass : "contatoClass", size:"xl"}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
