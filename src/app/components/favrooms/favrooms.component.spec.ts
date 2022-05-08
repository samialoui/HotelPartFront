import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavroomsComponent } from './favrooms.component';

describe('FavroomsComponent', () => {
  let component: FavroomsComponent;
  let fixture: ComponentFixture<FavroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
