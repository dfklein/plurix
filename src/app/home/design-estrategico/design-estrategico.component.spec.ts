import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignEstrategicoComponent } from './design-estrategico.component';

describe('DesignEstrategicoComponent', () => {
  let component: DesignEstrategicoComponent;
  let fixture: ComponentFixture<DesignEstrategicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignEstrategicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignEstrategicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
