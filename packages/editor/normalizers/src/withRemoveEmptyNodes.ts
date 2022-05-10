import { isElement, WithOverride } from '@shapeci/plate-core';
import { Node, NodeEntry, Transforms } from '@shapeci/slate';
import castArray from 'lodash/castArray';
import { RemoveEmptyNodesPlugin } from './createRemoveEmptyNodesPlugin';

/**
 * Remove nodes with empty text.
 */
export const withRemoveEmptyNodes: WithOverride<{}, RemoveEmptyNodesPlugin> = (
  editor,
  { options: { types: _types } }
) => {
  const types = castArray(_types);

  const { normalizeNode } = editor;

  editor.normalizeNode = ([node, path]: NodeEntry) => {
    if (
      isElement(node) &&
      node.type &&
      types.includes(node.type) &&
      Node.string(node) === ''
    ) {
      Transforms.removeNodes(editor, { at: path });
      return;
    }

    normalizeNode([node, path]);
  };

  return editor;
};
