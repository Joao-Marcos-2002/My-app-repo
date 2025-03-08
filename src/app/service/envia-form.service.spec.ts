import { TestBed } from '@angular/core/testing';

import { EnviaFormService } from './envia-form.service';

describe('EnviaFormService', () => {
  let service: EnviaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
