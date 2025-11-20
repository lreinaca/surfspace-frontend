import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interface para tipar un usuario
interface User {
  id: number;
  name: string;
  email: string;
  role: 'Administrador' | 'Miembro' | 'Visitante';
  status: 'Activo' | 'Inactivo';
}

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
  standalone: false
})
export class UsersComponent implements OnInit {
  
  // URLs de imágenes
  logoUrl = 'https://res.cloudinary.com/djn8thk2s/image/upload/v1763361948/Logo-SurfingSpace-coworking_1_n4jb0d_c_crop_w_300_h_300_n26546.png';
  profileUrl = 'https://res.cloudinary.com/djn8thk2s/image/upload/v1748134747/e46ee9dd-8a52-4f83-92a1-566dbd6ce14c_fpyk9t.jpg';

  // Término de búsqueda
  searchTerm = '';

  // Filtros seleccionados
  selectedRole = '';
  selectedStatus = '';

  // Lista completa de usuarios (vendría del backend)
  allUsers: User[] = [
    {
      id: 1,
      name: 'Sofía Rodríguez',
      email: 'sofia.rodriguez@example.com',
      role: 'Administrador',
      status: 'Activo'
    },
    {
      id: 2,
      name: 'Carlos Pérez',
      email: 'carlos.perez@example.com',
      role: 'Miembro',
      status: 'Activo'
    },
    {
      id: 3,
      name: 'Ana García',
      email: 'ana.garcia@example.com',
      role: 'Visitante',
      status: 'Inactivo'
    },
    {
      id: 4,
      name: 'Javier López',
      email: 'javier.lopez@example.com',
      role: 'Miembro',
      status: 'Activo'
    },
    {
      id: 5,
      name: 'María Martínez',
      email: 'maria.martinez@example.com',
      role: 'Visitante',
      status: 'Activo'
    },
    {
      id: 6,
      name: 'Pedro Sánchez',
      email: 'pedro.sanchez@example.com',
      role: 'Miembro',
      status: 'Inactivo'
    },
    {
      id: 7,
      name: 'Laura Gómez',
      email: 'laura.gomez@example.com',
      role: 'Administrador',
      status: 'Activo'
    },
    {
      id: 8,
      name: 'Diego Fernández',
      email: 'diego.fernandez@example.com',
      role: 'Visitante',
      status: 'Activo'
    },
    {
      id: 9,
      name: 'Elena Ruiz',
      email: 'elena.ruiz@example.com',
      role: 'Miembro',
      status: 'Activo'
    },
    {
      id: 10,
      name: 'Pablo Torres',
      email: 'pablo.torres@example.com',
      role: 'Visitante',
      status: 'Inactivo'
    }
  ];

  // Lista filtrada de usuarios (se actualiza con búsqueda y filtros)
  filteredUsers: User[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Inicializar con todos los usuarios
    this.filteredUsers = [...this.allUsers];
  }

  /**
   * Filtra los usuarios según el término de búsqueda
   */
  onSearch(): void {
    this.applyFilters();
  }

  /**
   * Aplica todos los filtros activos (búsqueda, rol, estado)
   */
  applyFilters(): void {
    this.filteredUsers = this.allUsers.filter(user => {
      // Filtro de búsqueda (por nombre o email)
      const matchesSearch = !this.searchTerm || 
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase());

      // Filtro de rol
      const matchesRole = !this.selectedRole || 
        user.role === this.selectedRole;

      // Filtro de estado
      const matchesStatus = !this.selectedStatus || 
        user.status === this.selectedStatus;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  /**
   * Actualiza el filtro de rol
   */
  filterByRole(role: string): void {
    this.selectedRole = role;
    this.applyFilters();
  }

  /**
   * Actualiza el filtro de estado
   */
  filterByStatus(status: string): void {
    this.selectedStatus = status;
    this.applyFilters();
  }

  /**
   * Navega de vuelta al panel/dashboard
   */
  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  /**
   * Obtiene la clase CSS según el rol
   */
  getRoleClass(role: string): string {
    switch(role) {
      case 'Administrador':
        return 'role-admin';
      case 'Miembro':
        return 'role-member';
      case 'Visitante':
        return 'role-visitor';
      default:
        return '';
    }
  }

  /**
   * Obtiene la clase CSS según el estado
   */
  getStatusClass(status: string): string {
    return status === 'Activo' ? 'status-active' : 'status-inactive';
  }
}