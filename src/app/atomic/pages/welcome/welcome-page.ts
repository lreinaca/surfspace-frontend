import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomicModule } from '../../atomic-module';

interface Space {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [CommonModule, AtomicModule],
  templateUrl: './welcome-page.html',
  styleUrls: ['./welcome-page.scss']
})
export class WelcomePage {
  meetingRooms: Space[] = [
    {
      id: 1,
      title: 'Sala de Reuniones #1',
      description: 'Capacidad: 10 personas | Recursos: Proyector, Pizarra, Wi-Fi',
      image: '/assets/resto-de-pantalla.svg'
    },
    {
      id: 2,
      title: 'Sala de Reuniones #2',
      description: 'Capacidad: 6 personas | Recursos: Pantalla, Altavoces, Wi-Fi',
      image: '/assets/resto-de-pantalla.svg'
    }
  ];

  sharedWorkspaces: Space[] = [
    {
      id: 1,
      title: 'Espacio de trabajo compartido #1',
      description:
        'Capacidad: 20 personas | Recursos: Escritorios ajustables, Sillas ergonómicas, Wi-Fi',
      image: '/assets/resto-de-pantalla.svg'
    },
    {
      id: 2,
      title: 'Espacio de trabajo compartido #2',
      description:
        'Capacidad: 10 personas | Recursos: Cabinas insonorizadas, Iluminación regulable, Wi-Fi',
      image: '/assets/resto-de-pantalla.svg'
    }
  ];
}
