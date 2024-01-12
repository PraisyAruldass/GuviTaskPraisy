import { TestBed } from '@angular/core/testing';

import { SignupauthenticateService } from './signupauthenticate.service';

describe('SignupauthenticateService', () => {
  let service: SignupauthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupauthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
