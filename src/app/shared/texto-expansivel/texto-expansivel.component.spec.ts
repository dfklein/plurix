import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoExpansivelComponent } from './texto-expansivel.component';

describe('TextoExpansivelComponent', () => {
  let component: TextoExpansivelComponent;
  let fixture: ComponentFixture<TextoExpansivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextoExpansivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoExpansivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
