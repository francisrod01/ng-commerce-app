import { Component, OnInit } from '@angular/core';

import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.less']
})
export class RegionsListComponent implements OnInit {
  faEllipsisH = faEllipsisH;

  constructor() { }

  ngOnInit(): void {
  }

}
