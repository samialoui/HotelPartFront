import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YasminhaComponent } from './yasminha.component';

describe('YasminhaComponent', () => {
  let component: YasminhaComponent;
  let fixture: ComponentFixture<YasminhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YasminhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YasminhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
