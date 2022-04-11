import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureFinaleComponent } from './facture-finale.component';

describe('FactureFinaleComponent', () => {
  let component: FactureFinaleComponent;
  let fixture: ComponentFixture<FactureFinaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureFinaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureFinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
