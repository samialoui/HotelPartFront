import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChquadripleComponent } from './chquadriple.component';

describe('ChquadripleComponent', () => {
  let component: ChquadripleComponent;
  let fixture: ComponentFixture<ChquadripleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChquadripleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChquadripleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
