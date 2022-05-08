import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChtrippleComponent } from './chtripple.component';

describe('ChtrippleComponent', () => {
  let component: ChtrippleComponent;
  let fixture: ComponentFixture<ChtrippleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChtrippleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChtrippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
