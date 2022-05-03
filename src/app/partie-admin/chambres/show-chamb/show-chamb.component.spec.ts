import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChambComponent } from './show-chamb.component';

describe('ShowChambComponent', () => {
  let component: ShowChambComponent;
  let fixture: ComponentFixture<ShowChambComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowChambComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowChambComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
