import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { GalleryItem } from 'ng-gallery';
import { Project } from '../projects/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() items: GalleryItem[] = [];
  @Input() project: Project;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
