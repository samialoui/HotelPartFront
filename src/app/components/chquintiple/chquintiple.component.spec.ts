import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChquintipleComponent } from './chquintiple.component';

describe('ChquintipleComponent', () => {
  let component: ChquintipleComponent;
  let fixture: ComponentFixture<ChquintipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChquintipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChquintipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
