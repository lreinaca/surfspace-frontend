import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtomicModule } from '../../atomic-module';

@Component({
  selector: 'app-new-reservation-page',
  standalone: true,
  imports: [CommonModule, FormsModule, AtomicModule],
  templateUrl: './new-reservation-page.html',
  styleUrls: ['./new-reservation-page.scss']
})
export class NewReservationPage {
  // These would normally come from selected space context or route params
  spaceName = 'Sala de Reuniones #1';
  spaceType = 'Sala de reuniones';
  capacity = 10;

  // form model
  reservation = {
    date: '',
    startTime: '',
    endTime: '',
    guests: ''
  };

  onSubmit(): void {
    // TODO: call reservation service
    console.log('Reserva enviada', { space: this.spaceName, ...this.reservation });
    alert('Reserva registrada (demo)');
  }
}
