/** @jsx jsx */

import { Range } from '@shapeci/slate';
import { jsx } from '@udecode/plate-test-utils';
import { PlateEditor } from '../../../../types/PlateEditor';
import { isPointAtWordEnd } from '../../../queries/index';

jsx;

const input = ((
  <editor>
    <hp>
      test
      <cursor />
      test2
    </hp>
  </editor>
) as any) as PlateEditor;

const at = Range.start(input.selection as Range);

const output = false;

it('should be', () => {
  expect(isPointAtWordEnd(input, { at })).toEqual(output);
});
