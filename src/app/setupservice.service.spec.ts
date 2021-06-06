import { TestBed } from '@angular/core/testing';

import { SetupserviceService } from './setupservice.service';

describe('SetupserviceService', () => {
  let service: SetupserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
