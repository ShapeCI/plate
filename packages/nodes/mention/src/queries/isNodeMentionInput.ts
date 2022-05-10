import { getPluginType, PlateEditor, TDescendant } from '@shapeci/plate-core';
import { ELEMENT_MENTION_INPUT } from '../createMentionPlugin';
import { MentionInputNode } from '../types';

export const isNodeMentionInput = (
  editor: PlateEditor,
  node: TDescendant
): node is MentionInputNode => {
  return node.type === getPluginType(editor, ELEMENT_MENTION_INPUT);
};
