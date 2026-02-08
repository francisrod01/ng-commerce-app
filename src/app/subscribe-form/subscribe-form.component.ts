import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-subscribe-form',
    templateUrl: './subscribe-form.component.html',
    styleUrls: ['./subscribe-form.component.less'],
    standalone: true,
    imports: [CommonModule, FontAwesomeModule]
})
export class SubscribeFormComponent {
  faEnvelope = faEnvelope;

}