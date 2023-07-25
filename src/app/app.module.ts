import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';
import { CertificationCardComponent } from './components/certification-card/certification-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { SkillPillComponent } from './components/skill-pill/skill-pill.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesoverviewComponent } from './pages/articlesoverview/articlesoverview.component';
import { BlogComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificationsComponent,
    FooterComponent,
    SkillCardComponent,
    CertificationCardComponent,
    ProjectCardComponent,
    SkillPillComponent,
    ArticlesComponent,
    ArticleComponent,
    BlogArticleComponent,
    BlogComponent,
    HomeComponent,
    ArticlesoverviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    GalleryModule,
    LightboxModule,
    NgxPageScrollModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
