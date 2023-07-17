import {Component, OnInit} from '@angular/core';
import {Gallery,  GalleryItem, GalleryRef, ImageItem} from 'ng-gallery';
import {kawer} from './project/kawer';
import {gps} from './project/gps';
import {Project} from "./project.model";
import {eullo} from "./project/eullo";
import {serveron} from "./project/serveron";
import {cloudCryptonic} from "./project/cloud-cryptonic";
import {wayFinder} from "./project/wayfinder";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  items: GalleryItem[] = [];

  projects: Project[] = [ kawer, cloudCryptonic, serveron, eullo, wayFinder, gps];

  constructor(private gallery: Gallery) {
  }

  ngOnInit(): void {
    this.projects.map(project => {
      const imageItems  = project.images.map(image => new ImageItem({src: image}));
      // @ts-ignore
      this.items.push(imageItems);
    });
    // console.log(this.items);


  }
}

