import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {WeekService} from '../week/week.service';
import {Week} from '../../types/week';
import {Timetable} from '../../types/timetable';
import {TimetableService} from '../timetable/timetable.service';

interface TimetableData {
  studentId: string;
  weekId: string;
  weeks: Week[];
  timetable: Timetable;
}

@Injectable()
export class TimetableResolver implements Resolve<TimetableData> {
  constructor(private ts: TimetableService, private ws: WeekService, private router: Router) {
  }

  private currentWeek(weeks: Week[]): string {
    const now = new Date();
    return (weeks.slice().reverse().find((week, i) => week.date < now) || weeks[0])._id;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<TimetableData> {
    const data: TimetableData = {
      studentId: route.paramMap.get('id'),
      weekId: route.paramMap.get('week'),
      weeks: null,
      timetable: null,
    };

    return this.ws.getWeeks()
      .then((weeks) => {
        data.weeks = weeks;
        data.weekId = data.weekId || this.currentWeek(weeks);
        if (!data.weeks.find(week => week._id === data.weekId)) {
          // noinspection JSIgnoredPromiseFromCall
          this.router.navigate(['/timetable', {id: data.studentId}]);
          return null;
        } else {
          return this.ts.getTimetable(data.studentId, data.weekId)
            .then((timetable) => {
              if (timetable) {
                data.timetable = timetable;
                return data;
              } else {
                // noinspection JSIgnoredPromiseFromCall
                this.router.navigate(['/']);
                return null;
              }
            });
        }
      });
  }
}
