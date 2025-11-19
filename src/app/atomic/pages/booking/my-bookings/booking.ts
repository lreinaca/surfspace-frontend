import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas',
  standalone: false,
  templateUrl: './booking.html',
  styleUrls: ['./booking.scss']
})
export class BookingComponent {
  reservas = [
    {
      recurso: 'Espacio de trabajo compartido #1',
      fecha: '15 de julio de 2024',
      hora: '9:00 AM - 5:00 PM',
      estado: 'Confirmado'
    },
    {
      recurso: 'Espacio de trabajo compartido #2',
      fecha: '16 de julio de 2024',
      hora: '2:00 PM - 4:00 PM',
      estado: 'Pendiente'
    },
    {
      recurso: 'Sala de reuniones #2',
      fecha: '17 de julio de 2024',
      hora: '10:00 AM - 12:00 PM',
      estado: 'Pendiente'
    }
  ];

  name: string = 'Sofía';
  
  constructor(private router: Router) { }

  goDetailsBooking(): void {
    this.router.navigate(['/details-booking']);
  }

}
