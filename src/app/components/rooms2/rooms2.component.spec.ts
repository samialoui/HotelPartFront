import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rooms2Component } from './rooms2.component';

describe('Rooms2Component', () => {
  let component: Rooms2Component;
  let fixture: ComponentFixture<Rooms2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rooms2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rooms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
