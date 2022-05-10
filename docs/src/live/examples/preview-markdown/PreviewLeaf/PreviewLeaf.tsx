import { RenderLeaf } from '@shapeci/plate';
import React from 'react';
import { getPreviewLeafStyles } from './PreviewLeaf.styles';

export const PreviewLeaf: RenderLeaf = (props) => {
  const { children, attributes, leaf } = props;

  const { root } = getPreviewLeafStyles(leaf as any);

  return (
    <span {...attributes} css={root.css} className={root.className}>
      {children}
    </span>
  );
};
