import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  standalone: false,
  templateUrl: './admin-panel.html',
  styleUrls: ['./admin-panel.scss'],
})
export class AdminPanelComponent {
  summary = {
    activeUsers: 125,
    totalReservations: 350,
    monthRevenue: '15,000'
  };

  recentActivity = [
    { user: 'Carlos Mendoza', resource: 'Sala de Reuniones A', date: '2024-07-26 10:00', status: 'Confirmada' },
    { user: 'Ana López', resource: 'Escritorio 3', date: '2024-07-26 14:00', status: 'Pendiente' },
    { user: 'Roberto Díaz', resource: 'Equipo de Video', date: '2024-07-27 09:00', status: 'Cancelada' },
    { user: 'Sofía Ramírez', resource: 'Sala de Reuniones B', date: '2024-07-27 11:00', status: 'Confirmada' },
    { user: 'Javier Torres', resource: 'Escritorio 7', date: '2024-07-28 16:00', status: 'Pendiente' }
  ];
}
