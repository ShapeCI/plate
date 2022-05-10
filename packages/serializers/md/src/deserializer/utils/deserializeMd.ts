import {
    MARK_BOLD,
    MARK_CODE,
    MARK_ITALIC,
    MARK_STRIKETHROUGH
} from '@shapeci/plate-basic-marks';
import { ELEMENT_BLOCKQUOTE } from '@shapeci/plate-block-quote';
import { ELEMENT_CODE_BLOCK } from '@shapeci/plate-code-block';
import { getPluginType, PlateEditor } from '@shapeci/plate-core';
import {
    ELEMENT_H1,
    ELEMENT_H2,
    ELEMENT_H3,
    ELEMENT_H4,
    ELEMENT_H5,
    ELEMENT_H6
} from '@shapeci/plate-heading';
import { ELEMENT_HR } from '@shapeci/plate-horizontal-rule';
import { ELEMENT_LINK } from '@shapeci/plate-link';
import { ELEMENT_LI, ELEMENT_OL, ELEMENT_UL } from '@shapeci/plate-list';
import { ELEMENT_PARAGRAPH } from '@shapeci/plate-paragraph';
import markdown from 'remark-parse';
import slate from 'remark-slate';
import unified from 'unified';

/**
 * Deserialize content from Markdown format to Slate format.
 * `editor` needs
 */
export const deserializeMd = (editor: PlateEditor, data: string) => {
  const tree: any = unified()
    .use(markdown)
    .use(slate, {
      nodeTypes: {
        paragraph: getPluginType(editor, ELEMENT_PARAGRAPH),
        block_quote: getPluginType(editor, ELEMENT_BLOCKQUOTE),
        link: getPluginType(editor, ELEMENT_LINK),
        inline_code_mark: getPluginType(editor, MARK_CODE),
        emphasis_mark: getPluginType(editor, MARK_ITALIC),
        strong_mark: getPluginType(editor, MARK_BOLD),
        delete_mark: getPluginType(editor, MARK_STRIKETHROUGH),
        // FIXME: underline, subscript superscript not yet supported by remark-slate
        // underline: getPluginType(editor, MARK_UNDERLINE),
        // subscript: getPluginType(editor, MARK_SUBSCRIPT),
        // superscript: getPluginType(editor, MARK_SUPERSCRIPT),
        code_block: getPluginType(editor, ELEMENT_CODE_BLOCK),
        thematic_break: getPluginType(editor, ELEMENT_HR),
        ul_list: getPluginType(editor, ELEMENT_UL),
        ol_list: getPluginType(editor, ELEMENT_OL),
        listItem: getPluginType(editor, ELEMENT_LI),
        heading: {
          1: getPluginType(editor, ELEMENT_H1),
          2: getPluginType(editor, ELEMENT_H2),
          3: getPluginType(editor, ELEMENT_H3),
          4: getPluginType(editor, ELEMENT_H4),
          5: getPluginType(editor, ELEMENT_H5),
          6: getPluginType(editor, ELEMENT_H6),
        },
      },
      linkDestinationKey: 'url',
    })
    .processSync(data);

  return tree.result;
};
