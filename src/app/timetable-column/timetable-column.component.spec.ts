import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableColumnComponent } from './timetable-column.component';

describe('TimetableColumnComponent', () => {
  let component: TimetableColumnComponent;
  let fixture: ComponentFixture<TimetableColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
