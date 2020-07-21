import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferencialComponent } from './diferencial.component';

describe('DiferencialComponent', () => {
  let component: DiferencialComponent;
  let fixture: ComponentFixture<DiferencialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiferencialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
