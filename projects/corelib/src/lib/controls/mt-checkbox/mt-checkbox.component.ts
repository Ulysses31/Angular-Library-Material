import { Component, OnInit, Input } from '@angular/core';
import { CheckboxLabelPlace, MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-checkbox',
  template: `
    <mat-checkbox
      [disabled]="disabled"
      [labelPosition]="labelPosition"
      [checked]="isChecked"
      [color]="color"
    >
      {{label}}
    </mat-checkbox>
  `,
  styleUrls: ['./mt-checkbox.component.css']
})
export class MtCheckboxComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() isChecked: boolean = false;
  @Input() labelPosition: any = CheckboxLabelPlace.After;
  @Input() color: string = MaterialColor.Warn;
  @Input() label: string = 'Check me!';

  constructor() { }

  ngOnInit(): void {
  }

}
