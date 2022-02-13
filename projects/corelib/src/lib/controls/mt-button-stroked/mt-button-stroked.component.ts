import { Component, Input, OnInit } from '@angular/core';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button-stroked',
  template: `
    <button
      mat-stroked-button
      [color]="matColor"
      [disabled]="disabled"
      (click)="command()"
    >{{label}}</button>
  `,
  styleUrls: ['./mt-button-stroked.component.css']
})
export class MtButtonStrokedComponent implements OnInit {
  @Input() command?: any;
  @Input() label: string = 'Stroked';
  @Input() disabled: boolean = false;
  @Input() matColor: MaterialColor = MaterialColor.Basic

  constructor() { }

  ngOnInit(): void {
  }

}
