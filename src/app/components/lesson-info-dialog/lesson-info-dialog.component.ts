import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Lesson} from '../../types/lesson';

@Component({
  selector: 'app-lesson-info-dialog',
  templateUrl: './lesson-info-dialog.component.html',
  styleUrls: ['./lesson-info-dialog.component.scss']
})
export class LessonInfoDialogComponent implements OnInit {
  lesson: Lesson;
  day: string;

  constructor(public dialogRef: MdDialogRef<LessonInfoDialogComponent>) {
  }

  ngOnInit() {
  }

}
