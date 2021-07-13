import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaahfDashboardComponent } from './raahf-dashboard.component';

describe('RaahfDashboardComponent', () => {
  let component: RaahfDashboardComponent;
  let fixture: ComponentFixture<RaahfDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaahfDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaahfDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
