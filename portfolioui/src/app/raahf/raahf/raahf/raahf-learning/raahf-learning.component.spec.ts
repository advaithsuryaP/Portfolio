import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaahfLearningComponent } from './raahf-learning.component';

describe('RaahfLearningComponent', () => {
  let component: RaahfLearningComponent;
  let fixture: ComponentFixture<RaahfLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaahfLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaahfLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
