import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../shared/exercise.model';
import { TrainingService } from '../../shared/training.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {


  exercises: Exercise[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  onstartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }



}
