import { MtRadioItem } from './../../../../../corelib/src/lib/models/mt-radio-item';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MtListSection } from './../../../../../corelib/src/lib/models/mt-list-section';
import { MtListItem } from './../../../../../corelib/src/lib/models/mt-list-item';
import { MtAccordionContent } from './../../../../../corelib/src/lib/interfaces/mtAccordionContent';
import { MtChipContent } from './../../../../../corelib/src/lib/interfaces/mtChipContent';
import { MatDialogActions } from '@angular/material/dialog';
import { MtCardActionsContent } from './../../../../../corelib/src/lib/interfaces/mtCardActionsContent';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MtToggleButtonGroup } from './../../../../../corelib/src/lib/interfaces/mtToggleBtnGroup';
import {
  MaterialBtnAlign,
  MaterialButtonType,
  MaterialColor,
  ProgrBarMode,
  ProgrSpinnerMode,
  SideNavMode,
  SideNavPosition,
  SlideLabelPosition,
} from './../../../../../corelib/src/lib/models/enums';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleAppearance } from '@angular/material/button-toggle';
import { noop } from 'rxjs/internal/util/noop';
import { MatDialog } from '@angular/material/dialog';
import { MtSelectItem } from 'projects/corelib/src/lib/models/mt-select-item';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  // toolTipMessage: string = 'Hello World tooltip!';

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
  // panels: MtAccordionContent[] = [
  //   {
  //     disabled: false,
  //     icon: 'account_circle',
  //     panelTitle: 'Panel 1',
  //     panelDescription: 'Panel 1 description',
  //     panelContent: 'This is the first panel.',
  //     hasActions: true
  //   },
  //   {
  //     disabled: false,
  //     icon: 'access_alarm',
  //     panelTitle: 'Panel 2',
  //     panelDescription: 'Panel 2 description',
  //     panelContent: 'This is the second panel.',
  //     hasActions: true
  //   },
  //   {
  //     disabled: false,
  //     icon: 'adb',
  //     panelTitle: 'Panel 3',
  //     panelDescription: 'Panel 3 description',
  //     panelContent: 'This is the third panel.',
  //     hasActions: true
  //   },
  //   {
  //     disabled: false,
  //     icon: 'map',
  //     panelTitle: 'Panel 4',
  //     panelDescription: 'Panel 4 description',
  //     panelContent: 'This is the fourth panel.',
  //     hasActions: true
  //   }
  // ];

  // LIST
  // disabled: boolean = false;
  // checkboxSelection: boolean = true;
  // showCheckboxStatus: boolean = true;
  // isSection: boolean = true;
  // isSelectionMultiple: boolean = true;
  // lst: MtListItem[] = [{
  //   id: '1',
  //   label: 'Item 1',
  //   value: '1'
  // },
  // {
  //   id: '2',
  //   label: 'Item 2',
  //   value: '2'
  // },
  // {
  //   id: '3',
  //   label: 'Item 3',
  //   value: '3'
  // },
  // {
  //   id: '4',
  //   label: 'Item 4',
  //   value: '4'
  // }]

  // secs: MtListSection[] = [
  //   {
  //     id: '1',
  //     subheader: 'Folders',
  //     items: [
  //       {
  //         id: '1',
  //         label: 'Photos',
  //         value: 'photos',
  //         icon: 'folder'
  //       },
  //       {
  //         id: '2',
  //         label: 'Recipes',
  //         value: 'recipes',
  //         icon: 'folder'
  //       },
  //       {
  //         id: '3',
  //         label: 'Work',
  //         value: 'work',
  //         icon: 'folder'
  //       }
  //     ]
  //   },
  //   {
  //     id: '2',
  //     subheader: 'Files',
  //     items: [
  //       {
  //         id: '1',
  //         label: 'Vacation Itinerary',
  //         value: 'vacation itinerary',
  //         icon: 'description'
  //       },
  //       {
  //         id: '2',
  //         label: 'Kitchen Remodel',
  //         value: 'kitchen remodel',
  //         icon: 'description'
  //       },
  //       {
  //         id: '3',
  //         label: 'Test',
  //         value: 'test',
  //         icon: 'description'
  //       }
  //     ]
  //   }
  // ];

  // PAGINATOR
  // disabled: boolean = false;
  // length: number = 100;
  // pageSize: number = 5;
  // pageSizeOptions: number[] = [5,10,25,100];

  // PROGRESS
  // color: MaterialColor = MaterialColor.Primary;
  // mode: ProgrBarMode = ProgrBarMode.Indeterminate;
  // value: number = 20;
  // bufferValue: number = 22;

  // SPINNER
  // color: MaterialColor = MaterialColor.Primary;
  // mode: ProgressSpinnerMode = ProgrSpinnerMode.Indeterminate;
  // value: number = 20;
  // diameter: number = 50;
  // strokeWidth: number = 4;

  // RADIO
  // disabled: boolean = false;
  // radioItems: MtRadioItem[] = [
  //   {
  //     id: '1',
  //     label: 'Radio 1',
  //     value: '1'
  //   },
  //   {
  //     id: '2',
  //     label: 'Radio 2',
  //     value: '2'
  //   },
  //   {
  //     id: '3',
  //     label: 'Radio 3',
  //     value: '3'
  //   }
  // ];

  // SELECT
  // disabled: boolean = false;
  // isMultipleSelection: boolean = true;
  // label: string = 'Favourite food';
  // placeholder: string = 'Select an option';
  // selectItems: MtSelectItem[] = [
  //   {
  //     id: '1',
  //     label: 'Extra cheese',
  //     value: 'extra cheese',
  //     disabled: false
  //   },
  //   {
  //     id: '2',
  //     label: 'Mushroom',
  //     value: 'mushroom',
  //     disabled: false
  //   },
  //   {
  //     id: '3',
  //     label: 'Onion',
  //     value: 'onion',
  //     disabled: false
  //   },
  //   {
  //     id: '4',
  //     label: 'Disabled',
  //     value: 'disabled',
  //     disabled: true
  //   },
  // ];

  // SIDENAV
  // mode: SideNavMode = SideNavMode.Push;
  // hasBackdrop: boolean = true;
  // opened: boolean = true;
  // position: SideNavPosition = SideNavPosition.Start;

  // SLIDE
  // disabled: boolean = false;
  // color: ThemePalette = MaterialColor.Primary;
  // checked: boolean = false;
  // label: string = 'Slide me now!';
  // labelPosition: SlideLabelPOsition = SlideLabelPOsition.After;

  // SLIDER
  // disabled: boolean = false;
  // color: ThemePalette = MaterialColor.Primary;
  // isVertical: boolean = false;
  // min: number = 0;
  // max: number = 100;
  // step: number = 1;
  // value: number = 0;

  // TABLE
  // hasPagination: boolean = true;
  // isSelectable: boolean = true;
  // displayedColumns: string[] = [
  //   '#',
  //   'position',
  //   'name',
  //   'weight',
  //   'symbol',
  // ];
  // dataSource: any[] = [
  //   { id: 1, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { id: 2, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { id: 3, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { id: 4, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { id: 5, position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { id: 6, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { id: 7, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { id: 8, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { id: 9, position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { id: 10, position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // ];
  // command: any = () => this.btnCmd()
  // dsCount: number = this.dataSource.length;

  // TREE
  // dataSource = [
  //   {
  //     name: 'Fruit',
  //     expandable: true,
  //     level: 0
  //   },
  //   {
  //     name: 'Apple',
  //     expandable: false,
  //     level: 1,
  //     command: () => console.log('Apple')
  //   },
  //   {
  //     name: 'Banana',
  //     expandable: false,
  //     level: 1,
  //     command: () => console.log('Banana')
  //   },
  //   {
  //     name: 'Vegetables',
  //     expandable: true,
  //     level: 0
  //   },
  //   {
  //     name: 'Green',
  //     expandable: false,
  //     level: 1,
  //     command: () => console.log('Green')
  //   },
  //   {
  //     name: 'Broccoli',
  //     expandable: false,
  //     level: 1,
  //     command: () => console.log('Broccoli')
  //   },
  // ];

  // TOOLBAR
  title: string = 'Application';
  color: MaterialColor = MaterialColor.Basic;

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // this._snackBar.open('This is a test snackbar!', 'Close');
  }

  btnCmd(): void {
    console.log('Material Button Clicked!');
  }
}
