import { Component, Input, OnInit } from '@angular/core';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button-raised',
  template: `
    <button
      mat-raised-button
      [color]="matColor"
      [disabled]="disabled"
      (click)="command()"
    >{{label}}</button>
  `,
  styleUrls: ['./mt-button-raised.component.css']
})
export class MtButtonRaisedComponent implements OnInit {
  @Input() command?: any;
  @Input() label: string = 'Raised';
  @Input() disabled: boolean = false;
  @Input() matColor: MaterialColor = MaterialColor.Basic

  constructor() { }

  ngOnInit(): void {
  }

}
