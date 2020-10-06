import { Component, OnInit, OnDestroy } from '@angular/core';
import { Exercise } from '../../shared/exercise.model';
import { Subscription } from 'rxjs';
import { TrainingService } from '../../shared/training.service';
import { NgForm } from '@angular/forms';
import { UIService } from '../../../../shared/ui.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  exercises: Exercise[];
  isLoading = true;

  constructor(private trainingService: TrainingService, private uiService: UIService) { }

  ngOnInit() {
    this.sub = this.uiService.loadingStateChanged
    .subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.sub = this.trainingService.exercisesChanged.subscribe(
      exercises => {
        this.isLoading = false;
        this.exercises = exercises;
      }
    );
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
