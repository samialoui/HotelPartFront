import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarthagelandComponent } from './carthageland.component';

describe('CarthagelandComponent', () => {
  let component: CarthagelandComponent;
  let fixture: ComponentFixture<CarthagelandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarthagelandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarthagelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
