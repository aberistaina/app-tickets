import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatRutPipe } from './pipes/format-rut.pipe';


@NgModule({
  declarations: [
    FormatRutPipe
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    FormatRutPipe,

  ]
})
export class SharedModule { }
