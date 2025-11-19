import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Interface para tipar los datos de la reserva
interface ReservationDetails {
  date: string;
  time: string;
  guestsCount: number;
  resource: string;
  location: string;
  duration: string;
  price: number;
  status: string;
}

@Component({
  selector: 'app-reservation-details',
  templateUrl: './details-booking.html',
  styleUrls: ['./details-booking.scss'],
  standalone: false
})
export class DetailsBookingComponent implements OnInit {
  // Datos de la reserva (en producción vendrían del backend o del state)
  reservation: ReservationDetails = {
    date: '17 de julio de 2024',
    time: '10:00 AM - 12:00 PM',
    guestsCount: 4,
    resource: 'Sala de Reuniones #2',
    location: 'Salón 305',
    duration: '2 horas',
    price: 110000,
    status: 'Pendiente'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Aquí puedes cargar los detalles de la reserva desde un servicio
    // usando el ID de la ruta si es necesario
    // const reservationId = this.route.snapshot.params['id'];
    // this.loadReservationDetails(reservationId);
  }

  /**
   * Navega de vuelta a la página anterior (dashboard o lista de reservas)
   */
  goBack(): void {
    this.router.navigate(['/my-booking']); // Ajusta la ruta según tu aplicación
  }

  /**
   * Navega a la pantalla de pago para confirmar y pagar la reserva
   */
  confirmAndPay(): void {
    console.log('Confirmando y pagando reserva...', this.reservation);
    // Navegar a la pantalla de payment-gateway
    this.router.navigate(['/payment-gateway'], {
      queryParams: {
        reservationId: 'temp-id', // Aquí iría el ID real de la reserva
        amount: this.reservation.price
      }
    });
  }

  /**
   * Formatea el precio con separadores de miles
   */
  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  }
}