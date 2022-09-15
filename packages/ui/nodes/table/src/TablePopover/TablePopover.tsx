import { RemoveNodeButton } from '@shapeci/plate-ui-button';
import { Popover } from '@shapeci/plate-ui-popover';
import React from 'react';
import { useElement } from '@udecode/plate-core';
import { ElementPopover, PopoverProps } from '@udecode/plate-floating';
import { RemoveNodeButton } from '@udecode/plate-ui-button';
import { floatingButtonCss, floatingRootCss } from '@udecode/plate-ui-toolbar';

export const TablePopover = ({ children, ...props }: PopoverProps) => {
  const element = useElement();

  return (
    <ElementPopover
      content={
        <RemoveNodeButton
          element={element}
          css={floatingButtonCss}
          contentEditable={false}
        />
      }
      css={floatingRootCss}
      {...props}
    >
      {children}
    </ElementPopover>
  );
};
