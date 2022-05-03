import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOffComponent } from './add-edit-off.component';

describe('AddEditOffComponent', () => {
  let component: AddEditOffComponent;
  let fixture: ComponentFixture<AddEditOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
