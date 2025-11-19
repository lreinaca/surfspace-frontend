import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import { UserRegisterRequest, UserResponse } from '../../../core/models/user.model';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.scss']
})
export class RegisterComponent {
  form: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  createUser() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const { name, phone, email, password } = this.form.value;

    const payload: UserRegisterRequest = {
      nombre: name,
      email: email,
      contrasena: password,
      telefono: phone,
      rol: 'VISITANTE' // Rol por defecto
    };

    this.api.post<UserResponse>('/users', payload).subscribe({
      next: (response) => {
        console.log('Usuario creado exitosamente:', response);
        alert(`¡Bienvenido ${response.nombre}! Tu cuenta ha sido creada.`);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error al crear usuario:', error);
        this.errorMessage = error.error?.message || 'Error al crear la cuenta. Intenta nuevamente.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
