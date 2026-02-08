import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCategoryBannerComponent } from '../home-category-banner/home-category-banner.component';
import { HomeCategoryListComponent } from '../home-category-list/home-category-list.component';

@Component({
    selector: 'app-home-category',
    templateUrl: './home-category.component.html',
    styleUrls: ['./home-category.component.less'],
    standalone: true,
    imports: [CommonModule, HomeCategoryBannerComponent, HomeCategoryListComponent]
})
export class HomeCategoryComponent {

}
