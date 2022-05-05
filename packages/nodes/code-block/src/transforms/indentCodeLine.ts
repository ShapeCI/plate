import {
  getEditorString,
  getRange,
  getStartPoint,
  insertText,
  isExpanded,
  TEditor,
  TNodeEntry,
} from '@udecode/plate-core';
import { Ancestor, Editor, Node } from 'slate';

export interface IndentCodeLineOptions {
  codeBlock: TNodeEntry<Ancestor>;
  codeLine: TNodeEntry<Ancestor | Node>;
}

/**
 * Indent if:
 * - the selection is expanded
 * - the selected code line has no whitespace character
 * Indentation = 2 spaces.
 */
export const indentCodeLine = (
  editor: TEditor,
  { codeLine }: IndentCodeLineOptions
) => {
  const [, codeLinePath] = codeLine;
  const codeLineStart = getStartPoint(editor, codeLinePath);
  if (!isExpanded(editor.selection)) {
    const cursor = editor.selection?.anchor;
    const range = getRange(editor, codeLineStart, cursor);
    const text = getEditorString(editor, range);

    if (/\S/.test(text)) {
      insertText(editor, '  ', { at: editor.selection! });
      return;
    }
  }

  insertText(editor, '  ', { at: codeLineStart });
};
