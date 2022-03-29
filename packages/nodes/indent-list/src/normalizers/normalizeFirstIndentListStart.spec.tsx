/** @jsx jsx */

import { createPlateEditor } from '@udecode/plate-core';
import { createIndentPlugin } from '@udecode/plate-indent';
import { jsx } from '@udecode/plate-test-utils';
import { Editor } from 'slate';
import { createParagraphPlugin } from '../../../paragraph/src/createParagraphPlugin';
import { createIndentListPlugin } from '../createIndentListPlugin';

jsx;

const input = ((
  <editor>
    <hp>1</hp>
    <hp indent={1} listStyleType="disc" listStart={1}>
      2
    </hp>
  </editor>
) as any) as Editor;

const output = ((
  <editor>
    <hp>1</hp>
    <hp indent={1} listStyleType="disc">
      2
    </hp>
  </editor>
) as any) as Editor;

it('should be', async () => {
  const editor = createPlateEditor({
    editor: input,
    plugins: [
      createParagraphPlugin(),
      createIndentPlugin(),
      createIndentListPlugin(),
    ],
    normalizeInitialValue: true,
  });

  expect(editor.children).toEqual(output.children);
});