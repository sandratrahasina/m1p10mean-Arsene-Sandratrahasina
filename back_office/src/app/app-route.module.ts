import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent} from './pages/dashboard/dashboard/dashboard.component';
import { AppointmentDetailsComponent } from './pages/appointments/appointment-details/appointment-details.component';
import { AppointmentListComponent } from './pages/appointments/appointment-list/appointment-list.component';
import { ServiceDetailsComponent } from './pages/services-catalog/service-details/service-details.component'; 
import { ServiceListComponent } from './pages/services-catalog/service-list/service-list.component'; 
import { StaffDetailsComponent } from './pages/staff/staff-details/staff-details.component'; 
import { StaffListComponent } from './pages/staff/staff-list/staff-list.component';
import { AppComponent } from './app.component'; 

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'appointment-details', component: AppointmentDetailsComponent },
  { path: 'appointment-list', component: AppointmentListComponent },
  { path: 'service-details', component: ServiceDetailsComponent },
  { path: 'service-list', component: ServiceListComponent },
  { path: 'staff-details', component: StaffDetailsComponent },
  { path: 'staff-list', component: StaffListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule { }
