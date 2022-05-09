/** @jsx jsx */

import { withReact } from '@shapeci/slate-react';
import { mockPlugin } from '@udecode/plate-core';
import { jsx } from '@udecode/plate-test-utils';
import { CONFIG } from '../../../../../../../docs/src/live/config/config';
import { withAutoformat } from '../../../withAutoformat';

jsx;

const input = (
  <editor>
    <hul>
      <hli>
        <hp>
          #
          <cursor />
          hello
        </hp>
      </hli>
    </hul>
  </editor>
) as any;

const output = (
  <editor>
    <hh1>hello</hh1>
  </editor>
) as any;

it('should autoformat', () => {
  const editor = withAutoformat(
    withReact(input),
    mockPlugin(CONFIG.autoformat)
  );

  editor.insertText(' ');

  expect(input.children).toEqual(output.children);
});
