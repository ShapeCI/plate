import { PlateRenderLeafProps } from '@shapeci/plate-core';
import { Text } from '@shapeci/slate';
import { StyledProps } from '../types/StyledProps';

export type StyledLeafProps<
  TText = Text,
  TStyles = {}
> = PlateRenderLeafProps<TText> & StyledProps<TStyles>;
