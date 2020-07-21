import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoModalBodyComponent } from './contato-modal-body.component';

describe('ContatoModalBodyComponent', () => {
  let component: ContatoModalBodyComponent;
  let fixture: ComponentFixture<ContatoModalBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoModalBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoModalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
