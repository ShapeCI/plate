import { ChevronDownIcon } from '@shapeci/plate-ui-button';
import { MenuButton as MenuButtonBase } from '@szhsin/react-menu';
import React, { forwardRef } from 'react';
import { getMenuButtonStyles } from './MenuButton.styles';
import { MenuButtonProps } from './MenuButton.types';

export const MenuButton = forwardRef(
  (
    {
      children,
      menuButtonStyles,
      styles,
      prefixClassNames,
      chevronProps,
      ...props
    }: MenuButtonProps,
    ref
  ) => {
    const { root, chevron } = getMenuButtonStyles({
      styles,
      prefixClassNames,
    });

    return (
      <MenuButtonBase
        ref={ref}
        css={root.css}
        className={root.className}
        styles={menuButtonStyles}
        {...props}
      >
        {children}

        <ChevronDownIcon
          css={chevron?.css}
          className={chevron?.className}
          width={16}
          height={16}
          {...chevronProps}
        />
      </MenuButtonBase>
    );
  }
);
