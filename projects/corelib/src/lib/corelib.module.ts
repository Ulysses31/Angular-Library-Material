import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MtInputTextComponent } from './controls/mt-input-text/mt-input-text.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MtInputColorComponent } from './controls/mt-input-color/mt-input-color.component';
import { MtInputDateComponent } from './controls/mt-input-date/mt-input-date.component';
import { MtInputEmailComponent } from './controls/mt-input-email/mt-input-email.component';
import { MtInputNumberComponent } from './controls/mt-input-number/mt-input-number.component';
import { MtInputPasswordComponent } from './controls/mt-input-password/mt-input-password.component';
import { MtInputSearchComponent } from './controls/mt-input-search/mt-input-search.component';
import { MtInputTelComponent } from './controls/mt-input-tel/mt-input-tel.component';
import { MtInputTimeComponent } from './controls/mt-input-time/mt-input-time.component';
import { MtInputUrlComponent } from './controls/mt-input-url/mt-input-url.component';
import { MtInputTextareaComponent } from './controls/mt-input-textarea/mt-input-textarea.component';

@NgModule({
  declarations: [
    MtInputTextComponent,
    MtInputColorComponent,
    MtInputDateComponent,
    MtInputEmailComponent,
    MtInputNumberComponent,
    MtInputPasswordComponent,
    MtInputSearchComponent,
    MtInputTelComponent,
    MtInputTimeComponent,
    MtInputUrlComponent,
    MtInputTextareaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MtInputTextComponent,
    MtInputColorComponent,
    MtInputDateComponent,
    MtInputEmailComponent,
    MtInputNumberComponent,
    MtInputPasswordComponent,
    MtInputSearchComponent,
    MtInputTelComponent,
    MtInputTimeComponent,
    MtInputUrlComponent,
    MtInputTextareaComponent
  ],
  providers: [],
})
export class CorelibModule {}
