import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesHeaderComponent } from './references-header.component';

describe('ReferencesHeaderComponent', () => {
  let component: ReferencesHeaderComponent;
  let fixture: ComponentFixture<ReferencesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
