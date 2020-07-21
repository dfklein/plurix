import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivosImagensDesktopComponent } from './motivos-imagens-desktop.component';

describe('MotivosImagensDesktopComponent', () => {
  let component: MotivosImagensDesktopComponent;
  let fixture: ComponentFixture<MotivosImagensDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivosImagensDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivosImagensDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
