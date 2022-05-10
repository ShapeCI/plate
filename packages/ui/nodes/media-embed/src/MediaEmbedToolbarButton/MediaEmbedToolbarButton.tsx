import { usePlateEditorRef } from '@shapeci/plate-core';
import { insertMediaEmbed } from '@shapeci/plate-media-embed';
import { ToolbarButton, ToolbarButtonProps } from '@shapeci/plate-ui-toolbar';
import React from 'react';

export interface MediaEmbedToolbarButtonProps extends ToolbarButtonProps {
  /**
   * Default onMouseDown is getting the embed url by calling this promise before inserting the embed.
   */
  getEmbedUrl?: () => Promise<string>;
}

export const MediaEmbedToolbarButton = ({
  id,
  getEmbedUrl,
  ...props
}: MediaEmbedToolbarButtonProps) => {
  const editor = usePlateEditorRef(id)!;

  return (
    <ToolbarButton
      onMouseDown={async (event) => {
        if (!editor) return;

        event.preventDefault();

        let url;
        if (getEmbedUrl) {
          url = await getEmbedUrl();
        } else {
          url = window.prompt('Enter the URL of the embed:');
        }
        if (!url) return;

        insertMediaEmbed(editor, { url });
      }}
      {...props}
    />
  );
};
