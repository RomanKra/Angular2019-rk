import { TestBed } from '@angular/core/testing';

import { ComponentUpdateService } from './component-update.service';

describe('ComponentUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentUpdateService = TestBed.get(ComponentUpdateService);
    expect(service).toBeTruthy();
  });
});
