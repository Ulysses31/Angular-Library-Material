import { Component, Input, OnInit } from '@angular/core';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button-icon',
  template: `
    <button
      mat-icon-button
      [color]="matColor"
      [disabled]="disabled"
      (click)="command()"
    >
    <mat-icon>{{icon}}</mat-icon>
  </button>
  `,
  styleUrls: ['./mt-button-icon.component.css']
})
export class MtButtonIconComponent implements OnInit {
  // https://mui.com/components/material-icons
  @Input() command?: any;
  @Input() icon: string = 'home';
  @Input() disabled: boolean = false;
  @Input() matColor: MaterialColor = MaterialColor.Basic

  constructor() { }

  ngOnInit(): void {
  }

}
