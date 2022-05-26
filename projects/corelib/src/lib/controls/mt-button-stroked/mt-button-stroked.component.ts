import { Component, Input, OnInit } from '@angular/core';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button-stroked',
  template: `
    <button
      mat-stroked-button
      [color]="color"
      [disabled]="disabled"
      (click)="command()"
    >
    <mat-icon>{{ icon }}</mat-icon> {{label}}
  </button>
  `,
  styleUrls: ['./mt-button-stroked.component.css']
})
export class MtButtonStrokedComponent implements OnInit {
  @Input() command?: any;
  @Input() label: string = 'Stroked';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() color: MaterialColor = MaterialColor.Basic

  constructor() { }

  ngOnInit(): void {
  }

}
