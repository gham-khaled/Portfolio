import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../projects/project.model';

@Component({
  standalone: false,
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  @Input() index: number;

  currentImageIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  get currentImage(): string {
    return this.project?.images?.[this.currentImageIndex] || '';
  }

  get hasMultipleImages(): boolean {
    return this.project?.images?.length > 1;
  }

  nextImage(): void {
    if (this.project?.images?.length) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
    }
  }

  prevImage(): void {
    if (this.project?.images?.length) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
    }
  }
}
