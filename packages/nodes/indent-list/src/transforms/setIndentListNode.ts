import { setNodes, TEditor } from '@shapeci/plate-core';
import { KEY_INDENT } from '@shapeci/plate-indent';
import { Path } from '@shapeci/slate';
import { KEY_LIST_STYLE_TYPE } from '../createIndentListPlugin';
import { ListStyleType } from '../types';

export const setIndentListNode = (
  editor: TEditor,
  {
    listStyleType = ListStyleType.Disc,
    indent = 0,
    at,
  }: {
    listStyleType?: string;
    indent?: number;
    at: Path;
  }
) => {
  const newIndent = indent || indent + 1;

  setNodes(
    editor,
    { [KEY_LIST_STYLE_TYPE]: listStyleType, [KEY_INDENT]: newIndent },
    { at }
  );
};
