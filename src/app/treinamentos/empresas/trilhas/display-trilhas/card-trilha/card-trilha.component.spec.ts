import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrilhaComponent } from './card-trilha.component';

describe('CardTrilhaComponent', () => {
  let component: CardTrilhaComponent;
  let fixture: ComponentFixture<CardTrilhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTrilhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTrilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
