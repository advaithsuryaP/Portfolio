import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaahfSidebarComponent } from './raahf-sidebar.component';

describe('RaahfSidebarComponent', () => {
  let component: RaahfSidebarComponent;
  let fixture: ComponentFixture<RaahfSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaahfSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaahfSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
