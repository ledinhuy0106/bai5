import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapnhoComponent } from './baitapnho.component';

describe('BaitapnhoComponent', () => {
  let component: BaitapnhoComponent;
  let fixture: ComponentFixture<BaitapnhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaitapnhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapnhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
