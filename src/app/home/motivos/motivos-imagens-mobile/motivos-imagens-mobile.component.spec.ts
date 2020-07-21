import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivosImagensMobileComponent } from './motivos-imagens-mobile.component';

describe('MotivosImagensMobileComponent', () => {
  let component: MotivosImagensMobileComponent;
  let fixture: ComponentFixture<MotivosImagensMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivosImagensMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivosImagensMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
