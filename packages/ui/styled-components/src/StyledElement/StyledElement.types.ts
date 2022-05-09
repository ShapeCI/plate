import { Element } from '@shapeci/slate';
import { PlateRenderElementProps } from '@udecode/plate-core';
import { HTMLAttributes } from 'react';
import { StyledProps } from '../types/StyledProps';

export type StyledElementProps<
  TElement = Element,
  TStyles = {}
> = PlateRenderElementProps<TElement> &
  StyledProps<TStyles> &
  HTMLAttributes<HTMLElement>;
