import {Component, OnInit} from '@angular/core';
import {TimetableService} from '../timetable.service';
import {ActivatedRoute} from '@angular/router';
import {Timetable} from '../types/timetable';
import {Week} from '../types/week';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  studentId: string;
  loading = true;
  timetable: Timetable;
  weeks: Week[];
  rowHeightPx = 64;

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

  constructor(private ts: TimetableService, private route: ActivatedRoute) {
  }

  getTimetable() {
    this.ts.getTimetable(this.studentId)
      .subscribe(({data}) => {
        this.loading = data.loading;
        // TODO split timetable by week and display in tabs
        this.timetable = new Timetable(data.timetable);
        console.log(this.timetable.toArray());
        this.weeks = data.weeks.map(week => new Week(week));
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentId = params['id'];
      this.getTimetable();
    });
  }

}
