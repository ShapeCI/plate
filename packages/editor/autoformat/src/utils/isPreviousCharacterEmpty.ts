import { getRangeBefore, getText, TEditor } from '@shapeci/plate-core';
import { Location } from '@shapeci/slate';

export const isPreviousCharacterEmpty = (editor: TEditor, at: Location) => {
  const range = getRangeBefore(editor, at);
  if (range) {
    const text = getText(editor, range);
    if (text) {
      const noWhiteSpaceRegex = new RegExp(`\\S+`);

      return !text.match(noWhiteSpaceRegex);
    }
  }

  return true;
};
