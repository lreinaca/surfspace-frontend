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
  selector: 'app-catalog-page',
  standalone: true,
  imports: [CommonModule, AtomicModule],
  templateUrl: './catalog-page.html',
  styleUrls: ['./catalog-page.scss']
})
export class CatalogPage {
  meetingRooms: Space[] = [
    { id: 1, title: 'Sala de Reuniones #1', description: 'Capacidad: 10 personas | Proyector, Pizarra, Wi‑Fi', image: '/assets/resto-de-pantalla.svg' },
    { id: 2, title: 'Sala de Reuniones #2', description: 'Capacidad: 6 personas | Pantalla, Altavoces, Wi‑Fi', image: '/assets/resto-de-pantalla.svg' }
  ];

  sharedWorkspaces: Space[] = [
    { id: 1, title: 'Espacio Compartido #1', description: 'Capacidad: 20 personas | Escritorios ajustables, Sillas', image: '/assets/resto-de-pantalla.svg' },
    { id: 2, title: 'Espacio Compartido #2', description: 'Capacidad: 10 personas | Cabinas insonorizadas, Iluminación', image: '/assets/resto-de-pantalla.svg' }
  ];
}
