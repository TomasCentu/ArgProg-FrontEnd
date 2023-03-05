import { TestBed } from '@angular/core/testing';

import { EstService } from './est.service';

describe('EstService', () => {
  let service: EstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
