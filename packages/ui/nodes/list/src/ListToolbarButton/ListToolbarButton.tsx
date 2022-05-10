import {
    getPreventDefaultHandler,
    useEventPlateId,
    usePlateEditorState,
    withPlateEventProvider
} from '@shapeci/plate-core';
import { ELEMENT_UL, getListItemEntry, toggleList } from '@shapeci/plate-list';
import {
    BlockToolbarButton,
    ToolbarButtonProps
} from '@shapeci/plate-ui-toolbar';
import React from 'react';

export const ListToolbarButton = withPlateEventProvider(
  ({
    id,
    type = ELEMENT_UL,
    ...props
  }: ToolbarButtonProps & { type?: string }) => {
    id = useEventPlateId(id);
    const editor = usePlateEditorState(id)!;

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
  }
);
