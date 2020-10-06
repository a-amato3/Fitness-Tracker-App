import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { TrainingComponent } from './training.component';
import { NewTrainingComponent } from './components/new-training/new-training.component';
import { PastTrainingsComponent } from './components/past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from './components/current-training/current-training.component';
import { TrainingService } from './shared/training.service';
import { StopTrainingComponent } from './components/current-training/stop-training.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent

  ],
  imports: [
    SharedModule,
    AngularFirestoreModule,
  ],
  providers: [TrainingService],
  entryComponents: [StopTrainingComponent]
})
export class TrainingModule { }
