import { Component } from '@angular/core';

interface Space {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-welcome-page',
  standalone: false,
  templateUrl: './welcome-page.html',
  styleUrls: ['./welcome-page.scss']
})
export class WelcomePageComponent {
  meetingRooms: Space[] = [
    {
      id: 1,
      title: 'Sala de Reuniones #1',
      description: 'Capacidad: 10 personas | Recursos: Proyector, Pizarra, Wi-Fi',
      image: 'https://res.cloudinary.com/djn8thk2s/image/upload/v1763350040/466a9fd1e3cf4513cec95fba5f90bb55_khesxy.jpg'
    },
    {
      id: 2,
      title: 'Sala de Reuniones #2',
      description: 'Capacidad: 6 personas | Recursos: Pantalla, Altavoces, Wi-Fi',
      image: 'https://res.cloudinary.com/djn8thk2s/image/upload/v1763350192/e4ee7e98af41ccef47f50d335cb77a07_hkgnip.jpg'
    }
  ];

  sharedWorkspaces: Space[] = [
    {
      id: 1,
      title: 'Espacio de trabajo compartido #1',
      description: 'Capacidad: 20 personas | Recursos: Escritorios ajustables, Sillas ergonómicas, Wi-Fi',
      image: 'https://res.cloudinary.com/djn8thk2s/image/upload/v1763350451/72f47703f29cd7fb899016a7c1055b94_kjyewv.jpg'
    },
    {
      id: 2,
      title: 'Espacio de trabajo compartido #2',
      description: 'Capacidad: 10 personas | Recursos: Cabinas insonorizadas, Iluminación regulable, Wi-Fi',
      image: 'https://res.cloudinary.com/djn8thk2s/image/upload/v1763350499/7d2bd478715ee43b80de07d6c847da13_qrmutv.jpg'
    }
  ];
}
