import { TestBed } from '@angular/core/testing';

import { NgTemplateService } from './ng-template.service';

describe('NgTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgTemplateService = TestBed.get(NgTemplateService);
    expect(service).toBeTruthy();
  });
});
