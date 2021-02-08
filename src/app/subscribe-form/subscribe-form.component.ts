import { Component, OnInit } from '@angular/core';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.less']
})
export class SubscribeFormComponent implements OnInit {
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
