import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSliderComponent } from './carousel-slider.component';

describe('CarouselSliderComponent', () => {
  let component: CarouselSliderComponent;
  let fixture: ComponentFixture<CarouselSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
