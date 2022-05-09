import { Editor, Node, Path, Transforms } from '@shapeci/slate';
import { PlateEditor, TDescendant } from '@udecode/plate-core';

export const removeMentionInput = (editor: PlateEditor, path: Path) =>
  Editor.withoutNormalizing(editor, () => {
    const { trigger } = Node.get(editor, path) as TDescendant;

    Transforms.insertText(editor, trigger, {
      at: { path: [...path, 0], offset: 0 },
    });
    Transforms.unwrapNodes(editor, {
      at: path,
    });
  });
