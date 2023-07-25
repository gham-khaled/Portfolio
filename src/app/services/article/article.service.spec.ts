import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';

describe('Article.Service', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
