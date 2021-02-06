import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadDemoComponent } from './download-demo.component';

describe('DownloadDemoComponent', () => {
  let component: DownloadDemoComponent;
  let fixture: ComponentFixture<DownloadDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
