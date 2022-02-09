import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieptHistoryComponent } from './reciept-history.component';

describe('RecieptHistoryComponent', () => {
  let component: RecieptHistoryComponent;
  let fixture: ComponentFixture<RecieptHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecieptHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieptHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
