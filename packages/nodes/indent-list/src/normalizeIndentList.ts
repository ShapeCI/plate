import { TEditor, withoutNormalizing } from '@shapeci/plate-core';
import { NodeEntry } from '@shapeci/slate';
import { IndentListPlugin } from './createIndentListPlugin';
import { normalizeIndentListNotIndented } from './normalizers/normalizeIndentListNotIndented';
import { normalizeIndentListStart } from './normalizers/normalizeIndentListStart';

export const normalizeIndentList = (
  editor: TEditor,
  { getSiblingIndentListOptions }: IndentListPlugin = {}
) => {
  const { normalizeNode } = editor;

  return ([node, path]: NodeEntry) => {
    const normalized = withoutNormalizing(editor, () => {
      if (normalizeIndentListNotIndented(editor, [node, path])) return true;
      if (
        normalizeIndentListStart(
          editor,
          [node, path],
          getSiblingIndentListOptions
        )
      )
        return true;
    });
    if (normalized) return;

    return normalizeNode([node, path]);
  };
};
