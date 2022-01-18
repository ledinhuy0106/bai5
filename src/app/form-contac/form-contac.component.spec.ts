import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContacComponent } from './form-contac.component';

describe('FormContacComponent', () => {
  let component: FormContacComponent;
  let fixture: ComponentFixture<FormContacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
