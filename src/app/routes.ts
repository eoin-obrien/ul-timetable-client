import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {TimetableComponent} from './timetable/timetable.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'timetable/:id', component: TimetableComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
