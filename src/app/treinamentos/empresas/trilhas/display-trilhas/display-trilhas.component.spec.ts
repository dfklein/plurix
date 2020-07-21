import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTrilhasComponent } from './display-trilhas.component';

describe('DisplayTrilhasComponent', () => {
  let component: DisplayTrilhasComponent;
  let fixture: ComponentFixture<DisplayTrilhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTrilhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTrilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
