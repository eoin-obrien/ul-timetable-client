import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from '../types/lesson';

@Component({
  selector: 'app-timetable-column',
  templateUrl: './timetable-column.component.html',
  styleUrls: ['./timetable-column.component.scss']
})
export class TimetableColumnComponent implements OnInit {
  @Input() lessons: Lesson[];

  constructor() { }

  ngOnInit() {
    console.log(this.lessons);
  }

}
