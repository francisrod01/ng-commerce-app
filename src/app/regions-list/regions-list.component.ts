import { Component, OnInit } from '@angular/core';

import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-regions-list',
    templateUrl: './regions-list.component.html',
    styleUrls: ['./regions-list.component.less'],
    standalone: false
})
export class RegionsListComponent implements OnInit {
  faEllipsisH = faEllipsisH;

  constructor() { }

  ngOnInit(): void {
  }

}
