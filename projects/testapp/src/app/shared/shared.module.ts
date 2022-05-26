import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CorelibModule } from 'corelib';

@NgModule({
  imports: [
    CommonModule,
    CorelibModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    CorelibModule
  ]
})
export class SharedModule {}
