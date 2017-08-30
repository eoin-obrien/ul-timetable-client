import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {TimetableComponent} from './pages/timetable/timetable.component';
import {TimetableResolver} from './services/timetable-resolver/timetable-resolver.service';

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
