import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContatoComponent } from './home-contato.component';

describe('HomeContatoComponent', () => {
  let component: HomeContatoComponent;
  let fixture: ComponentFixture<HomeContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
