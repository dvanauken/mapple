import { TestBed } from '@angular/core/testing';

import { MappleUiService } from './mapple-ui.service';

describe('MappleUiService', () => {
  let service: MappleUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MappleUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
