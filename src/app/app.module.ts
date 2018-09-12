import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AuthguardGuard } from './services/authguard.guard';
import { ActivityService } from './services/activity.service';
import { UserComponent } from './user/user.component';
import { NavbarcontrollerService } from './services/navbarcontroller.service';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: "", redirectTo:'/home', pathMatch: 'full'},
  { path:'home' , component: HomeComponent},
  { path:'signin' , component: LoginComponent},
  { path:'signup' , component: RegisterComponent},
  { path:'contactus' , component: ContactusComponent},
  { path:'forgotpassword' , component: ForgotpasswordComponent},
  { path:'users' , component: AdminpanelComponent},  /*, canActivate: [AuthguardGuard]*/
  {path: "users/:id", component: UserComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    FooterComponent,
    ForgotpasswordComponent,
    UserpanelComponent,
    AdminpanelComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ActivityService, UserService, NavbarcontrollerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
