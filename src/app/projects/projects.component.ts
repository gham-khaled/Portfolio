import {Component, OnInit} from '@angular/core';
import {Gallery, GalleryConfig, GalleryRef, ImageItem} from 'ng-gallery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  galleryId = 'mixedExample';
  config: GalleryConfig = {
    thumb: false,
    imageSize: 'cover',
    thumbHeight: 0,
    disableThumb: true

  };
  galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
  constructor(private gallery: Gallery) {
  }

  skills = [
    'Python',
    'Java',
    'Docker'
  ];

  ngOnInit(): void {
    this.galleryRef.setConfig(this.config);

    this.galleryRef.addImage({
      src: 'assets/projects/kawer/web.png',
    });
    this.galleryRef.addImage({
      src: 'assets/projects/kawer/Kawer.png',
    });
  }
}

