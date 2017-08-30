import { TestBed, async, inject } from '@angular/core/testing';

import { TimetableResolver } from './timetable-resolver.service';

describe('TimetableResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimetableResolver]
    });
  });

  it('should ...', inject([TimetableResolver], (guard: TimetableResolver) => {
    expect(guard).toBeTruthy();
  }));
});
