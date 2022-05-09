import { Editor, NodeEntry, Path } from '@shapeci/slate';
import { TEditor } from '@udecode/plate-core';
import { getCellInNextTableRow } from './getCellInNextTableRow';

export function getNextTableCell(
  editor: TEditor,
  currentCell: NodeEntry,
  currentPath: Path,
  currentRow: NodeEntry
): NodeEntry | undefined {
  try {
    return Editor.node(editor, Path.next(currentPath));
  } catch (err) {
    const [, currentRowPath] = currentRow;
    return getCellInNextTableRow(editor, currentRowPath);
  }
}
