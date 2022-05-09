/** @jsx jsx */

import { withReact } from '@shapeci/slate-react';
import { mockPlugin } from '@udecode/plate-core';
import { jsx } from '@udecode/plate-test-utils';
import { CONFIG } from '../../../../../../../docs/src/live/config/config';
import { withAutoformat } from '../../../withAutoformat';

jsx;

const input = (
  <editor>
    <hp>
      ~~hello~
      <cursor />
    </hp>
  </editor>
) as any;

const output = (
  <editor>
    <hp>
      <htext strikethrough>hello</htext>
    </hp>
  </editor>
) as any;

it('should autoformat', () => {
  const editor = withAutoformat(
    withReact(input),
    mockPlugin(CONFIG.autoformat)
  );

  editor.insertText('~');

  expect(input.children).toEqual(output.children);
});
