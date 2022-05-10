import { getPluginType, PlateEditor } from '@shapeci/plate-core';
import { ELEMENT_CODE_LINE } from '../constants';

export const getCodeLineType = <T = {}>(editor: PlateEditor<T>): string =>
  getPluginType(editor, ELEMENT_CODE_LINE);
