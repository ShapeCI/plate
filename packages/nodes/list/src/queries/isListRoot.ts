import { PlateEditor, TDescendant } from '@shapeci/plate-core';
import { getListTypes } from './getListTypes';

export const isListRoot = (editor: PlateEditor, node: TDescendant): boolean =>
  getListTypes(editor).includes(node.type);
