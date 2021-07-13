import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaahfGoalsComponent } from './raahf-goals.component';

describe('RaahfGoalsComponent', () => {
  let component: RaahfGoalsComponent;
  let fixture: ComponentFixture<RaahfGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaahfGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaahfGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
