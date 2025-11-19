import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.html',
  styleUrls: ['./new-reservation.scss'],
  standalone: false
})
export class NewReservationComponent implements OnInit {
  reservation = {
    spaceName: '',
    spaceType: '',
    capacity: '',
    date: '',
    startTime: '',
    endTime: '',
    guests: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Aquí cargar datos del espacio seleccionado desde un servicio o parámetros de ruta
    // Por ejemplo, si viene de la página de welcome con un espacio pre-seleccionado
  }

  confirmReservation(): void {
    console.log('Confirmando reserva...', this.reservation);
    this.goMyBooking();
    // Implementar lógica para crear la reserva
    // Validar campos requeridos
    // Enviar al backend
    // Redirigir al dashboard o página de confirmación
  }

  goMyBooking(): void {
    this.router.navigate(['/my-booking']);
  }
}