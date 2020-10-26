import {Component, OnInit} from '@angular/core';
import {Gallery, GalleryConfig, GalleryItem, GalleryRef, ImageItem} from 'ng-gallery';
import {kawer} from './project/kawer';
import {gps} from './project/gps';
import {shifted} from './project/shifted';
import {Project} from "./project.model";
import {audit} from "./project/audit";
import {ieg} from "./project/ieg";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  items: GalleryItem[] = [];

  projects: Project[] = [kawer, shifted, gps, audit, ieg];

  constructor(private gallery: Gallery) {
  }

  ngOnInit(): void {
    this.projects.map(project => {
      const imageItems  = project.images.map(image => new ImageItem({src: image}));
      // @ts-ignore
      this.items.push(imageItems);
    });
    console.log(this.items);


  }
}

