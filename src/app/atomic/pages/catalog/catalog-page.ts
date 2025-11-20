import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomicModule } from '../../atomic-module';

interface Space {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface User {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.html',
  styleUrls: ['./catalog-page.scss']
})
export class CatalogPage implements OnInit {
  userName: string = 'Usuario';
  meetingRooms: Space[] = [
    { id: 1, title: 'Sala de Reuniones #1', description: 'Capacidad: 10 personas | Proyector, Pizarra, Wi‑Fi', image: 'https://res.cloudinary.com/djn8thk2s/image/upload/v1763350008/5a3a278365580d6e79157071fba0ef01_ycmmj3.jpg' },
    { id: 2, title: 'Sala de Reuniones #2', description: 'Capacidad: 6 personas | Pantalla, Altavoces, Wi‑Fi', image: 'https://res.cloudinary.com/djn8thk2s/image/upload/v1763350379/3ff6dcb8b94705faa59303591ce0c1a7_flqavp.jpg' }
  ];

  sharedWorkspaces: Space[] = [
    { id: 1, title: 'Espacio Compartido #1', description: 'Capacidad: 20 personas | Escritorios ajustables, Sillas', image: 'https://res.cloudinary.com/djn8thk2s/image/upload/v1763350437/1c482de0fe082abbd0f78072f377c23e_qdbg2e.jpg' },
    { id: 2, title: 'Espacio Compartido #2', description: 'Capacidad: 10 personas | Cabinas insonorizadas, Iluminación', image: 'https://res.cloudinary.com/djn8thk2s/image/upload/v1763350522/bf09996f45a0e195fdf13fb7ac81a386_ldfzo9.jpg' }
  ];

  ngOnInit() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      try {
        const user: User = JSON.parse(userJson);
        this.userName = user.nombre;
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
  }
}
