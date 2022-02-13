import { Component, Input, OnInit } from '@angular/core';
import { MtToggleButtonGroup } from '../../interfaces/mtToggleBtnGroup';

@Component({
  selector: 'mt-button-toggle',
  template: `
    <mat-button-toggle-group #group="matButtonToggleGroup">
      <mat-button-toggle
        *ngFor="let btn of toggleBtns"
        [aria-label]="$any(btn.ariaLabel)"
        [value]="btn.value"
      >
        <mat-icon>{{ btn.icon }}</mat-icon>
      </mat-button-toggle>
    </mat-button-toggle-group>
    <!-- Selected: {{group.value}} -->
  `,
  styleUrls: ['./mt-button-toggle.component.css'],
})
export class MtButtonToggleComponent implements OnInit {
  @Input() toggleBtns: MtToggleButtonGroup[] = [];

  constructor() {
    // this.toggleBtns = [
    //   {
    //     id: 'format_align_left',
    //     ariaLabel: 'format_align_left',
    //     icon: 'format_align_left',
    //     value: 'left',
    //   },
    //   {
    //     id: 'format_align_center',
    //     ariaLabel: 'format_align_center',
    //     icon: 'format_align_center',
    //     value: 'center',
    //   },
    //   {
    //     id: 'format_align_right',
    //     ariaLabel: 'format_align_right',
    //     icon: 'format_align_right',
    //     value: 'right',
    //   },
    //   {
    //     id: 'format_align_justify',
    //     ariaLabel: 'format_align_justify',
    //     icon: 'format_align_justify',
    //     value: 'justify',
    //   }
    // ];
  }

  ngOnInit(): void {

  }
}
