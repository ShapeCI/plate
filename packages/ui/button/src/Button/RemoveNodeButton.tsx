import { findNodePath, TElement, useEditorRef } from '@shapeci/plate-core';
import { Transforms } from '@shapeci/slate';
import React from 'react';
import { DeleteIcon } from '../Icon/DeleteIcon';
import { Button } from './Button';
import { ButtonProps } from './Button.types';

export const RemoveNodeButton = ({
  element,
  ...props
}: ButtonProps & { element: TElement }) => {
  const editor = useEditorRef();

  return (
    <Button
      size={24}
      py={4}
      onClick={() => {
        const path = findNodePath(editor, element);
        Transforms.removeNodes(editor, { at: path });
      }}
      {...props}
    >
      <DeleteIcon />
    </Button>
  );
};
