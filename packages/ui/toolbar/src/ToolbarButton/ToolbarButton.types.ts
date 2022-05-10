import { AnyObject } from '@shapeci/plate-core';
import { StyledProps } from '@shapeci/plate-styled-components';
import { TippyProps } from '@tippyjs/react';
import { HTMLProps } from 'react';
import { CSSProp } from 'styled-components';

export interface ToolbarButtonProps
  extends StyledProps<{ active?: CSSProp }>,
    AnyObject {
  id?: string;

  /**
   * Is it active.
   */
  active?: boolean;

  /**
   * Icon of the button.
   */
  icon: any;

  /**
   * Tooltip props. If not provided, tooltip is disabled.
   */
  tooltip?: TippyProps;

  onMouseDown?: HTMLProps<HTMLSpanElement>['onMouseDown'];
}
