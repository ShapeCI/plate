import { findNode, select, TReactEditor } from '@udecode/plate-core';
import { focusEditor } from '@udecode/plate-core/dist/common/slate/react-editor/focusEditor';
import { Editor } from 'slate';

/**
 * Select the block above the selection by id and focus the editor.
 */
export const selectBlockById = (editor: TReactEditor, id: string) => {
  const path = findNode(editor, { at: [], match: { id } })?.[1];
  if (!path) return;

  select(editor, Editor.range(editor, path));
  focusEditor(editor);
};
