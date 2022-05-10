import { StyledProps } from '@shapeci/plate-styled-components';
import { HTMLAttributes } from 'react';

export interface ToolbarProps
  extends StyledProps,
    HTMLAttributes<HTMLDivElement> {
  children?: any;
}
