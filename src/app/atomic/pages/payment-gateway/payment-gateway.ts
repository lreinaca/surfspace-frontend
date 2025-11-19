import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Interface para tipar los datos de la reserva
interface ReservationSummary {
  date: string;
  time: string;
  guestsCount: number;
  resource: string;
  duration: string;
  price: number;
}

// Interface para los datos de pago
interface PaymentData {
  cardholderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.html',
  styleUrls: ['./payment-gateway.scss'],
  standalone: false
})
export class PaymentGatewayComponent implements OnInit {
  
  // URLs de imágenes
  logoUrl = 'https://res.cloudinary.com/djn8thk2s/image/upload/v1763361948/Logo-SurfingSpace-coworking_1_n4jb0d_c_crop_w_300_h_300_n26546.png';
  profileUrl = 'https://res.cloudinary.com/djn8thk2s/image/upload/v1748134747/e46ee9dd-8a52-4f83-92a1-566dbd6ce14c_fpyk9t.jpg';

  // Datos del resumen de la reserva (vendrían del backend o queryParams)
  reservation: ReservationSummary = {
    date: '17 de julio de 2024',
    time: '10:00 AM - 12:00 PM',
    guestsCount: 4,
    resource: 'Sala de Reuniones #2',
    duration: '2 horas',
    price: 110000
  };

  // Datos del formulario de pago
  paymentData: PaymentData = {
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Cargar datos desde queryParams si existen
    this.route.queryParams.subscribe(params => {
      if (params['amount']) {
        this.reservation.price = Number(params['amount']);
      }
      // Aquí puedes cargar más datos si vienen en los parámetros
    });
  }

  /**
   * Formatea el precio en formato colombiano (COP)
   */
  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  }

  /**
   * Procesa el pago con tarjeta de crédito/débito
   */
  processPayment(): void {
    // Validar campos requeridos
    if (!this.validatePaymentData()) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    console.log('Procesando pago...', {
      reservation: this.reservation,
      payment: this.paymentData
    });

    // Aquí iría la integración con pasarela de pago (Stripe, PayU, etc.)
    // Simular procesamiento
    alert('Procesando pago...');
    
    // Redirigir a confirmación o dashboard después del pago
    // this.router.navigate(['/reservation-confirmation']);
  }

  /**
   * Procesa el pago mediante PSE
   */
  payWithPSE(): void {
    console.log('Redirigiendo a PSE...', this.reservation);
    // Aquí iría la integración con PSE
    alert('Redirigiendo a PSE...');
  }

  /**
   * Cancela el proceso de pago y regresa
   */
  cancelPayment(): void {
    const confirmCancel = confirm('¿Estás seguro de que deseas cancelar el pago?');
    if (confirmCancel) {
      // Regresar a la página de detalles de la reserva
      this.router.navigate(['/details-booking']);
    }
  }

  /**
   * Valida que los datos de pago estén completos
   */
  private validatePaymentData(): boolean {
    return !!(
      this.paymentData.cardholderName &&
      this.paymentData.cardNumber &&
      this.paymentData.expirationDate &&
      this.paymentData.cvv
    );
  }
}
