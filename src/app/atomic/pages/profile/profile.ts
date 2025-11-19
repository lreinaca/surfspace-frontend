import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class ProfileComponent implements OnInit {
  profile = {
    name: 'Diana Hernández',
    cedula: '1.234.567.210',
    email: 'DianaH_1986@example.co',
    phone: '+57 3001234001',
    membershipType: 'Miembro Premium',
    startDate: '15 de enero de 2023'
  };

  isAffiliated = true; // Cambiar a false para mostrar N/A

  constructor() { }

  ngOnInit(): void {
    // Aquí se puede cargar la información del perfil desde un servicio
  }

  editar(): void {
    console.log('Guardando cambios...', this.profile);
    // Implementar lógica para guardar los cambios
  }

  affiliate(): void {
    console.log('Afiliarse...');
    // Implementar lógica para afiliarse
  }
}