import { Component } from '@angular/core';
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
    private router: Router
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
        
        // Navegar al catálogo
        this.router.navigate(['/catalog']).then(() => {
          console.log(`Usuario ${response.user.nombre} ha iniciado sesión`);
        });
      },
      error: (error) => {
        console.error('Error en login:', error);
        this.errorMessage = error.error?.message || 'Credenciales incorrectas. Verifica tu email y contraseña.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
