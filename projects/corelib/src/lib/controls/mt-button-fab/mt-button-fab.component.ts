import { Component, Input, OnInit } from '@angular/core';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button-fab',
  template: `
    <button
      mat-fab
      [color]="matColor"
      [disabled]="disabled"
      (click)="command()"
    >
    <mat-icon>{{icon}}</mat-icon>
  </button>
  `,
  styleUrls: ['./mt-button-fab.component.css']
})
export class MtButtonFabComponent implements OnInit {
  @Input() command?: any;
  @Input() icon: string = 'home';
  @Input() disabled: boolean = false;
  @Input() matColor: MaterialColor = MaterialColor.Basic

  constructor() { }

  ngOnInit(): void {
  }

}
