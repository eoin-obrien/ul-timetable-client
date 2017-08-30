import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule, MediaQueriesModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApolloClient, createNetworkInterface} from 'apollo-client';
import {ApolloModule} from 'apollo-angular';
import 'hammerjs';

import {MaterialModule} from './material/material.module';
import {routing} from './routes';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HomepageComponent} from './homepage/homepage.component';
import {TimetableComponent} from './timetable/timetable.component';
import {StudentIdValidatorDirective} from './shared/student-id-validator.directive';
import {TimetableResolver} from './shared/timetable-resolver.service';
import {TimetableService} from './timetable.service';
import {WeekService} from './week.service';
import {TimetableColumnComponent} from './timetable-column/timetable-column.component';
import {ModuleColorService} from './module-color.service';
import {LessonInfoDialogComponent} from './lesson-info-dialog/lesson-info-dialog.component';

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
