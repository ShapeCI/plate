import { StyledProps } from '@shapeci/plate-styled-components';
import { UsePopperPositionOptions } from '@shapeci/plate-ui-popper';
import { ReactNode } from 'react';
import { ToolbarProps } from '../Toolbar/Toolbar.types';

export interface BalloonToolbarStyleProps extends BalloonToolbarProps {}

export interface BalloonToolbarProps extends StyledProps<ToolbarProps> {
  children: ReactNode;

  /**
   * Color theme for the background/foreground.
   */
  theme?: 'dark' | 'light';

  /**
   * Show an arrow pointing to up or down depending on the direction.
   */
  arrow?: boolean;

  portalElement?: Element;

  popperOptions?: Partial<UsePopperPositionOptions>;
}
