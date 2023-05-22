import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PasswordVisibilityComponent } from './login/password-visibility/password-visibility.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './dashboard/home/home.component';
import { CareerObjectivesComponent } from './careerobjectives/career-objectives.component';
import { LoaderAlphaComponent } from './loader-alpha/loader-alpha.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PasswordVisibilityComponent,
    HomeComponent,
    CareerObjectivesComponent,
    LoaderAlphaComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }