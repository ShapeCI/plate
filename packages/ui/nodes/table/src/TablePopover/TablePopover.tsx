import { RemoveNodeButton } from '@shapeci/plate-ui-button';
import { Popover } from '@shapeci/plate-ui-popover';
import React from 'react';
import { TableElementProps } from '../TableElement/TableElement.types';

export const TablePopover = ({
  element,
  popoverProps,
  children,
}: TableElementProps) => (
  <Popover content={<RemoveNodeButton element={element} />} {...popoverProps}>
    {children}
  </Popover>
);
