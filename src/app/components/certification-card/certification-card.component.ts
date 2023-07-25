import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

interface CertificationData {
  image: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

@Component({
  selector: 'app-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrls: ['./certification-card.component.scss'],
})
export class CertificationCardComponent implements OnInit {
  @Input() certification: CertificationData;

  constructor() {}

  ngOnInit(): void {}
}
