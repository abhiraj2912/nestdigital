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
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { AddVistorLogComponent } from './add-vistor-log/add-vistor-log.component';
import { AddEmployeeLogComponent } from './add-employee-log/add-employee-log.component';
import { SecurityNavbarComponent } from './security-navbar/security-navbar.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeLeaveApplyComponent } from './employee-leave-apply/employee-leave-apply.component';
import { EmployeePendingLeaveComponent } from './employee-pending-leave/employee-pending-leave.component';
import { EmployeeViewLeaveComponent } from './employee-view-leave/employee-view-leave.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { AdminLeaveComponent } from './admin-leave/admin-leave.component';
import { AdminViewLeaveComponent } from './admin-view-leave/admin-view-leave.component'

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
  },
  {
    path:"addemplog",
    component:AddEmployeeLogComponent
  },
  {
    path:"addvislog",
    component:AddVistorLogComponent
  },
  {
    path:"seclogin",
    component:SecurityLoginComponent
  },
  {
    path:"secprofile",
    component:SecurityProfileComponent
  },
  {
    path:"empprofile",
    component:EmployeeProfileComponent
  },
  {
    path:"applyleave",
    component:EmployeeLeaveApplyComponent
  },
  {
    path:"leavestatus",
    component:EmployeePendingLeaveComponent
  },
  {
    path:"viewleave",
    component:EmployeeViewLeaveComponent
  },
  {
    path:"emplogin",
    component:EmployeeLoginComponent
  },
  {
    path:"adminleave",
    component:AdminLeaveComponent
  },
  {
    path:"adminviewleave",
    component:AdminViewLeaveComponent
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
    AdminLoginComponent,
    SecurityProfileComponent,
    AddVistorLogComponent,
    AddEmployeeLogComponent,
    SecurityNavbarComponent,
    SecurityLoginComponent,
    EmployeeLoginComponent,
    EmployeeProfileComponent,
    EmployeeLeaveApplyComponent,
    EmployeePendingLeaveComponent,
    EmployeeViewLeaveComponent,
    EmployeeNavbarComponent,
    AdminLeaveComponent,
    AdminViewLeaveComponent
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
