import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

type Skill = {
  name: string;
  image: string;
};

type Category = {
  name: string;
  icon: string;
  skills: Skill[];
};

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent implements OnInit {
  @Input() category: Category;
  constructor() {}

  ngOnInit(): void {}
}
