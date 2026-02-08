import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCategoryComponent } from './popular-category.component';

describe('PopularCategoryComponent', () => {
  let component: PopularCategoryComponent;
  let fixture: ComponentFixture<PopularCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PopularCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
