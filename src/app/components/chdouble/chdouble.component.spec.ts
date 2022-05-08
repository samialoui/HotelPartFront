import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChdoubleComponent } from './chdouble.component';

describe('ChdoubleComponent', () => {
  let component: ChdoubleComponent;
  let fixture: ComponentFixture<ChdoubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChdoubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChdoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
