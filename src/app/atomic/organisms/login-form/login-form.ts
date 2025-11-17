import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss'
})
export class LoginForm {
  email: string = '';
  password: string = '';

  onSubmit(e: Event) {
    e.preventDefault();
    // Aquí podrías llamar a un servicio de autenticación
    console.log('Login submit', { email: this.email, password: this.password });
  }

}
