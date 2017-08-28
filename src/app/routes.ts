import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {TimetableComponent} from './timetable/timetable.component';
import {TimetableGuard} from './shared/timetable.guard';

const APP_ROUTES: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'timetable/:id', component: TimetableComponent, canActivate: [TimetableGuard]},
  {path: 'timetable/:id/:week', component: TimetableComponent, canActivate: [TimetableGuard]},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
