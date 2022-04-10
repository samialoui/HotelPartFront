import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape3ReservationComponent } from './etape3-reservation.component';

describe('Etape3ReservationComponent', () => {
  let component: Etape3ReservationComponent;
  let fixture: ComponentFixture<Etape3ReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Etape3ReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Etape3ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
