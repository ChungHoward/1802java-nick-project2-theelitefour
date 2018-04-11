import { TestBed, inject } from '@angular/core/testing';

import { ViewUserService } from './view-user.service';

describe('ViewUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewUserService]
    });
  });

  it('should be created', inject([ViewUserService], (service: ViewUserService) => {
    expect(service).toBeTruthy();
  }));
});
