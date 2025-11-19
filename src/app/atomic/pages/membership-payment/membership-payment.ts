import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership-payment',
  templateUrl: './membership-payment.html',
  styleUrls: ['./membership-payment.scss'],
  standalone: false
})
export class MembershipPaymentComponent implements OnInit {
  paymentData = {
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    paymentMethod: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  payMembership(): void {
    console.log('Procesando pago...', this.paymentData);
    // Implementar lógica de pago
  }

  cancel(): void {
    console.log('Cancelando pago...');
    // Implementar lógica de cancelación
  }
}