import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoryBannerComponent } from './home-category-banner.component';

describe('HomeCategoryBannerComponent', () => {
  let component: HomeCategoryBannerComponent;
  let fixture: ComponentFixture<HomeCategoryBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCategoryBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCategoryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
