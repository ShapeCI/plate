import { AnyObject } from '@shapeci/plate-core';
import { StyledProps } from '../types/StyledProps';
import { createStyles } from './createStyles';

export const getStyledNodeStyles = (
  props: Pick<StyledProps, 'styles'> & AnyObject
) =>
  createStyles(props, {
    root: [{}],
  });
