import {
  deleteText,
  findDescendant,
  getLastChildPath,
  moveChildren,
  MoveChildrenOptions,
  PlateEditor,
  TElement,
  TNodeEntry,
  Value,
  withoutNormalizing,
} from '@udecode/plate-core';
import { Path } from 'slate';
import { getListTypes } from '../queries/getListTypes';

export interface MergeListItemIntoListOptions {
  /**
   * List items of the sublist of this node will be moved.
   */
  fromListItem?: TNodeEntry<TElement>;

  /**
   * List items of the list will be moved.
   */
  fromList?: TNodeEntry<TElement>;

  /**
   * List items will be moved in this list.
   */
  toList?: TNodeEntry<TElement>;

  fromStartIndex?: MoveChildrenOptions['fromStartIndex'];

  /**
   * List position where to move the list items.
   */
  toListIndex?: number | null;

  to?: Path;

  /**
   * Delete `fromListItem` sublist if true.
   * @default true
   */
  deleteFromList?: boolean;
}

/**
 * Move the list items of the sublist of `fromListItem` to `toList` (if `fromListItem` is defined).
 * Move the list items of `fromList` to `toList` (if `fromList` is defined).
 */
export const moveListItemsToList = <V extends Value>(
  editor: PlateEditor<V>,
  {
    fromList,
    fromListItem,
    fromStartIndex,
    to: _to,
    toList,
    toListIndex = null,
    deleteFromList = true,
  }: MergeListItemIntoListOptions
) => {
  let fromListPath: Path | undefined;
  let moved;

  withoutNormalizing(editor, () => {
    if (fromListItem) {
      const fromListItemSublist = findDescendant(editor, {
        at: fromListItem[1],
        match: {
          type: getListTypes(editor),
        },
      });
      if (!fromListItemSublist) return 0;

      fromListPath = fromListItemSublist?.[1];
    } else if (fromList) {
      // eslint-disable-next-line prefer-destructuring
      fromListPath = fromList[1];
    } else {
      return;
    }

    let to: Path | null = null;

    if (_to) to = _to;
    if (toList) {
      if (toListIndex !== null) to = toList[1].concat([toListIndex]);
      else {
        const lastChildPath = getLastChildPath(toList);
        to = Path.next(lastChildPath);
      }
    }
    if (!to) return;

    moved = moveChildren(editor, {
      at: fromListPath,
      to,
      fromStartIndex,
    });

    // Remove the empty list
    if (deleteFromList) {
      deleteText(editor, { at: fromListPath });
    }
  });

  return moved;
};
