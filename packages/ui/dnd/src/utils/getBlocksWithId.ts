import { EditorNodesOptions, getNodes, TEditor } from '@shapeci/plate-core';
import { Editor } from '@shapeci/slate';

/**
 * Get blocks with an id
 */
export const getBlocksWithId = (
  editor: TEditor,
  options: EditorNodesOptions
) => {
  const _nodes = getNodes(editor, {
    match: (n) => Editor.isBlock(editor, n) && !!n.id,
    ...options,
  });
  return Array.from(_nodes);
};
