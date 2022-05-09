import { NodeEntry, Path } from '@shapeci/slate';
import { getNode, TEditor } from '@udecode/plate-core';
import {
    getSiblingIndentList,
    GetSiblingIndentListOptions
} from './getSiblingIndentList';

/**
 * Get the next indent list.
 */
export const getNextIndentList = (
  editor: TEditor,
  entry: NodeEntry,
  options?: Partial<GetSiblingIndentListOptions>
): NodeEntry | undefined => {
  return getSiblingIndentList(editor, entry, {
    getNextEntry: ([, currPath]) => {
      const nextPath = Path.next(currPath);
      const nextNode = getNode(editor, nextPath);
      if (!nextNode) return;

      return [nextNode, nextPath];
    },
    ...options,
    getPreviousEntry: undefined,
  });
};
