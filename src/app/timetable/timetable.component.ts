import {Component, OnInit} from '@angular/core';
import {TimetableService} from '../timetable.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Timetable} from '../types/timetable';
import {Week} from '../types/week';
import {ModuleColorService} from '../module-color.service';
import {WeekService} from '../week.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  studentId: string;
  weekId: string;
  weekIndex: number;
  week: Week;
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

  constructor(
    private ts: TimetableService,
    private ws: WeekService,
    private cs: ModuleColorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  getModules() {
    const modules = [];
    this.timetable.toArray().forEach(day => {
      day.forEach(lesson => {
        if (!modules.includes(lesson.module._id)) {
          modules.push(lesson.module._id);
        }
      });
    });
    return modules;
  }

  resolveWeek() {
    let lastIndex = 0;
    if (this.weekId) {
      this.week = this.weeks.find((week, i) => {
        lastIndex = i;
        return week._id === this.weekId;
      });
      if (!this.week) {
        // noinspection JSIgnoredPromiseFromCall
        this.router.navigate([`/timetable/${this.studentId}`]);
      }
      this.weekIndex = lastIndex;
    } else {
      const now = new Date();
      this.week = this.weeks.slice().reverse().find((week, i) => {
        lastIndex = i;
        return week.date < now;
      });
      if (!this.week) {
        lastIndex = 0;
        this.week = this.weeks[0];
      }
      this.weekIndex = lastIndex;
    }
  }

  getTimetable() {
    this.timetable = undefined;
    this.ts.getTimetable(this.studentId, this.week._id)
      .subscribe(({data}) => {
        this.timetable = new Timetable(data.timetable);
        this.colors = this.cs.getColorMap(this.studentId, this.getModules());
      });
  }

  getWeeks() {
    this.ws.getWeeks().subscribe(({data}) => {
      this.weeks = data.weeks.map(week => new Week(week));
      this.resolveWeek();
      this.getTimetable();
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentId = params['id'];
      this.weekId = params['week'];
      this.getWeeks();
    });
  }

}
