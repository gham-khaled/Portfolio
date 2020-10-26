import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  skills = [
    'Python',
    'Java',
    'Docker',
    'DynamoDB',
    'Mysql',
    'Fargate'
  ];
  ngOnInit(): void {
  }

}
