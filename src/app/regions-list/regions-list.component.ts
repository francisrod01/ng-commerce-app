import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-regions-list',
    templateUrl: './regions-list.component.html',
    styleUrls: ['./regions-list.component.less'],
    standalone: true,
    imports: [CommonModule, FontAwesomeModule]
})
export class RegionsListComponent {
  faEllipsisH = faEllipsisH;

}
