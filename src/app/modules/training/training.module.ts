import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { TrainingComponent } from './training.component';
import { NewTrainingComponent } from './components/new-training/new-training.component';
import { PastTrainingsComponent } from './components/past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from './components/current-training/current-training.component';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TrainingService } from './shared/training.service';
import { StopTrainingComponent } from './components/current-training/stop-training.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFirestoreModule,
    FlexLayoutModule
  ],
  providers: [TrainingService],
  entryComponents: [StopTrainingComponent]
})
export class TrainingModule { }
