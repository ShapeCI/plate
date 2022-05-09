import { Path } from '@shapeci/slate';
import { ReactEditor } from '@shapeci/slate-react';
import { TNode } from '../../types/slate/TNode';

/**
 * @see {@link ReactEditor.findPath}
 */
export const findNodePath = (
  editor: ReactEditor,
  node: TNode
): Path | undefined => {
  try {
    return ReactEditor.findPath(editor, node);
  } catch (e) {}
};
