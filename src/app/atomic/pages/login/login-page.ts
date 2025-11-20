import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import { LoginRequest, LoginResponse } from '../../../core/models/auth.model';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const { email, password } = this.form.value;

    const payload: LoginRequest = {
      email: email,
      contrasena: password
    };

    this.api.post<LoginResponse>('/auth/login', payload).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        
        // Guardar token en localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        
        this.loading = false;
        
        // Navegar al catálogo
        this.router.navigate(['/catalog']).then(() => {
          console.log(`Usuario ${response.user.nombre} ha iniciado sesión`);
        });
      },
      error: (httpError) => {
        console.error('Error completo:', httpError);
        console.error('Status:', httpError.status);
        console.error('Error body:', httpError.error);
        console.error('Error body JSON:', JSON.stringify(httpError.error, null, 2));
        
        this.loading = false;
        
        // Manejar diferentes tipos de errores
        if (httpError.status === 401) {
          // Intentar obtener el mensaje del backend
          const backendMessage = httpError.error?.message || httpError.error?.error;
          this.errorMessage = backendMessage || 'Credenciales incorrectas. Verifica tu email y contraseña.';
        } else if (httpError.status === 0) {
          this.errorMessage = 'No se pudo conectar con el servidor. Verifica tu conexión.';
        } else {
          this.errorMessage = httpError.error?.message || 'Ocurrió un error inesperado. Por favor intenta de nuevo.';
        }
        
        // Forzar detección de cambios
        this.cdr.detectChanges();
      }
    });
  }
}
