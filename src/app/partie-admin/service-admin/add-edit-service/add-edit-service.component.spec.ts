import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditServiceComponent } from './add-edit-service.component';

describe('AddEditServiceComponent', () => {
  let component: AddEditServiceComponent;
  let fixture: ComponentFixture<AddEditServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
