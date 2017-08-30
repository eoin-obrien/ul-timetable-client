import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {TimetableComponent} from './timetable/timetable.component';
import {TimetableResolver} from './shared/timetable-resolver.service';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'timetable',
    component: TimetableComponent,
    resolve: {
      timetable: TimetableResolver,
    }
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
