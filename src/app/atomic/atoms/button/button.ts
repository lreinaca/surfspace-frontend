import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() label: string = '';
  @Input() disabled = false;
}
