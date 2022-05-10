import { TEditor } from '@shapeci/plate-core';
import { NodeEntry } from '@shapeci/slate';
import { KEY_LIST_STYLE_TYPE } from '../createIndentListPlugin';
import { ListStyleType } from '../types';
import { indentList } from './indentList';

/**
 * Set indent list if not set.
 */
export const toggleIndentListSet = (
  editor: TEditor,
  [node]: NodeEntry,
  {
    listStyleType = ListStyleType.Disc,
  }: {
    listStyleType?: string;
  }
) => {
  if (!node[KEY_LIST_STYLE_TYPE]) {
    indentList(editor as any, {
      listStyleType,
    });
    return true;
  }
};
