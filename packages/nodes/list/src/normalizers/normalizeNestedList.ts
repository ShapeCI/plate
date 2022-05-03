import {
  getParentNode,
  match,
  PlateEditor,
  TElement,
  TNodeEntry,
  Value,
} from '@udecode/plate-core';
import { Ancestor, Editor, Path, Transforms } from 'slate';
import { getListTypes } from '../queries';

// When pasting from e.g. Google Docs, the structure of nested lists like "ul -> ul"
// should be normalized to "ul -> li -> lic + ul".
// In other words, a nested list as a direct children of a list should be moved into a previous list item sibling
export const normalizeNestedList = <V extends Value>(
  editor: PlateEditor<V>,
  { nestedListItem }: { nestedListItem: TNodeEntry<TElement> }
) => {
  const [, path] = nestedListItem;

  const parentNode = getParentNode(editor, path);
  const hasParentList =
    parentNode && match(parentNode[0], { type: getListTypes(editor) });
  if (!hasParentList) {
    return false;
  }

  let previousListItemPath: Path;
  try {
    previousListItemPath = Path.previous(path);
  } catch (e) {
    return false;
  }

  // Previous sibling is the new parent
  const previousSiblingItem = Editor.node(
    editor,
    previousListItemPath
  ) as TNodeEntry<Ancestor>;

  if (previousSiblingItem) {
    const [, previousPath] = previousSiblingItem;
    const newPath = previousPath.concat([1]);

    // Move the current item to the sublist
    Transforms.moveNodes(editor, {
      at: path,
      to: newPath,
    });

    return true;
  }
};
