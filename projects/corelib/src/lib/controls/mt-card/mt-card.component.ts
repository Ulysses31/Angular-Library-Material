import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MtCardActionsContent } from '../../interfaces/mtCardActionsContent';
import { MaterialBtnAlign, ProgrBarMode } from '../../models/enums';

@Component({
  selector: 'mt-card',
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title *ngIf="title">{{ title }}</mat-card-title>
        <mat-card-subtitle *ngIf="subTitle">{{ subTitle }}</mat-card-subtitle>
      </mat-card-header>
      <img
        mat-card-image
        *ngIf="hasImage"
        [src]="imagePath"
        [alt]="imagePath"
      />
      <mat-card-content *ngIf="content">
        <p>{{ content }}</p>
      </mat-card-content>
      <mat-card-actions *ngIf="hasButtons" [align]="cardAction.aling">
        <button *ngFor="let action of cardAction.buttons" mat-button>
          {{ action.text }}
        </button>
      </mat-card-actions>
      <mat-card-footer *ngIf="hasFooter">
        <mat-progress-bar [mode]="prgBarMode"></mat-progress-bar>
      </mat-card-footer>
    </mat-card>
  `,
  styleUrls: ['./mt-card.component.css'],
})
export class MtCardComponent implements OnInit {
  @Input() title: string = 'Material Card Title';
  @Input() subTitle: string = 'Material Card SubTitle';
  @Input() hasButtons: boolean = true;
  @Input() hasFooter: boolean = true;
  @Input() prgBarMode: ProgressBarMode = ProgrBarMode.Indeterminate;
  @Input() hasImage: boolean = true;
  @Input() imagePath: string =
    'https://material.angular.io/assets/img/examples/shiba2.jpg';
  @Input() content: string =
    'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.';
  @Input() cardAction: MtCardActionsContent = {
    aling: MaterialBtnAlign.Start,
    buttons: [
      {
        text: 'LIKE',
      },
      {
        text: 'SHARE',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
