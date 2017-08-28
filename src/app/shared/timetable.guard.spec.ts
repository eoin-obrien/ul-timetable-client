import { TestBed, async, inject } from '@angular/core/testing';

import { TimetableGuard } from './timetable.guard';

describe('TimetableGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimetableGuard]
    });
  });

  it('should ...', inject([TimetableGuard], (guard: TimetableGuard) => {
    expect(guard).toBeTruthy();
  }));
});
