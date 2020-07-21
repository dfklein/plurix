import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducaoTreinamentosComponent } from './introducao-treinamentos.component';

describe('IntroducaoTreinamentosComponent', () => {
  let component: IntroducaoTreinamentosComponent;
  let fixture: ComponentFixture<IntroducaoTreinamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducaoTreinamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducaoTreinamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
