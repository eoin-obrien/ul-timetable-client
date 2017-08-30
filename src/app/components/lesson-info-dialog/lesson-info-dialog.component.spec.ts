import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonInfoDialogComponent } from './lesson-info-dialog.component';

describe('LessonInfoDialogComponent', () => {
  let component: LessonInfoDialogComponent;
  let fixture: ComponentFixture<LessonInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
