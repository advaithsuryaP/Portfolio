import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningEditComponent } from './learning-edit.component';

describe('LearningEditComponent', () => {
  let component: LearningEditComponent;
  let fixture: ComponentFixture<LearningEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
