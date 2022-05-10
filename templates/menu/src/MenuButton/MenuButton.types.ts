import { StyledProps } from '@shapeci/plate-styled-components';
import { MenuButtonProps as MenuButtonBaseProps } from '@szhsin/react-menu';
import { SVGProps } from 'react';
import { CSSProp } from 'styled-components';

export interface MenuButtonStyleProps extends MenuButtonProps {}

export interface MenuButtonStyles {
  chevron: CSSProp;
}

export interface MenuButtonProps
  extends Omit<MenuButtonBaseProps, 'styles'>,
    StyledProps<MenuButtonStyles> {
  menuButtonStyles?: MenuButtonBaseProps['styles'];
  chevronProps?: SVGProps<SVGSVGElement>;
}
