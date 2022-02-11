import { NgModule } from '@angular/core';
import { MtInputComponent } from './controls/mt-input/mt-input.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [MtInputComponent],
  imports: [MatInputModule],
  exports: [MtInputComponent],
  providers: [],
})
export class CorelibModule {}
