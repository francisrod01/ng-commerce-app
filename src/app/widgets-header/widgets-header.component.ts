import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faCommentDots, faShoppingCart, faStore, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-widgets-header',
    templateUrl: './widgets-header.component.html',
    styleUrls: ['./widgets-header.component.less'],
    standalone: true,
    imports: [CommonModule, FontAwesomeModule]
})
export class WidgetsHeaderComponent {
  faUser = faUser;
  faCommentDots = faCommentDots;
  faStore = faStore;
  faShoppingCart = faShoppingCart;

}
