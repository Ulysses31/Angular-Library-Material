import { Component, Input, OnInit } from '@angular/core';
import { MaterialColor } from '../../models/enums';

@Component({
  selector: 'mt-button',
  template: `
    <button
      mat-button
      [color]="matColor"
      [disabled]="disabled"
      (click)="command()"
    >{{label}}</button>
  `,
  styleUrls: ['./mt-button.component.css']
})
export class MtButtonComponent implements OnInit {
  @Input() command?: any;
  @Input() label: string = 'Basic';
  @Input() disabled: boolean = false;
  @Input() matColor: MaterialColor = MaterialColor.Basic

  constructor() { }

  ngOnInit(): void {
  }

}
