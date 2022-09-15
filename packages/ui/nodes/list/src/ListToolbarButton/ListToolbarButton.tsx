import {
  getPreventDefaultHandler,
  useEventPlateId,
  usePlateEditorState,
} from '@udecode/plate-core';
import { ELEMENT_UL, getListItemEntry, toggleList } from '@udecode/plate-list';
import {
    BlockToolbarButton,
    ToolbarButtonProps
} from '@shapeci/plate-ui-toolbar';
import React from 'react';

export const ListToolbarButton = ({
  id,
  type = ELEMENT_UL,
  ...props
}: ToolbarButtonProps & { type?: string }) => {
  const editor = usePlateEditorState(useEventPlateId(id));

  const res = !!editor?.selection && getListItemEntry(editor);

  return (
    <BlockToolbarButton
      active={!!res && res.list[0].type === type}
      type={type}
      onMouseDown={
        editor &&
        getPreventDefaultHandler(toggleList, editor, {
          type,
        })
      }
      {...props}
    />
  );
};
