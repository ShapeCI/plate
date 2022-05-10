import { usePlateEditorRef } from '@shapeci/plate-core';
import { insertImage } from '@shapeci/plate-image';
import { ToolbarButton, ToolbarButtonProps } from '@shapeci/plate-ui-toolbar';
import React from 'react';

export interface ImageToolbarButtonProps extends ToolbarButtonProps {
  /**
   * Default onMouseDown is getting the image url by calling this promise before inserting the image.
   */
  getImageUrl?: () => Promise<string>;
}

export const ImageToolbarButton = ({
  id,
  getImageUrl,
  ...props
}: ImageToolbarButtonProps) => {
  const editor = usePlateEditorRef(id)!;

  return (
    <ToolbarButton
      onMouseDown={async (event) => {
        if (!editor) return;

        event.preventDefault();

        let url;
        if (getImageUrl) {
          url = await getImageUrl();
        } else {
          url = window.prompt('Enter the URL of the image:');
        }
        if (!url) return;

        insertImage(editor, url);
      }}
      {...props}
    />
  );
};
