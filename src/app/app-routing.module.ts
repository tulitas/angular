import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CanOpenPageGuard } from './guards/can-open-page.guard';
import { RegistracijaComponent } from './registracija/registracija.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'registration', canActivate:[CanOpenPageGuard], component: RegistracijaComponent},
  { path: 'galvenalapa', canActivate:[CanOpenPageGuard], component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

