import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { noop } from 'rxjs';
import { MtInputAppearance } from '../../models/enums';

@Component({
  selector: 'mt-input-date',
  template: `
    <mat-form-field
      class="input-full-width"
      [appearance]="appearance">
      <mat-label>{{ label }}</mat-label>
      <input
        type="date"
        matInput
        [placeholder]="placeHolder"
        [readonly]="readonly"
        [(ngModel)]="value"
        (blur)="onBlur()"
      />
    </mat-form-field>
  `,
  styleUrls: ['./mt-input-date.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MtInputDateComponent),
      multi: true,
    },
  ],
})
export class MtInputDateComponent implements OnInit {
  @Input() label: string = 'Material Date Input';
  @Input() placeHolder: string = 'Material Date Input';
  @Input() readonly: boolean = false;
  @Input() appearance: MatFormFieldAppearance = MtInputAppearance.Legacy;

  private innerValue: any = '';

  constructor() {}

  ngOnInit(): void {}

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get value(): any {
    return this.innerValue;
  }

  set value(val: any) {
    if (val !== this.innerValue) {
      this.innerValue = val;
      this.onChangeCallback(val);
    }
  }

  onBlur(): void {
    this.onTouchedCallback();
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
}
