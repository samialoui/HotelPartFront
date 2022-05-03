import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOffresComponent } from './show-offres.component';

describe('ShowOffresComponent', () => {
  let component: ShowOffresComponent;
  let fixture: ComponentFixture<ShowOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
