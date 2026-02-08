import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-carousel-slider',
    templateUrl: './carousel-slider.component.html',
    styleUrls: ['./carousel-slider.component.less'],
    standalone: true,
    imports: [CommonModule, NgbModule]
})
export class CarouselSliderComponent {

}
