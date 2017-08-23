import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {STUDENT_ID_REGEX} from './student-id-validator.directive';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TimetableGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (STUDENT_ID_REGEX.test(route.params.id)) {
      return true;
    }
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/']);
    return false;
  }
}
