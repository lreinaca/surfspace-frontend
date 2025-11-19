export interface UserRegisterRequest {
  nombre: string;
  email: string;
  contrasena: string;
  telefono: string;
  rol: string;
}

export interface UserResponse {
  id?: number;
  nombre: string;
  email: string;
  telefono: string;
  rol: string;
}
