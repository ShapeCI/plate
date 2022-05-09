/** @jsx jsx */

import { Range } from '@shapeci/slate';
import { jsx } from '@udecode/plate-test-utils';
import { createLinkPlugin } from '../../../../../../nodes/link/src/createLinkPlugin';
import { PlateEditor } from '../../../../types/PlateEditor';
import { TDescendant } from '../../../../types/slate/TDescendant';
import { createPlateEditor } from '../../../../utils/createPlateEditor';
import { getBlockAbove } from '../../../queries/getBlockAbove';
import { getNextSiblingNodes } from '../../../queries/getNextSiblingNodes';

jsx;

const input = ((
  <editor>
    <hp>
      <htext>first</htext>
      <ha>
        test
        <cursor />
      </ha>
    </hp>
  </editor>
) as any) as PlateEditor;

const output: TDescendant[] = [];

it('should be', () => {
  const editor = createPlateEditor({
    editor: input,
    plugins: [createLinkPlugin()],
  });

  const above = getBlockAbove(editor) as any;
  expect(
    getNextSiblingNodes(above, (input.selection as Range).anchor.path)
  ).toEqual(output);
});
