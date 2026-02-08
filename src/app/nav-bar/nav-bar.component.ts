import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.less'],
    standalone: true,
    imports: [CommonModule, FontAwesomeModule]
})
export class NavBarComponent {
  faBars = faBars;

}
