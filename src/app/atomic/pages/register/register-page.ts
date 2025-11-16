import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AtomicModule } from '../../atomic-module';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule, AtomicModule],
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.scss']
})
export class RegisterPage {
  formData = {
    nombre: '',
    telefono: '',
    email: '',
    password: ''
  };

  constructor(public router: Router) {}

  onSubmit(): void {
    // Aquí podrías llamar a un servicio para registrar al usuario.
    console.log('Form submitted:', this.formData);
    // opcional: navegar a login tras registro
    // this.router.navigate(['/login']);
  }
}
