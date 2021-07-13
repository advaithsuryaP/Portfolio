import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaahfHealthComponent } from './raahf-health.component';

describe('RaahfHealthComponent', () => {
  let component: RaahfHealthComponent;
  let fixture: ComponentFixture<RaahfHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaahfHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaahfHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
