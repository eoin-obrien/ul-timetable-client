import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule
} from '@angular/material';

@NgModule({
  exports: [
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
  ],
})
export class MaterialModule { }
