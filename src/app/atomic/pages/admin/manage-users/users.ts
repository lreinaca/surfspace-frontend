import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrls: ['./users.scss']
})
export class UsersComponent {
  search: string = '';

  users = [
    { nombre: 'Sofía Rodríguez', email: 'sofia.rodriguez@example.com', rol: 'Administrador', estado: 'Activo' },
    { nombre: 'Carlos Pérez', email: 'carlos.perez@example.com', rol: 'Miembro', estado: 'Activo' },
    { nombre: 'Ana García', email: 'ana.garcia@example.com', rol: 'Visitante', estado: 'Inactivo' },
    { nombre: 'Javier López', email: 'javier.lopez@example.com', rol: 'Miembro', estado: 'Activo' },
    { nombre: 'María Martínez', email: 'maria.martinez@example.com', rol: 'Visitante', estado: 'Activo' },
    { nombre: 'Pedro Sánchez', email: 'pedro.sanchez@example.com', rol: 'Miembro', estado: 'Inactivo' },
    { nombre: 'Laura Gómez', email: 'laura.gomez@example.com', rol: 'Administrador', estado: 'Activo' },
    { nombre: 'Diego Fernández', email: 'diego.fernandez@example.com', rol: 'Visitante', estado: 'Activo' },
    { nombre: 'Elena Ruiz', email: 'elena.ruiz@example.com', rol: 'Miembro', estado: 'Activo' },
    { nombre: 'Pablo Torres', email: 'pablo.torres@example.com', rol: 'Visitante', estado: 'Inactivo' }
  ];

  filteredUsers = [...this.users];

  filterUsers() {
    const text = this.search.toLowerCase();

    this.filteredUsers = this.users.filter(u =>
      u.nombre.toLowerCase().includes(text) ||
      u.email.toLowerCase().includes(text)
    );
  }

  toggleFilter(filter: string) {
    console.log('Filtro presionado:', filter);
  }
}
