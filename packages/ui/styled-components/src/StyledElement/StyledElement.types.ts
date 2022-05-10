import { PlateRenderElementProps } from '@shapeci/plate-core';
import { Element } from '@shapeci/slate';
import { HTMLAttributes } from 'react';
import { StyledProps } from '../types/StyledProps';

export type StyledElementProps<
  TElement = Element,
  TStyles = {}
> = PlateRenderElementProps<TElement> &
  StyledProps<TStyles> &
  HTMLAttributes<HTMLElement>;
