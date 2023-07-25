import { Component, Input, OnInit } from '@angular/core';

type Skill = {
  name: string;
  image: string;
};

@Component({
  selector: 'app-skill-pill',
  templateUrl: './skill-pill.component.html',
  styleUrls: ['./skill-pill.component.scss'],
})
export class SkillPillComponent implements OnInit {
  @Input() skill: Skill;
  constructor() {}

  ngOnInit(): void {}
}
