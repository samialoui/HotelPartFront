import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogeursComponent } from './blogeurs.component';

describe('BlogeursComponent', () => {
  let component: BlogeursComponent;
  let fixture: ComponentFixture<BlogeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogeursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
