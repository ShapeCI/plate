import { match, PlateEditor } from '@shapeci/plate-core';
import { Ancestor } from '@shapeci/slate';
import { getListTypes } from './getListTypes';

/**
 * Is there a list child in the node.
 */
export const hasListChild = (editor: PlateEditor, node: Ancestor) =>
  node.children.some((n) => match(n, { type: getListTypes(editor) }));
