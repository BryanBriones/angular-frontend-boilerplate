import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CareerObjectivesComponent } from './careerobjectives/career-objectives.component';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  { path: 'dashboard', component: DashboardComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'careerobjectives', component: CareerObjectivesComponent }
  ]  },
  { path: 'logout', redirectTo: '/login', pathMatch: 'full'}

];

let route: Routes 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }