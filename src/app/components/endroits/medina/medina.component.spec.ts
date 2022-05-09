import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedinaComponent } from './medina.component';

describe('MedinaComponent', () => {
  let component: MedinaComponent;
  let fixture: ComponentFixture<MedinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
