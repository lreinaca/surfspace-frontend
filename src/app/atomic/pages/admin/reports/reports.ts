import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interface para las estadísticas de uso de recursos
interface ResourceUsage {
  workspacesReserved: number;
  meetingRoomsReserved: number;
}

// Interface para los ingresos generados
interface Revenue {
  totalRevenue: number;
  averageRevenuePerReservation: number;
}

// Interface para un usuario frecuente
interface FrequentUser {
  id: number;
  name: string;
  reservations: number;
  totalSpent: number;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.html',
  styleUrls: ['./reports.scss'],
  standalone: false
})
export class ReportsComponent implements OnInit {
  
  // URLs de imágenes
  logoUrl = 'https://res.cloudinary.com/djn8thk2s/image/upload/v1763361948/Logo-SurfingSpace-coworking_1_n4jb0d_c_crop_w_300_h_300_n26546.png';
  profileUrl = 'https://res.cloudinary.com/djn8thk2s/image/upload/v1748134747/e46ee9dd-8a52-4f83-92a1-566dbd6ce14c_fpyk9t.jpg';

  // Datos de uso de recursos (vendrían del backend)
  resourceUsage: ResourceUsage = {
    workspacesReserved: 150,
    meetingRoomsReserved: 45
  };

  // Datos de ingresos generados (vendrían del backend)
  revenue: Revenue = {
    totalRevenue: 12500,
    averageRevenuePerReservation: 83.33
  };

  // Lista de usuarios frecuentes (vendría del backend)
  frequentUsers: FrequentUser[] = [
    {
      id: 1,
      name: 'Sofía Ramírez',
      reservations: 25,
      totalSpent: 2000
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      reservations: 20,
      totalSpent: 1800
    },
    {
      id: 3,
      name: 'Ana López',
      reservations: 18,
      totalSpent: 1500
    },
    {
      id: 4,
      name: 'Diego Fernández',
      reservations: 15,
      totalSpent: 1200
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Cargar datos desde el backend
    this.loadReportsData();
  }

  /**
   * Carga los datos de reportes desde el backend
   * Este método se conectaría con tu servicio de API
   */
  private loadReportsData(): void {
    // Ejemplo de cómo se conectaría con el backend:
    // this.reportsService.getResourceUsage().subscribe(data => {
    //   this.resourceUsage = data;
    // });
    // 
    // this.reportsService.getRevenue().subscribe(data => {
    //   this.revenue = data;
    // });
    // 
    // this.reportsService.getFrequentUsers().subscribe(data => {
    //   this.frequentUsers = data;
    // });
  }

  /**
   * Navega de vuelta al panel/dashboard
   */
  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  /**
   * Formatea un número como moneda
   */
  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount);
  }

  /**
   * Formatea un número con separadores de miles
   */
  formatNumber(value: number): string {
    return new Intl.NumberFormat('es-CO').format(value);
  }

  /**
   * Exporta los reportes a PDF (placeholder para futura implementación)
   */
  exportToPDF(): void {
    console.log('Exportando reportes a PDF...');
    // Aquí iría la lógica para generar y descargar el PDF
    alert('Funcionalidad de exportar a PDF - Próximamente');
  }

  /**
   * Exporta los reportes a Excel (placeholder para futura implementación)
   */
  exportToExcel(): void {
    console.log('Exportando reportes a Excel...');
    // Aquí iría la lógica para generar y descargar el Excel
    alert('Funcionalidad de exportar a Excel - Próximamente');
  }

  /**
   * Obtiene el total de reservas
   */
  getTotalReservations(): number {
    return this.resourceUsage.workspacesReserved + this.resourceUsage.meetingRoomsReserved;
  }
}