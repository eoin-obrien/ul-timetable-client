import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Timetable} from '../types/timetable';
import {Week} from '../types/week';
import {ModuleColorService} from '../module-color.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  loading = true;
  studentId: string;
  weekId: string;
  weekIndex: number;
  currentWeek: Week;
  previousWeek: Week;
  nextWeek: Week;
  timetable: Timetable;
  weeks: Week[];
  colors;
  days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];
  shortDays = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
  ];
  times = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ];

  constructor(private cs: ModuleColorService,
              private route: ActivatedRoute) {
  }

  getModuleColors() {
    const modules = [];
    this.timetable.toArray().forEach(day => {
      day.forEach(lesson => {
        if (!modules.includes(lesson.module._id)) {
          modules.push(lesson.module._id);
        }
      });
    });
    this.colors = this.cs.getColorMap(this.studentId, modules);
  }

  resolveWeek() {
    let lastIndex = 0;
    this.currentWeek = this.weeks.find((week, i) => {
      lastIndex = i;
      return week._id === this.weekId;
    });
    this.weekIndex = lastIndex;
    if (this.weekIndex - 1 >= 0) {
      this.previousWeek = this.weeks[this.weekIndex - 1];
    } else {
      this.previousWeek = null;
    }
    if (this.weekIndex + 1 < this.weeks.length) {
      this.nextWeek = this.weeks[this.weekIndex + 1];
    } else {
      this.nextWeek = null;
    }
  }

  ngOnInit() {
    this.route.data.subscribe(({timetable}) => {
      this.studentId = timetable.studentId;
      this.weekId = timetable.weekId;
      this.timetable = timetable.timetable;
      this.weeks = timetable.weeks;
      this.resolveWeek();
      this.getModuleColors();
      this.loading = false;
    });
  }

}
