import { TestBed, inject } from '@angular/core/testing';

import { ModuleColorService } from './module-color.service';

describe('ModuleColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuleColorService]
    });
  });

  it('should be created', inject([ModuleColorService], (service: ModuleColorService) => {
    expect(service).toBeTruthy();
  }));
});
