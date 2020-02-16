import { TestBed } from '@angular/core/testing';

import { StudentallService } from './studentall.service';

describe('StudentallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentallService = TestBed.get(StudentallService);
    expect(service).toBeTruthy();
  });
});
