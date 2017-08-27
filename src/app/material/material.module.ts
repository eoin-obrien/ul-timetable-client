import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule,
  MdInputModule,
  MdCardModule,
  MdGridListModule,
  MdIconModule,
} from '@angular/material';

@NgModule({
  exports: [
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdGridListModule,
    MdIconModule,
  ],
})
export class MaterialModule { }
