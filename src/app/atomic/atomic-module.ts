import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button } from './atoms/button/button';
import { InputComponent } from './atoms/input/input';
import { Label } from './atoms/label/label';
import { Icon } from './atoms/icon/icon';
import { FormField } from './molecules/form-field/form-field';
import { LoginForm } from './organisms/login-form/login-form';
import { AuthTemplate } from './templates/auth-template/auth-template';
import { DesignShowcase } from './pages/design-showcase/design-showcase';
import { LoginPage } from './pages/login/login-page';

import { LucideAngularModule } from 'lucide-angular';


@NgModule({
  declarations: [
    Button,
    InputComponent,
    Label,
    Icon,
    FormField,
    LoginForm,
    AuthTemplate,
    DesignShowcase,
    LoginPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule
  ],
  exports: [
    Button,
    InputComponent,
    Label,
    Icon,
    FormField,
    LoginForm,
    AuthTemplate,
    DesignShowcase,
    LoginPage
  ]
})
export class AtomicModule { }
