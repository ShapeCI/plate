/** @jsx jsx */

import { createPlateEditor, PlateEditor } from '@shapeci/plate-core';
import { createParagraphPlugin } from '@shapeci/plate-paragraph';
import { jsx } from '@shapeci/plate-test-utils';
import { createMentionPlugin } from '../createMentionPlugin';

jsx;

export type CreateEditorOptions = {
  multipleMentionPlugins?: boolean;
  pluginOptions?: {
    key?: string;
    trigger?: string;
  };
};

export const createEditorWithMentions = (
  state: JSX.Element,
  {
    multipleMentionPlugins,
    pluginOptions: { trigger, key } = {},
  }: CreateEditorOptions = {}
): PlateEditor => {
  const plugins = [
    createParagraphPlugin(),
    createMentionPlugin({ key, options: { trigger } }),
  ];
  if (multipleMentionPlugins) {
    plugins.push(
      createMentionPlugin({ key: 'mention2', options: { trigger: '#' } })
    );
  }

  return createPlateEditor({
    editor: (<editor>{state}</editor>) as any,
    plugins,
  });
};
