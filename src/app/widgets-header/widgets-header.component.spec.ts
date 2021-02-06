import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsHeaderComponent } from './widgets-header.component';

describe('WidgetsHeaderComponent', () => {
  let component: WidgetsHeaderComponent;
  let fixture: ComponentFixture<WidgetsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
