import {Component, OnInit} from '@angular/core';
import {TimetableService} from '../timetable.service';
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
  studentId: string;
  timetable: Timetable;
  weeks: Week[];
  rowHeightPx = 64;
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

  constructor(private ts: TimetableService, private cs: ModuleColorService, private route: ActivatedRoute) {
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

  getTimetable() {
    this.ts.getTimetable(this.studentId)
      .subscribe(({data}) => {
        this.timetable = new Timetable(data.timetable);
        this.weeks = data.weeks.map(week => new Week(week));
        this.colors = this.cs.getColorMap(this.studentId, this.getModules());
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentId = params['id'];
      this.getTimetable();
    });
  }

}
