import { StyledProps } from '@shapeci/plate-styled-components';
import { MenuProps as MenuBaseProps } from '@szhsin/react-menu';
import { HTMLAttributes } from 'react';

export interface MenuStyleProps extends MenuProps {}

export interface MenuStyles {}

export interface MenuProps extends StyledProps<MenuStyles>, MenuBaseProps {
  rootProps?: HTMLAttributes<HTMLDivElement>;
}
