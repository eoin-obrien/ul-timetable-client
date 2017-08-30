import { TestBed, inject } from '@angular/core/testing';

import { WeekService } from './week.service';

describe('WeekService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeekService]
    });
  });

  it('should be created', inject([WeekService], (service: WeekService) => {
    expect(service).toBeTruthy();
  }));
});
