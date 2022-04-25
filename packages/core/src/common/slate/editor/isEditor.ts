import { Editor } from 'slate';
import { TEditor, Value } from '../../../types/slate/TEditor';

/**
 * Check if a value is an `Editor` object.
 */
export const isEditor = (value: any): value is TEditor<Value> =>
  Editor.isEditor(value);
