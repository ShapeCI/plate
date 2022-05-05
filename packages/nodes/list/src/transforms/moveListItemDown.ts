import {
  getNode,
  match,
  moveNodes,
  PlateEditor,
  TElement,
  TNodeEntry,
  Value,
  withoutNormalizing,
  wrapNodes,
} from '@udecode/plate-core';
import { Ancestor, Editor, Path } from 'slate';
import { getListTypes } from '../queries';

export interface MoveListItemDownOptions {
  list: TNodeEntry<TElement>;
  listItem: TNodeEntry<TElement>;
}

export const moveListItemDown = <V extends Value>(
  editor: PlateEditor<V>,
  { list, listItem }: MoveListItemDownOptions
) => {
  const [listNode] = list;
  const [, listItemPath] = listItem;

  let previousListItemPath: Path;

  try {
    previousListItemPath = Path.previous(listItemPath);
  } catch (e) {
    return;
  }

  // Previous sibling is the new parent
  const previousSiblingItem = getNode(
    editor,
    previousListItemPath
  ) as TNodeEntry<Ancestor>;

  if (previousSiblingItem) {
    const [previousNode, previousPath] = previousSiblingItem;

    const sublist = previousNode.children.find((n) =>
      match(n, { type: getListTypes(editor) })
    );
    const newPath = previousPath.concat(
      sublist ? [1, sublist.children.length] : [1]
    );

    withoutNormalizing(editor, () => {
      if (!sublist) {
        // Create new sublist
        wrapNodes(
          editor,
          { type: listNode.type, children: [] },
          { at: listItemPath }
        );
      }

      // Move the current item to the sublist
      moveNodes(editor, {
        at: listItemPath,
        to: newPath,
      });
    });
  }
};
