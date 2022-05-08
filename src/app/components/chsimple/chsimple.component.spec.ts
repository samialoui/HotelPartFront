import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChsimpleComponent } from './chsimple.component';

describe('ChsimpleComponent', () => {
  let component: ChsimpleComponent;
  let fixture: ComponentFixture<ChsimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChsimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
