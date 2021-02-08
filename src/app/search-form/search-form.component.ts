import { Component, OnInit } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.less']
})
export class SearchFormComponent implements OnInit {
  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
