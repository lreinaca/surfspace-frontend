import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from './atomic/pages/login/login-page';
import { WelcomePage } from './atomic/pages/welcome/welcome-page';
import { RegisterPage } from './atomic/pages/register/register-page';
import { CatalogPage } from './atomic/pages/catalog/catalog-page';
import { AddSpacePage } from './atomic/pages/spaces/add-space-page';

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'welcome', component: WelcomePage },
  { path: 'register', component: RegisterPage },
  { path: 'catalog', component: CatalogPage },
  { path: 'spaces/new', component: AddSpacePage },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
