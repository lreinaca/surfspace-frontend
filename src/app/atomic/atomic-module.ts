import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { Button } from './atoms/button/button';
import { InputComponent } from './atoms/input/input';
import { Label } from './atoms/label/label';
import { Icon } from './atoms/icon/icon';
import { FormField } from './molecules/form-field/form-field';
import { LoginForm } from './organisms/login-form/login-form';
import { AuthTemplate } from './templates/auth-template/auth-template';

import { LoginComponent } from './pages/login/login-page';
import { RegisterComponent } from './pages/register/register-page';
import { WelcomePageComponent } from './pages/welcome/welcome-page';
import { CatalogPage } from './pages/catalog/catalog-page';
import { AddSpacePage } from './pages/admin/spaces/add-space-page';

import { LucideAngularModule } from 'lucide-angular';
import { AdminPanelComponent } from './pages/admin/panel-principal/admin-panel';
import { ManageSpacesComponent } from './pages/admin/manage-spaces/manage-spaces';
import { UsersComponent } from './pages/admin/manage-users/users';
import { ReportsComponent } from './pages/admin/reports/reports';
import { NewReservationComponent } from './pages/booking/newReservation/new-reservation';
import { BookingComponent } from './pages/booking/my-bookings/booking';
import { DetailsBookingComponent } from './pages/booking/details-booking/details-booking';
import { ProfileComponent } from './pages/profile/profile';
import { MembershipPaymentComponent } from './pages/membership-payment/membership-payment';
import { PaymentGatewayComponent } from './pages/payment-gateway/payment-gateway';
import { AppRoutingModule } from "../app-routing-module";

@NgModule({
  declarations: [
    Button,
    InputComponent,
    Label,
    Icon,
    FormField,
    LoginForm,
    AuthTemplate,
    WelcomePageComponent,
    RegisterComponent,
    CatalogPage,
    AddSpacePage,
    LoginComponent,
    AdminPanelComponent,
    ManageSpacesComponent,
    UsersComponent,
    ReportsComponent,
    NewReservationComponent,
    BookingComponent,
    DetailsBookingComponent,
    ProfileComponent,
    MembershipPaymentComponent,
    PaymentGatewayComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LucideAngularModule,
    AppRoutingModule
],
  exports: [
    Button,
    InputComponent,
    Label,
    Icon,
    FormField,
    LoginForm,
    AuthTemplate,
    LoginComponent,
    WelcomePageComponent,
    RegisterComponent,
    CatalogPage,
    AddSpacePage,
    AdminPanelComponent, 
    ManageSpacesComponent,
    UsersComponent,
    ReportsComponent,
    NewReservationComponent,
    BookingComponent,
    DetailsBookingComponent,
    ProfileComponent,
    MembershipPaymentComponent,
    PaymentGatewayComponent
  ]
})
export class AtomicModule { }
