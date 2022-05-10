import {
    getAbove,
    getPluginType,
    PlateEditor,
    someNode
} from '@shapeci/plate-core';
import { Transforms } from '@shapeci/slate';
import { ELEMENT_TABLE } from '../createTablePlugin';

export const deleteTable = (editor: PlateEditor) => {
  if (
    someNode(editor, {
      match: { type: getPluginType(editor, ELEMENT_TABLE) },
    })
  ) {
    const tableItem = getAbove(editor, {
      match: { type: getPluginType(editor, ELEMENT_TABLE) },
    });
    if (tableItem) {
      Transforms.removeNodes(editor, {
        at: tableItem[1],
      });
    }
  }
};
