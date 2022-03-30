import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedBasketComponent } from './submitted-basket.component';

describe('SubmittedBasketComponent', () => {
  let component: SubmittedBasketComponent;
  let fixture: ComponentFixture<SubmittedBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittedBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
