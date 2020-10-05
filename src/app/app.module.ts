import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { TrainingComponent } from './modules/training/training.component';
import { CurrentTrainingComponent } from './modules/training/components/current-training/current-training.component';
import { NewTrainingComponent } from './modules/training/components/new-training/new-training.component';
import { PastTrainingsComponent } from './modules/training/components/past-trainings/past-trainings.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './modules/training/components/current-training/stop-training.component';
import { AuthService } from './modules/auth/shared/auth.service';
import { TrainingService } from './modules/training/shared/training.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, TrainingService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
