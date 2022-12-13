import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { ViewVistorLogComponent } from './view-vistor-log/view-vistor-log.component';
import { ViewEmployeeLogComponent } from './view-employee-log/view-employee-log.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component'

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"addemp",
    component:AddEmployeeComponent
  },
  {
    path:"viewemp",
    component:ViewEmployeeComponent
  },
  {
    path:"vistorlog",
    component:ViewVistorLogComponent
  },
  {
    path:"emplog",
    component:ViewEmployeeLogComponent
  },
  {
    path:"addsec",
    component:AddSecurityComponent
  },
  {
    path:"viewsec",
    component:ViewSecurityComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeeComponent,
    AddEmployeeComponent,
    AddSecurityComponent,
    ViewSecurityComponent,
    ViewVistorLogComponent,
    ViewEmployeeLogComponent,
    AdminNavbarComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
