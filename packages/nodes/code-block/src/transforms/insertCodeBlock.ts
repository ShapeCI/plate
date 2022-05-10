import {
    getPluginType,
    InsertNodesOptions,
    isExpanded,
    isSelectionAtBlockStart,
    PlateEditor,
    setNodes,
    someNode,
    TElement,
    wrapNodes
} from '@shapeci/plate-core';
import { ELEMENT_CODE_BLOCK } from '../constants';
import { getCodeLineType } from '../options';

/**
 * Insert a code block: set the node to code line and wrap it with a code block.
 * If the cursor is not at the block start, insert break before.
 */
export const insertCodeBlock = (
  editor: PlateEditor,
  insertNodesOptions: Omit<InsertNodesOptions, 'match'> = {}
) => {
  if (!editor.selection || isExpanded(editor.selection)) return;

  const matchCodeElements = (node: TElement) =>
    node.type === getPluginType(editor, ELEMENT_CODE_BLOCK) ||
    node.type === getCodeLineType(editor);

  if (
    someNode(editor, {
      match: matchCodeElements,
    })
  ) {
    return;
  }

  if (!isSelectionAtBlockStart(editor)) {
    editor.insertBreak();
  }

  setNodes<TElement>(
    editor,
    {
      type: getCodeLineType(editor),
      children: [{ text: '' }],
    },
    insertNodesOptions
  );

  wrapNodes(
    editor,
    {
      type: getPluginType(editor, ELEMENT_CODE_BLOCK),
      children: [],
    },
    insertNodesOptions
  );
};
