import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaahfSecurityComponent } from './raahf-security.component';

describe('RaahfSecurityComponent', () => {
  let component: RaahfSecurityComponent;
  let fixture: ComponentFixture<RaahfSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaahfSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaahfSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
