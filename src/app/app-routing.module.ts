import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component'
import { LoginComponent } from './login/login.component'
import { TraindetailsComponent } from './traindetails/traindetails.component'
import { TrainfaresComponent } from './trainfares/trainfares.component'
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';

import { ReservationComponent } from './reservation/reservation.component';



const routes: Routes = [
  {
    path:'home',
    component:HomeComponent },
  
    {
      path:'about',
      component:AboutComponent },
    

  {
    path:'registration',
    component:RegistrationComponent },
    {
    path:'login',
    component:LoginComponent },
    {
    path:'traindetails',
    component:TraindetailsComponent },
    {
    path:'trainfares',
    component:TrainfaresComponent },
    {
      path:'reservation',
      component:ReservationComponent }
      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
