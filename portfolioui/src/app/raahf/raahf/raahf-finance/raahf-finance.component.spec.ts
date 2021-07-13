import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaahfFinanceComponent } from './raahf-finance.component';

describe('RaahfFinanceComponent', () => {
  let component: RaahfFinanceComponent;
  let fixture: ComponentFixture<RaahfFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaahfFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaahfFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
