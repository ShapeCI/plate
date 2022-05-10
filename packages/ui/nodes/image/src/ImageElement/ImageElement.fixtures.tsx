/** @jsx jsx */

import { PlateEditor } from '@shapeci/plate-core';
import { jsx } from '@shapeci/plate-test-utils';

jsx;

export const imgInput = ((
  <editor>
    <himg url="https://source.unsplash.com/kFrdX5IeQzI" width="75%">
      <htext />
    </himg>
  </editor>
) as any) as PlateEditor;
