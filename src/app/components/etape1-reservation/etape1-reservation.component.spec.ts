import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape1ReservationComponent } from './etape1-reservation.component';

describe('Etape1ReservationComponent', () => {
  let component: Etape1ReservationComponent;
  let fixture: ComponentFixture<Etape1ReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Etape1ReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Etape1ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
