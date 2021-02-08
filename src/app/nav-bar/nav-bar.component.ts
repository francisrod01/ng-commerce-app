import { Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
