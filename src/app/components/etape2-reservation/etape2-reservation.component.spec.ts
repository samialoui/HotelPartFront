import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape2ReservationComponent } from './etape2-reservation.component';

describe('Etape2ReservationComponent', () => {
  let component: Etape2ReservationComponent;
  let fixture: ComponentFixture<Etape2ReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Etape2ReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Etape2ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
