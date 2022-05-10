import {
    getPluginType,
    someNode,
    useEventPlateId,
    usePlateEditorState,
    withPlateEventProvider
} from '@shapeci/plate-core';
import { ELEMENT_LINK, getAndUpsertLink } from '@shapeci/plate-link';
import { ToolbarButton, ToolbarButtonProps } from '@shapeci/plate-ui-toolbar';
import React from 'react';

export interface LinkToolbarButtonProps extends ToolbarButtonProps {
  /**
   * Default onMouseDown is getting the link url by calling this promise before inserting the image.
   */
  getLinkUrl?: (prevUrl: string | null) => Promise<string | null>;
}

export const LinkToolbarButton = withPlateEventProvider(
  ({ id, getLinkUrl, ...props }: LinkToolbarButtonProps) => {
    id = useEventPlateId(id);
    const editor = usePlateEditorState(id)!;

    const type = getPluginType(editor, ELEMENT_LINK);
    const isLink = !!editor?.selection && someNode(editor, { match: { type } });

    return (
      <ToolbarButton
        active={isLink}
        onMouseDown={async (event) => {
          if (!editor) return;

          event.preventDefault();
          getAndUpsertLink(editor, getLinkUrl);
        }}
        {...props}
      />
    );
  }
);
