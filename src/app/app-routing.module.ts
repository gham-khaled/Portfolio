import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ArticlesoverviewComponent } from './pages/articlesoverview/articlesoverview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesoverviewComponent },
  { path: 'blog/:id', component: BlogComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule], // export RouterModule to make router directives available to other modules
})
export class AppRoutingModule {}
