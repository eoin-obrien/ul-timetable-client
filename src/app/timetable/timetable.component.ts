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

  constructor(private ts: TimetableService, private route: ActivatedRoute) {
  }

  getTimetable() {
    this.ts.getTimetable(this.studentId)
      .subscribe(({data}) => {
        this.loading = data.loading;
        // TODO split timetable by week and display in tabs
        this.timetable = new Timetable(data.timetable);
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
