import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FocusMonitor} from "@angular/cdk/a11y";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
