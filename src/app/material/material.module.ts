import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule,
  MdInputModule,
  MdCardModule,
  MdGridListModule,
  MdIconModule,
  MdTabsModule,
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
    MdTabsModule,
  ],
})
export class MaterialModule { }
