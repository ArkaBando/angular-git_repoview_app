import { TestBed, inject } from '@angular/core/testing';
import { RepoViewerServiceService } from './repo-viewer-service.service';

describe('RepoViewerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoViewerServiceService]
    });
  });

  it('should be created', inject([RepoViewerServiceService], (service: RepoViewerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
