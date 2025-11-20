import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interface para tipar un espacio
interface Space {
  id: number;
  name: string;
  type: string;
  capacity: number;
  status: 'available' | 'occupied'; // Estados posibles
}

@Component({
  selector: 'app-manage-spaces',
  templateUrl: './manage-spaces.html',
  styleUrls: ['./manage-spaces.scss'],
  standalone: false
})
export class ManageSpacesComponent implements OnInit {
  
  // URLs de imágenes
  logoUrl = 'https://res.cloudinary.com/djn8thk2s/image/upload/v1763361948/Logo-SurfingSpace-coworking_1_n4jb0d_c_crop_w_300_h_300_n26546.png';
  profileUrl = 'https://res.cloudinary.com/djn8thk2s/image/upload/v1748134747/e46ee9dd-8a52-4f83-92a1-566dbd6ce14c_fpyk9t.jpg';

  // Término de búsqueda
  searchTerm = '';

  // Filtros seleccionados
  selectedType = '';
  selectedCapacity = '';
  selectedAvailability = '';

  // Lista completa de espacios (vendría del backend)
  allSpaces: Space[] = [
    {
      id: 1,
      name: 'Sala de Reuniones #1',
      type: 'Sala de Reuniones',
      capacity: 10,
      status: 'available'
    },
    {
      id: 2,
      name: 'Sala de Reuniones #2',
      type: 'Sala de Reuniones',
      capacity: 6,
      status: 'occupied'
    },
    {
      id: 3,
      name: 'Espacio de trabajo compartido #2',
      type: 'Espacio de trabajo compartido',
      capacity: 10,
      status: 'available'
    },
    {
      id: 4,
      name: 'Espacio de trabajo compartido #3',
      type: 'Sala de Reuniones',
      capacity: 30,
      status: 'available'
    },
    {
      id: 5,
      name: 'Espacio de trabajo compartido #5',
      type: 'Espacio de trabajo compartido',
      capacity: 15,
      status: 'available'
    }
  ];

  // Lista filtrada de espacios (se actualiza con búsqueda y filtros)
  filteredSpaces: Space[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Inicializar con todos los espacios
    this.filteredSpaces = [...this.allSpaces];
  }

  /**
   * Filtra los espacios según el término de búsqueda
   */
  onSearch(): void {
    this.applyFilters();
  }

  /**
   * Aplica todos los filtros activos (búsqueda, tipo, capacidad, disponibilidad)
   */
  applyFilters(): void {
    this.filteredSpaces = this.allSpaces.filter(space => {
      // Filtro de búsqueda (por nombre)
      const matchesSearch = !this.searchTerm || 
        space.name.toLowerCase().includes(this.searchTerm.toLowerCase());

      // Filtro de tipo
      const matchesType = !this.selectedType || 
        space.type === this.selectedType;

      // Filtro de capacidad (esto depende de cómo quieras implementarlo)
      const matchesCapacity = !this.selectedCapacity || 
        space.capacity.toString() === this.selectedCapacity;

      // Filtro de disponibilidad
      const matchesAvailability = !this.selectedAvailability || 
        space.status === this.selectedAvailability;

      return matchesSearch && matchesType && matchesCapacity && matchesAvailability;
    });
  }

  /**
   * Navega a la página para añadir un nuevo espacio
   */
  addNewSpace(): void {
    this.router.navigate(['/add-space']);
  }

  /**
   * Navega a la página de edición del espacio
   */
  editSpace(spaceId: number): void {
    console.log('Editando espacio:', spaceId);
    this.router.navigate(['/edit-space', spaceId]);
  }

  /**
   * Elimina un espacio (con confirmación)
   */
  deleteSpace(spaceId: number): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este espacio?');
    if (confirmDelete) {
      console.log('Eliminando espacio:', spaceId);
      // Aquí iría la llamada al backend para eliminar
      // Después de eliminar, actualizar la lista
      this.allSpaces = this.allSpaces.filter(s => s.id !== spaceId);
      this.applyFilters();
    }
  }

  /**
   * Navega de vuelta al panel/dashboard
   */
  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  /**
   * Obtiene el texto del estado según el valor
   */
  getStatusText(status: string): string {
    return status === 'available' ? 'Disponible' : 'Ocupado';
  }

  /**
   * Obtiene la clase CSS según el estado
   */
  getStatusClass(status: string): string {
    return status === 'available' ? 'status-available' : 'status-occupied';
  }
}