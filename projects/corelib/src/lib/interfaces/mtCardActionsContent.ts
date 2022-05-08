import { MaterialBtnAlign } from '../models/enums';

export interface MtCardActionsContent {
  aling: 'start' | MaterialBtnAlign;
  buttons: {
    text: string,
    command: () => any
  }[];
}
