import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-spaces',
  standalone: false,
  templateUrl: './manage-spaces.html',
  styleUrls: ['./manage-spaces.scss']
})
export class ManageSpacesComponent {
  search: string = '';

  spaces = [
    {
      nombre: 'Sala de Reuniones #1',
      tipo: 'Sala de Reuniones',
      capacidad: 10,
      estado: 'Disponible'
    },
    {
      nombre: 'Sala de Reuniones #2',
      tipo: 'Sala de Reuniones',
      capacidad: 6,
      estado: 'Ocupado'
    },
    {
      nombre: 'Espacio de trabajo compartido #2',
      tipo: 'Espacio de trabajo compartido',
      capacidad: 10,
      estado: 'Disponible'
    },
    {
      nombre: 'Espacio de trabajo compartido #3',
      tipo: 'Sala de Reuniones',
      capacidad: 30,
      estado: 'Disponible'
    },
    {
      nombre: 'Espacio de trabajo compartido #5',
      tipo: 'Espacio de trabajo compartido',
      capacidad: 15,
      estado: 'Disponible'
    }
  ];

  filteredSpaces = [...this.spaces];

  filterSpaces() {
    const text = this.search.toLowerCase();

    this.filteredSpaces = this.spaces.filter(s =>
      s.nombre.toLowerCase().includes(text) ||
      s.tipo.toLowerCase().includes(text)
    );
  }

  toggleFilter(filter: string) {
    console.log('Filtro presionado:', filter);
  }

  edit(item: any) {
    console.log('Editar', item);
  }

  delete(item: any) {
    console.log('Eliminar', item);
  }
}
