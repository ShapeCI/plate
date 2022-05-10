import {
    CodeBlockInsertOptions,
    ELEMENT_CODE_BLOCK,
    insertEmptyCodeBlock
} from '@shapeci/plate-code-block';
import {
    getPluginType,
    getPreventDefaultHandler,
    useEventPlateId,
    usePlateEditorState,
    withPlateEventProvider
} from '@shapeci/plate-core';
import {
    BlockToolbarButton,
    ToolbarButtonProps
} from '@shapeci/plate-ui-toolbar';
import React from 'react';

export const CodeBlockToolbarButton = withPlateEventProvider(
  ({
    id,
    options,
    ...props
  }: ToolbarButtonProps & {
    options?: CodeBlockInsertOptions;
  }) => {
    id = useEventPlateId(id);
    const editor = usePlateEditorState(id)!;
    if (!editor) {
      return null;
    }

    return (
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_CODE_BLOCK)}
        onMouseDown={getPreventDefaultHandler(insertEmptyCodeBlock, editor, {
          insertNodesOptions: { select: true },
          ...options,
        })}
        {...props}
      />
    );
  }
);
