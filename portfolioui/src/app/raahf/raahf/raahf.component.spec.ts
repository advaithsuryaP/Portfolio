import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaahfComponent } from './raahf.component';

describe('RaahfComponent', () => {
  let component: RaahfComponent;
  let fixture: ComponentFixture<RaahfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaahfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaahfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
