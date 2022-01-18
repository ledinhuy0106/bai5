import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SutudentComponent } from './sutudent.component';

describe('SutudentComponent', () => {
  let component: SutudentComponent;
  let fixture: ComponentFixture<SutudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SutudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SutudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
