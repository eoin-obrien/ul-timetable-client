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
  MdTooltipModule,
  MdDialogModule,
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
    MdTooltipModule,
    MdDialogModule,
  ],
})
export class MaterialModule { }
