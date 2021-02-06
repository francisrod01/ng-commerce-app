import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeServicesComponent } from './trade-services.component';

describe('TradeServicesComponent', () => {
  let component: TradeServicesComponent;
  let fixture: ComponentFixture<TradeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
