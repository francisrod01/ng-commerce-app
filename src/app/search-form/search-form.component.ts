import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.less'],
    standalone: true,
    imports: [CommonModule, FontAwesomeModule]
})
export class SearchFormComponent {
  faSearch = faSearch;

}
