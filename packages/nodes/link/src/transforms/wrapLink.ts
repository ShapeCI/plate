import { getPluginType, PlateEditor, wrapNodes } from '@shapeci/plate-core';
import { Location } from '@shapeci/slate';
import { ELEMENT_LINK } from '../createLinkPlugin';

/**
 * Wrap selected nodes with a link and collapse at the end.
 */
export const wrapLink = <T = {}>(
  editor: PlateEditor<T>,
  { at, url }: { url: string; at?: Location }
) => {
  wrapNodes(
    editor,
    {
      type: getPluginType(editor, ELEMENT_LINK),
      url,
      children: [],
    },
    { at, split: true }
  );
};
