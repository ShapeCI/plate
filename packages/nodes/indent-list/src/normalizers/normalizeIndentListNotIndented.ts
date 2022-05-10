import { TEditor, unsetNodes } from '@shapeci/plate-core';
import { KEY_INDENT } from '@shapeci/plate-indent';
import { NodeEntry } from '@shapeci/slate';
import { KEY_LIST_START, KEY_LIST_STYLE_TYPE } from '../createIndentListPlugin';

/**
 * Unset KEY_LIST_STYLE_TYPE, KEY_LIST_START if KEY_INDENT is not defined.
 */
export const normalizeIndentListNotIndented = (
  editor: TEditor,
  [node, path]: NodeEntry
) => {
  if (
    !node[KEY_INDENT] &&
    (node[KEY_LIST_STYLE_TYPE] || node[KEY_LIST_START])
  ) {
    unsetNodes(editor, [KEY_LIST_STYLE_TYPE, KEY_LIST_START], { at: path });
    return true;
  }
};
