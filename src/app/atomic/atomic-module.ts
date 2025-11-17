import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { Button } from './atoms/button/button';
import { InputComponent } from './atoms/input/input';
import { Label } from './atoms/label/label';
import { Icon } from './atoms/icon/icon';
import { FormField } from './molecules/form-field/form-field';
import { LoginForm } from './organisms/login-form/login-form';
import { AuthTemplate } from './templates/auth-template/auth-template';
import { DesignShowcase } from './pages/design-showcase/design-showcase';

import { LucideAngularModule } from 'lucide-angular';
import { Home } from './pages/home/home';


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
    Home
  ],
  imports: [
    BrowserModule,
    CommonModule,
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
    Home
  ]
})
export class AtomicModule { }
