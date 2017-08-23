import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApolloClient} from 'apollo-client';
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
import {TimetableGuard} from './shared/timetable.guard';

const client = new ApolloClient();

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
    StudentIdValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    ApolloModule.forRoot(provideClient),
  ],
  providers: [TimetableGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
