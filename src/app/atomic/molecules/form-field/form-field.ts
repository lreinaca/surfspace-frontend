import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  standalone: false,
  templateUrl: './form-field.html',
  styleUrls: ['./form-field.scss']
})
export class FormField {
  @Input() label!: string;
  @Input() type: string = "text";
  @Input() placeholder: string = "";
  @Input() icon?: string;

}
