import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaahfHomeComponent } from './raahf-home.component';

describe('RaahfHomeComponent', () => {
  let component: RaahfHomeComponent;
  let fixture: ComponentFixture<RaahfHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaahfHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaahfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
