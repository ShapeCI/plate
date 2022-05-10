import { PlateEditor } from '@shapeci/plate-core';
import { findMentionInput } from './findMentionInput';

export const isSelectionInMentionInput = (editor: PlateEditor) =>
  findMentionInput(editor) !== undefined;
