import { PlateEditor } from '@shapeci/plate-core';
import { moveListItems } from './moveListItems';

export const indentListItems = (editor: PlateEditor) => {
  moveListItems(editor, { increase: true });
};
