import { MtAccordionContent } from './../../../../../corelib/src/lib/interfaces/mtAccordionContent';
import { MtChipContent } from './../../../../../corelib/src/lib/interfaces/mtChipContent';
import { MatDialogActions } from '@angular/material/dialog';
import { MtCardActionsContent } from './../../../../../corelib/src/lib/interfaces/mtCardActionsContent';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MtToggleButtonGroup } from './../../../../../corelib/src/lib/interfaces/mtToggleBtnGroup';
import { MaterialBtnAlign, MaterialButtonType, MaterialColor } from './../../../../../corelib/src/lib/models/enums';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';
import { CheckboxLabelPlace } from 'corelib';
import { noop } from 'rxjs/internal/util/noop';
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  // BUTTONS
  // disabled: boolean = false;
  // label: string = 'Material Button Flat';
  // command: any = () => this.btnCmd()
  // btnColor: MaterialColor = MaterialColor.Primary;

  // TOGGLE
  // selectionType: boolean = false;
  // appearanceType: MatButtonToggleAppearance = 'legacy';
  // toggleBtns: MtToggleButtonGroup[] = [
  //   {
  //     id: 'bold',
  //     icon: 'home', // if you want to render icons
  //     value: 'bold',
  //     label: 'Bold'
  //   },
  //   {
  //     id: 'Italic',
  //     icon: 'favorite', // if you want to render icons
  //     value: 'italic',
  //     label: 'Italic'
  //   },
  //   {
  //     id: 'underline',
  //     icon: 'apple', // if you want to render icons
  //     value: 'underline',
  //     label: 'Underline'
  //   }
  // ];

  // CHECKBOX
  // disabled: boolean = false;
  // labelPosition: CheckboxLabelPlace = CheckboxLabelPlace.Before;
  // color: MaterialColor = MaterialColor.Primary;
  // label: string = 'Check me';
  // checked: boolean = false;

  // CARD
  // title: string = 'Material Card';
  // subTitle: string = 'Material Subtitle';
  // hasButtons: boolean = true;
  // hasImage: boolean = true;
  // //avatar: string = 'example-header-image2'; // css class name
  // hasPrgBar: boolean = false;
  // hasFooter: boolean = true;
  // content: string = 'Material card\'s content.';
  // cardAction: MtCardActionsContent = {
  //   aling: MaterialBtnAlign.End,
  //   buttonsType: MaterialButtonType.Raised,
  //   buttons: [
  //     {
  //       disabled: false,
  //       color: MaterialColor.Basic,
  //       icon: 'home',
  //       text: 'Post',
  //       command: () => console.log('Post clicked')
  //     },
  //     {
  //       disabled: false,
  //       color: MaterialColor.Warn,
  //       icon: 'favorite',
  //       text: 'Hide',
  //       command: () => console.log('Hide clicked')
  //     }
  //   ]
  // }

  // CHIP
  // disabled: boolean = false;
  // label: string = 'Chip Label';
  // placeHolderInput: string = 'Placeholder Input';
  // chipContent: { name: string }[] = [
  //   { name: 'Lemon' },
  //   { name: 'Lime' },
  //   { name: 'Apple' }
  // ];
  // chipValue: string = 'name';

  // EXPANSION PANEL
  panels: MtAccordionContent[] = [
    {
      disabled: false,
      icon: 'account_circle',
      panelTitle: 'Panel 1',
      panelDescription: 'Panel 1 description',
      panelContent: 'This is the first panel.',
      hasActions: true
    },
    {
      disabled: false,
      icon: 'access_alarm',
      panelTitle: 'Panel 2',
      panelDescription: 'Panel 2 description',
      panelContent: 'This is the second panel.',
      hasActions: true
    },
    {
      disabled: false,
      icon: 'adb',
      panelTitle: 'Panel 3',
      panelDescription: 'Panel 3 description',
      panelContent: 'This is the third panel.',
      hasActions: true
    },
    {
      disabled: false,
      icon: 'map',
      panelTitle: 'Panel 4',
      panelDescription: 'Panel 4 description',
      panelContent: 'This is the fourth panel.',
      hasActions: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  btnCmd(): void {
    console.log('Material Button Clicked!');
  }
}
