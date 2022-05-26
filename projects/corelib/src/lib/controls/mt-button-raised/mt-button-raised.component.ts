import { Component, Input, OnInit } from '@angular/core';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button-raised',
  template: `
    <button
      mat-raised-button
      [color]="color"
      [disabled]="disabled"
      (click)="command()"
    >
    <mat-icon>{{ icon }}</mat-icon> {{label}}
  </button>
  `,
  styleUrls: ['./mt-button-raised.component.css']
})
export class MtButtonRaisedComponent implements OnInit {
  @Input() command?: any;
  @Input() label: string = 'Raised';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() color: MaterialColor = MaterialColor.Basic

  constructor() { }

  ngOnInit(): void {
  }

}
