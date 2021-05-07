import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
 
//import { NavbarModule, WavesModule, ButtonsModule } from '@angular-bootstrap-md';

import { TraindetailsComponent } from './traindetails/traindetails.component';
import { TrainfaresComponent } from './trainfares/trainfares.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
//import { Boot }
//import { FormsModule } from '@angular/forms';

// For MDB Angular Free
//import { NavbarModule, WavesModule, ButtonsModule } from '@angular-bootstrap-md'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './about/about.component';
import { ReservationComponent } from './reservation/reservation.component';

import { MatInputModule } from '@angular/material/input';

//import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { MatSelectModule } from '@angular/material/select';

//import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    TraindetailsComponent,
    TrainfaresComponent,
    HomeComponent,
    AboutComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    //MatInputModule
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    NgbModule,

    HttpClientModule,

    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
  //FlexLayoutModule,
  MatCardModule,

  MatSelectModule,
  
  MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
