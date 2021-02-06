import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeBannerComponent } from './large-banner.component';

describe('LargeBannerComponent', () => {
  let component: LargeBannerComponent;
  let fixture: ComponentFixture<LargeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
