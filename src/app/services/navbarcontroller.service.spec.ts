import { TestBed, inject } from '@angular/core/testing';

import { NavbarcontrollerService } from './navbarcontroller.service';

describe('NavbarcontrollerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarcontrollerService]
    });
  });

  it('should be created', inject([NavbarcontrollerService], (service: NavbarcontrollerService) => {
    expect(service).toBeTruthy();
  }));
});
