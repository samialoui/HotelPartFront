import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChambComponent } from './detail-chamb.component';

describe('DetailChambComponent', () => {
  let component: DetailChambComponent;
  let fixture: ComponentFixture<DetailChambComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChambComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChambComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
