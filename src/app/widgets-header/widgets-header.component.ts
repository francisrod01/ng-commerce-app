import { Component, OnInit } from '@angular/core';

import { faCommentDots, faShoppingCart, faStore, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-widgets-header',
  templateUrl: './widgets-header.component.html',
  styleUrls: ['./widgets-header.component.less']
})
export class WidgetsHeaderComponent implements OnInit {
  faUser = faUser;
  faCommentDots = faCommentDots;
  faStore = faStore;
  faShoppingCart = faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
