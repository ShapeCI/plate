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
  Value,
} from '@udecode/plate-core';
import {
    BlockToolbarButton,
    ToolbarButtonProps
} from '@shapeci/plate-ui-toolbar';
import React from 'react';

export const CodeBlockToolbarButton = <V extends Value>({
  id,
  options,
  ...props
}: ToolbarButtonProps & {
  options?: CodeBlockInsertOptions<V>;
}) => {
  const editor = usePlateEditorState(useEventPlateId(id));

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
};
