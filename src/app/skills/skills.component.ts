import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() {
  }

  backEndSkills = [
    "Node JS",
    "Python",
    "Java",
    "Express JS",
    "Symfony",
    "Docker"
  ];
  frontEndSkills = [
    "Angular",
    "React",
    "Bootstrap"
  ];
  dataBaseSkills = [
    "MongoDB",
    "DynamoDB",
    "MySQL"
  ];
  infrastructureSkills = [
    "Terraform",
    "AWS SAM",
    "Cloudformation",
    "Open API"
  ];
  cloudComputingSkills = [
    "AWS Lambda",
    "Fargate",
    "Step Function",
    "Cognito"
  ];
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
