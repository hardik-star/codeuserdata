import { TestBed } from '@angular/core/testing';

import { FatchuserdataService } from './fatchuserdata.service';

describe('FatchuserdataService', () => {
  let service: FatchuserdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FatchuserdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
