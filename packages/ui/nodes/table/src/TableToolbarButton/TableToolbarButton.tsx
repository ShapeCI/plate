import {
    getPluginType,
    getPreventDefaultHandler,
    someNode,
    useEventPlateId,
    usePlateEditorState,
    withPlateEventProvider
} from '@shapeci/plate-core';
import { ELEMENT_TABLE } from '@shapeci/plate-table';
import { ToolbarButton } from '@shapeci/plate-ui-toolbar';
import React from 'react';
import { TableToolbarButtonProps } from './TableToolbarButton.types';

export const TableToolbarButton = withPlateEventProvider(
  ({ id, transform, header, ...props }: TableToolbarButtonProps) => {
    id = useEventPlateId(id);
    const editor = usePlateEditorState(id)!;
    const type = getPluginType(editor, ELEMENT_TABLE);

    return (
      <ToolbarButton
        active={
          !!editor?.selection &&
          someNode(editor, {
            match: { type },
          })
        }
        onMouseDown={
          !!type && editor
            ? getPreventDefaultHandler(transform, editor, { header })
            : undefined
        }
        {...props}
      />
    );
  }
);
