import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  // Usamos la ruta relativa /api que el proxy redirige al backend
  private base = '/api';

  constructor(private http: HttpClient) {}

  get<T>(path: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.get<T>(`${this.base}${path}`, options);
  }

  post<T>(path: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.post<T>(`${this.base}${path}`, body, options);
  }

  put<T>(path: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.put<T>(`${this.base}${path}`, body, options);
  }

  delete<T>(path: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.http.delete<T>(`${this.base}${path}`, options);
  }
}
