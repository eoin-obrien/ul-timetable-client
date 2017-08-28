import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {STUDENT_ID_REGEX} from './student-id-validator.directive';
import {Observable} from 'rxjs/Observable';
import {isUndefined} from 'util';
import {WeekService} from '../week.service';

const WEEK_ID_REGEX = /^([1-9]|1[0-4]?)$/;

@Injectable()
export class TimetableGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (STUDENT_ID_REGEX.test(route.paramMap.get('id'))) {
      if (WEEK_ID_REGEX.test(route.paramMap.get('week')) || isUndefined(route.params.week)) {
        return true;
      } else {
        // noinspection JSIgnoredPromiseFromCall
        this.router.navigate([`/timetable/${route.params.id}`]);
        return false;
      }
    } else {
      // noinspection JSIgnoredPromiseFromCall
      this.router.navigate(['/']);
      return false;
    }
  }
}
