import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { cloudCryptonic } from './project/cloud-cryptonic';
import { eullo } from './project/eullo';
import { gps } from './project/gps';
import { kawer } from './project/kawer';
import { serveron } from './project/serveron';
import { wayFinder } from './project/wayfinder';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    kawer,
    cloudCryptonic,
    serveron,
    eullo,
    wayFinder,
    gps,
  ];
  items: GalleryItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.projects.map((project) => {
      const imageItems = project.images.map(
        (image) => new ImageItem({ src: image })
      );
      // @ts-ignore
      this.items.push(imageItems);
    });
  }
}
