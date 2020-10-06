import { NgModule } from '@angular/core';

import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './shared/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    SharedModule,
    AngularFireAuthModule,
    AuthRoutingModule
  ],
  providers: [AuthService],
  exports: []
})
export class AuthModule {}
