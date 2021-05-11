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

//import { HttpClientModule } from '@angular/common/http';
 
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
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

//import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';
import { SignInComponent } from './user/sign-in/sign-in.component'; 

//import { MatCardModule } from '@angular/material/card';



import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard'
import { UserService } from './shared/user.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PaymentComponent } from './payment/payment.component';
import { HelpComponent } from './help/help.component'


import { MatStepperModule } from '@angular/material/stepper';






@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    TraindetailsComponent,
    TrainfaresComponent,
    HomeComponent,
    AboutComponent,
    ReservationComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    UserProfileComponent,
    PaymentComponent,
    HelpComponent
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
  
  MatRadioModule,

  MatStepperModule,
  
    RouterModule.forRoot(appRoutes)



],

//original
  //providers: [],

  //changed entire below thing
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
