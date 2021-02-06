import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchFormComponent } from './search-form/search-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    NavBarComponent,
    MenuCategoryComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
