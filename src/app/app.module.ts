import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentationComponent } from './presentation/presentation.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {GalleryModule} from 'ng-gallery';
import {LightboxModule} from 'ng-gallery/lightbox';
import { CertificationsComponent } from './certifications/certifications.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificationsComponent
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
      NgxPageScrollModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
