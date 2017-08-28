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
  MdSelectModule,
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
    MdSelectModule,
  ],
})
export class MaterialModule { }
