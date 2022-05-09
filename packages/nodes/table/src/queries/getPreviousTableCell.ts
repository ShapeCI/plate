import { Editor, NodeEntry, Path } from '@shapeci/slate';
import { TEditor } from '@udecode/plate-core';
import { getCellInPreviousTableRow } from './getCellInPreviousTableRow';

export function getPreviousTableCell(
  editor: TEditor,
  currentCell: NodeEntry,
  currentPath: Path,
  currentRow: NodeEntry
): NodeEntry | undefined {
  try {
    return Editor.node(editor, Path.previous(currentPath));
  } catch (err) {
    const [, currentRowPath] = currentRow;
    return getCellInPreviousTableRow(editor, currentRowPath);
  }
}
