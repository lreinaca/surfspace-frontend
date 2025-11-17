import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-clean.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('surfspace-frontend');
}
