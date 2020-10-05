import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './modules/welcome/welcome.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { TrainingComponent } from './modules/training/training.component';
import { AuthGuard } from './modules/auth/shared/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
