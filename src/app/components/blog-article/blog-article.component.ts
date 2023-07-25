import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss'],
})
export class BlogArticleComponent implements OnInit {
  @Input() article: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.article);
  }
}
