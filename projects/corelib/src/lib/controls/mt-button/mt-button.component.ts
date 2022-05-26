import { Component, Input, OnInit } from '@angular/core';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button',
  template: `
    <button
      mat-button
      [color]="color"
      [disabled]="disabled"
      (click)="command()"
    >
    <mat-icon>{{ icon }}</mat-icon> {{label}}
  </button>
  `,
  styleUrls: ['./mt-button.component.css']
})
export class MtButtonComponent implements OnInit {
  @Input() command?: any;
  @Input() label: string = 'Basic';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() color: MaterialColor = MaterialColor.Basic

  constructor() { }

  ngOnInit(): void {
  }

}
