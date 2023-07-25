import { Component, OnInit } from '@angular/core';
import { Certification } from './certification.model';
import { awsArchitect } from './certification/aws_architect';
import { awsDeveloper } from './certification/aws_developer';
import { istqb } from './certification/istqb';
import { terraform } from './certification/terraform';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [
    terraform,
    istqb,
    awsArchitect,
    awsDeveloper,
  ];

  constructor() {}

  ngOnInit(): void {}
}
