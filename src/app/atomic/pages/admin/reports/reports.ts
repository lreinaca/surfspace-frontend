import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: false,
  templateUrl: './reports.html',
  styleUrls: ['./reports.scss']
})
export class ReportsComponent {
  users = [
    { nombre: 'Sofía Ramírez', reservas: 25, gasto: '$2,000' },
    { nombre: 'Carlos Mendoza', reservas: 20, gasto: '$1,800' },
    { nombre: 'Ana López', reservas: 18, gasto: '$1,500' },
    { nombre: 'Diego Fernández', reservas: 15, gasto: '$1,200' }
  ];
}
