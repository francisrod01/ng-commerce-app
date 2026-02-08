import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faCcMastercard, faCcPaypal, faCcVisa,
  faFacebook, faInstagram, faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.less'],
    standalone: true,
    imports: [CommonModule, FontAwesomeModule]
})
export class FooterComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;

  faCcVisa = faCcVisa;
  faCcPaypal = faCcPaypal;
  faCcMastercard = faCcMastercard;

}
