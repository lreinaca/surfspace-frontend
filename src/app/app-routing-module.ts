import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './atomic/pages/login/login-page';
import { WelcomePageComponent } from './atomic/pages/welcome/welcome-page';
import { RegisterComponent } from './atomic/pages/register/register-page';
import { CatalogPage } from './atomic/pages/catalog/catalog-page';
import { AddSpacePage } from './atomic/pages/admin/spaces/add-space-page';
import { NewReservationComponent } from './atomic/pages/booking/newReservation/new-reservation';
import { BookingComponent } from './atomic/pages/booking/my-bookings/booking';
import { DetailsBookingComponent } from './atomic/pages/booking/details-booking/details-booking';
import { PaymentGatewayComponent } from './atomic/pages/payment-gateway/payment-gateway';
import { ProfileComponent } from './atomic/pages/profile/profile';
import { AdminPanelComponent } from './atomic/pages/admin/panel-principal/admin-panel';
import { ManageSpacesComponent } from './atomic/pages/admin/manage-spaces/manage-spaces';
import { UsersComponent } from './atomic/pages/admin/manage-users/users';
import { ReportsComponent } from './atomic/pages/admin/reports/reports';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'catalog', component: CatalogPage },
  { path: 'spaces/new', component: AddSpacePage },
  { path: 'newReservation', component: NewReservationComponent},
  { path: 'my-booking', component: BookingComponent },
  { path: 'details-booking', component: DetailsBookingComponent},
  { path: 'payment-gateway', component: PaymentGatewayComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'panel-principal', component: AdminPanelComponent},
  { path: 'manage-users', component: UsersComponent},
  { path: 'manage-spaces', component: ManageSpacesComponent},
  { path: 'reports', component: ReportsComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
