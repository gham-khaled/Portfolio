import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articlesSubject = new BehaviorSubject<any[]>([]); // replace any[] with your articles type
  articles$: Observable<any[]> = this.articlesSubject.asObservable();

  setArticles(articles: any[]): void {
    this.articlesSubject.next(articles);
  }

  getArticle(index: number): any {
    // replace any with your article type
    const articles = this.articlesSubject.value;
    return articles[index];
  }
}
