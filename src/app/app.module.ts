import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchFormComponent } from './search-form/search-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { DownloadDemoComponent } from './download-demo/download-demo.component';
import { FooterComponent } from './footer/footer.component';
import { WidgetsHeaderComponent } from './widgets-header/widgets-header.component';
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';
import { PopularCategoryComponent } from './popular-category/popular-category.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { HomeCategoryBannerComponent } from './home-category-banner/home-category-banner.component';
import { HomeCategoryListComponent } from './home-category-list/home-category-list.component';
import { RequestQuotationComponent } from './request-quotation/request-quotation.component';
import { BannerQuoteComponent } from './banner-quote/banner-quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { RecommendedItemsComponent } from './recommended-items/recommended-items.component';
import { TradeServicesComponent } from './trade-services/trade-services.component';
import { RegionsListComponent } from './regions-list/regions-list.component';
import { LargeBannerComponent } from './large-banner/large-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    NavBarComponent,
    MenuCategoryComponent,
    ProductsListComponent,
    DownloadDemoComponent,
    FooterComponent,
    WidgetsHeaderComponent,
    CarouselSliderComponent,
    PopularCategoryComponent,
    HomeCategoryComponent,
    HomeCategoryBannerComponent,
    HomeCategoryListComponent,
    RequestQuotationComponent,
    BannerQuoteComponent,
    QuoteFormComponent,
    RecommendedItemsComponent,
    TradeServicesComponent,
    RegionsListComponent,
    LargeBannerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
