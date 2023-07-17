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
    "Bash"

  ];
  frontEndSkills = [
    "Angular",
    "Express JS",
    "Flask",
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
    "Open API",
    "Docker"

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
