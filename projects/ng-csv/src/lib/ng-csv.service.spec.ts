import { TestBed } from '@angular/core/testing';

import { NgCsvService } from './ng-csv.service';

describe('NgCsvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCsvService = TestBed.get(NgCsvService);
    expect(service).toBeTruthy();
  });
});
