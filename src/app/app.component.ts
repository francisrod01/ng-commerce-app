import { Component } from '@angular/core';
import { SearchFormComponent } from './search-form/search-form.component';
import { WidgetsHeaderComponent } from './widgets-header/widgets-header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';
import { PopularCategoryComponent } from './popular-category/popular-category.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { RequestQuotationComponent } from './request-quotation/request-quotation.component';
import { RecommendedItemsComponent } from './recommended-items/recommended-items.component';
import { TradeServicesComponent } from './trade-services/trade-services.component';
import { RegionsListComponent } from './regions-list/regions-list.component';
import { LargeBannerComponent } from './large-banner/large-banner.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    standalone: true,
    imports: [
      SearchFormComponent,
      WidgetsHeaderComponent,
      NavBarComponent,
      MenuCategoryComponent,
      CarouselSliderComponent,
      PopularCategoryComponent,
      ProductsListComponent,
      HomeCategoryComponent,
      RequestQuotationComponent,
      RecommendedItemsComponent,
      TradeServicesComponent,
      RegionsListComponent,
      LargeBannerComponent,
      SubscribeFormComponent,
      FooterComponent,
      FontAwesomeModule,
      NgbModule
    ]
})
export class AppComponent {
  title = 'ng-commerce-app';
}
