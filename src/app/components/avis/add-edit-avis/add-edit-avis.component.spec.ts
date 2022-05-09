import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAvisComponent } from './add-edit-avis.component';

describe('AddEditAvisComponent', () => {
  let component: AddEditAvisComponent;
  let fixture: ComponentFixture<AddEditAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
