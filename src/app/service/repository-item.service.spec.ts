import { TestBed, inject } from '@angular/core/testing';

import { RepositoryItemService } from './repository-item.service';

describe('RepositoryItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoryItemService]
    });
  });

  it('should be created', inject([RepositoryItemService], (service: RepositoryItemService) => {
    expect(service).toBeTruthy();
  }));
});
