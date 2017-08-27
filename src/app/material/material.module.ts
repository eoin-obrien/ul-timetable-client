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
  ],
})
export class MaterialModule { }
