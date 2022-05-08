// import { Component, OnInit, Input } from '@angular/core';
// import { MtDialogActionsContent } from '../../interfaces/mtDialogActionsContent';
// import { MaterialBtnAlign } from '../../models/enums';

// @Component({
//   selector: 'mt-dialog',
//   template: `
//     <h2 mat-dialog-title>{{title}}</h2>
//     <mat-dialog-content class="mat-typography" *ngIf="content">
//       {{content}}
//     </mat-dialog-content>
//     <mat-dialog-actions align="end">
//       <button mat-button mat-dialog-close>{{dialogAction.buttons[0].text}}</button>
//       <button mat-button [mat-dialog-close]="true" cdkFocusInitial>
//       {{dialogAction.buttons[1].text}}
//       </button>
//     </mat-dialog-actions>
//   `,
//   styleUrls: ['./mt-dialog.component.css'],
// })
// export class MtDialogComponent implements OnInit {
//   @Input() title: string = 'Install Angular';
//   @Input() content: string = 'Material dialog content';
//   @Input() dialogAction: MtDialogActionsContent = {
//     aling: MaterialBtnAlign.Start,
//     buttons: [
//       {
//         text: 'Cancel',
//       },
//       {
//         text: 'Install',
//       },
//     ],
//   };

//   constructor() {}

//   ngOnInit(): void {
//   }
// }
