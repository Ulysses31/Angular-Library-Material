import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MtInputTextComponent } from './controls/mt-input-text/mt-input-text.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
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
import { MtButtonComponent } from './controls/mt-button/mt-button.component';
import { MtButtonRaisedComponent } from './controls/mt-button-raised/mt-button-raised.component';
import { MtButtonStrokedComponent } from './controls/mt-button-stroked/mt-button-stroked.component';
import { MtButtonFlatComponent } from './controls/mt-button-flat/mt-button-flat.component';
import { MtButtonIconComponent } from './controls/mt-button-icon/mt-button-icon.component';
import { MtButtonFabComponent } from './controls/mt-button-fab/mt-button-fab.component';
import { MtButtonMinifabComponent } from './controls/mt-button-minifab/mt-button-minifab.component';
import { MtButtonToggleComponent } from './controls/mt-button-toggle/mt-button-toggle.component';
import { MtCardComponent } from './controls/mt-card/mt-card.component';
import { MtCheckboxComponent } from './controls/mt-checkbox/mt-checkbox.component';
import { MtChipsComponent } from './controls/mt-chips/mt-chips.component';
import { MtExpansionPanelComponent } from './controls/mt-expansion-panel/mt-expansion-panel.component';

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
    MtInputTextareaComponent,
    MtButtonComponent,
    MtButtonRaisedComponent,
    MtButtonStrokedComponent,
    MtButtonFlatComponent,
    MtButtonIconComponent,
    MtButtonFabComponent,
    MtButtonMinifabComponent,
    MtButtonToggleComponent,
    MtCardComponent,
    MtCheckboxComponent,
    MtChipsComponent,
    MtExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule
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
    MtInputTextareaComponent,
    MtButtonComponent,
    MtButtonRaisedComponent,
    MtButtonStrokedComponent,
    MtButtonFlatComponent,
    MtButtonIconComponent,
    MtButtonFabComponent,
    MtButtonMinifabComponent,
    MtButtonToggleComponent,
    MtCardComponent,
    MtCheckboxComponent,
    MtChipsComponent,
    MtExpansionPanelComponent
  ],
  providers: [],
})
export class CorelibModule {}
