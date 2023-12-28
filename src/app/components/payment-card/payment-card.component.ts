import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css']
})

export class PaymentCardComponent {

  @Input() fullwidth : boolean = false
}
