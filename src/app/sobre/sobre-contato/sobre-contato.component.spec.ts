import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreContatoComponent } from './sobre-contato.component';

describe('SobreContatoComponent', () => {
  let component: SobreContatoComponent;
  let fixture: ComponentFixture<SobreContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
