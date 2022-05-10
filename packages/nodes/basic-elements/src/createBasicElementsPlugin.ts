import { createBlockquotePlugin } from '@shapeci/plate-block-quote';
import { createCodeBlockPlugin } from '@shapeci/plate-code-block';
import { createPluginFactory } from '@shapeci/plate-core';
import { createHeadingPlugin } from '@shapeci/plate-heading';
import { createParagraphPlugin } from '@shapeci/plate-paragraph';

/**
 * Enables support for basic elements:
 * - Block quote
 * - Code block
 * - Heading
 * - Paragraph
 */
export const createBasicElementsPlugin = createPluginFactory({
  key: 'basicElements',
  plugins: [
    createBlockquotePlugin(),
    createCodeBlockPlugin(),
    createHeadingPlugin(),
    createParagraphPlugin(),
  ],
});
