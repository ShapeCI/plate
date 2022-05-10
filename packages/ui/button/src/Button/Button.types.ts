import { StyledProps } from '@shapeci/plate-styled-components';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonStyleProps extends ButtonProps {}

export interface ButtonStyles {}

export interface ButtonProps extends ButtonHTMLAttributes<any>, StyledProps {
  size?: number | string;
  px?: number | string;
  py?: number | string;
}
