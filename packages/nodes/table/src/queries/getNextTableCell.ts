import { TEditor } from '@shapeci/plate-core';
import { Editor, NodeEntry, Path } from '@shapeci/slate';
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
