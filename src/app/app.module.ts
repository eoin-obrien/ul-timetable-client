import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule, MediaQueriesModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApolloClient, createNetworkInterface} from 'apollo-client';
import {ApolloModule} from 'apollo-angular';
import 'hammerjs';

import {MaterialModule} from './material.module';
import {routing} from './routes.module';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {TimetableComponent} from './pages/timetable/timetable.component';
import {StudentIdValidatorDirective} from './validators/student-id-validator/student-id-validator.directive';
import {TimetableResolver} from './services/timetable-resolver/timetable-resolver.service';
import {TimetableService} from './services/timetable/timetable.service';
import {WeekService} from './services/week/week.service';
import {TimetableColumnComponent} from './components/timetable-column/timetable-column.component';
import {ModuleColorService} from './services/module-color/module-color.service';
import {LessonInfoDialogComponent} from './components/lesson-info-dialog/lesson-info-dialog.component';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.timetable.videtur.io/graphql'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    TimetableComponent,
    StudentIdValidatorDirective,
    TimetableColumnComponent,
    LessonInfoDialogComponent,
  ],
  entryComponents: [LessonInfoDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FlexLayoutModule,
    MediaQueriesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    ApolloModule.forRoot(provideClient),
  ],
  providers: [
    TimetableResolver,
    TimetableService,
    WeekService,
    ModuleColorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
