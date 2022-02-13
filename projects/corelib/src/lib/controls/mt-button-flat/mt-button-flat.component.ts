import { Component, Input, OnInit } from '@angular/core';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button-flat',
  template: `
    <button
      mat-flat-button
      [color]="matColor"
      [disabled]="disabled"
      (click)="command()"
    >{{label}}</button>
  `,
  styleUrls: ['./mt-button-flat.component.css']
})
export class MtButtonFlatComponent implements OnInit {
  @Input() command?: any;
  @Input() label: string = 'Flat';
  @Input() disabled: boolean = false;
  @Input() matColor: MaterialColor = MaterialColor.Basic

  constructor() { }

  ngOnInit(): void {
  }

}
