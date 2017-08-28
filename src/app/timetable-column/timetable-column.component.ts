import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from '../types/lesson';
import {MdDialog} from '@angular/material';
import {LessonInfoDialogComponent} from '../lesson-info-dialog/lesson-info-dialog.component';

@Component({
  selector: 'app-timetable-column',
  templateUrl: './timetable-column.component.html',
  styleUrls: ['./timetable-column.component.scss']
})
export class TimetableColumnComponent implements OnInit {
  @Input() lessons: Lesson[];
  @Input() day: string;
  @Input() moduleColors: { [key: string]: string };

  constructor(public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  openInfoModal(lesson: Lesson) {
    const dialogRef = this.dialog.open(LessonInfoDialogComponent);
    dialogRef.componentInstance.lesson = lesson;
    dialogRef.componentInstance.day = this.day;
  }

}
