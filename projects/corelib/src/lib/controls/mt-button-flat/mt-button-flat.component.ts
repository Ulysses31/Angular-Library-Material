import { Component, Input, OnInit } from '@angular/core';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button-flat',
  template: `
    <button
      mat-flat-button
      [color]="color"
      [disabled]="disabled"
      (click)="command()"
    >
    <mat-icon>{{ icon }}</mat-icon> {{label}}
  </button>
  `,
  styleUrls: ['./mt-button-flat.component.css']
})
export class MtButtonFlatComponent implements OnInit {
  @Input() command?: any;
  @Input() label: string = 'Flat';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() color: MaterialColor = MaterialColor.Basic

  constructor() { }

  ngOnInit(): void {
  }

}
