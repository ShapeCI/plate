/** @jsx jsx */

import { jsx } from '@udecode/plate-test-utils';
import { PlateEditor } from '../../../../types/PlateEditor';
import { isCollapsed } from '../../../slate/range/isCollapsed';

jsx;

const input = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as PlateEditor;

const output = true;

it('should be', () => {
  expect(isCollapsed(input.selection)).toBe(output);
});
