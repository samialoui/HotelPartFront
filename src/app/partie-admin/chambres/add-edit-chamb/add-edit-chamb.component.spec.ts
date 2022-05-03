import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChambComponent } from './add-edit-chamb.component';

describe('AddEditChambComponent', () => {
  let component: AddEditChambComponent;
  let fixture: ComponentFixture<AddEditChambComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditChambComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditChambComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
