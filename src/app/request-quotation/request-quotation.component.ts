import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerQuoteComponent } from '../banner-quote/banner-quote.component';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
    selector: 'app-request-quotation',
    templateUrl: './request-quotation.component.html',
    styleUrls: ['./request-quotation.component.less'],
    standalone: true,
    imports: [CommonModule, BannerQuoteComponent, QuoteFormComponent]
})
export class RequestQuotationComponent {

}
