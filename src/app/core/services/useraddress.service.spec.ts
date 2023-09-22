import { TestBed } from '@angular/core/testing';

import { UseraddressService } from './useraddress.service';

describe('UseraddressService', () => {
  let service: UseraddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseraddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
