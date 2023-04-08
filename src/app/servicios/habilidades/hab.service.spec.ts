import { TestBed } from '@angular/core/testing';

import { HabService } from './hab.service';

describe('HabService', () => {
  let service: HabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
