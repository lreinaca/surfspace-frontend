import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AtomicModule } from '../../atomic-module';

@Component({
  selector: 'app-add-space-page',
  standalone: true,
  imports: [CommonModule, FormsModule, AtomicModule],
  templateUrl: './add-space-page.html',
  styleUrls: ['./add-space-page.scss']
})
export class AddSpacePage {
  formData = {
    nombre: '',
    tipo: '',
    capacidad: '',
    descripcion: '',
    estado: ''
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    // Aquí se podría llamar a un servicio para guardar el espacio
    console.log('Form submitted:', this.formData);
    // por ahora navegamos al catálogo tras guardar
    this.router.navigate(['/catalog']);
  }

  onCancel(): void {
    this.formData = { nombre: '', tipo: '', capacidad: '', descripcion: '', estado: '' };
    // volver al catálogo
    this.router.navigate(['/catalog']);
  }
}
