import { PlateEditor } from '@shapeci/plate-core';
import { moveListItems, MoveListItemsOptions } from './moveListItems';

export type UnindentListItemsOptions = Omit<MoveListItemsOptions, 'increase'>;

export const unindentListItems = (
  editor: PlateEditor,
  options: UnindentListItemsOptions = {}
): void => moveListItems(editor, { ...options, increase: false });
