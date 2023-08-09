import { TestBed } from '@angular/core/testing';

import { HabitacionesServiceService } from './habitaciones-service.service';

describe('HabitacionesServiceService', () => {
  let service: HabitacionesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitacionesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
