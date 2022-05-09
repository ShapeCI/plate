import { Text } from '@shapeci/slate';
import { PlateRenderLeafProps } from '@udecode/plate-core';
import { StyledProps } from '../types/StyledProps';

export type StyledLeafProps<
  TText = Text,
  TStyles = {}
> = PlateRenderLeafProps<TText> & StyledProps<TStyles>;
