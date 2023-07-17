import {Component, OnInit} from '@angular/core';
import {Project} from "../projects/project.model";

import {awsDeveloper} from "./certification/aws_developer";
import {Certification} from "./certification.model";
import {awsArchitect} from "./certification/aws_architect";
import {terraform} from "./certification/terraform";
import {istqb} from "./certification/istqb";

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [terraform, istqb, awsArchitect, awsDeveloper];

  constructor() {
  }

  ngOnInit(): void {
  }

}
