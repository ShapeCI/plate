import {
    getRootProps,
    StyledElementProps
} from '@shapeci/plate-styled-components';
import React from 'react';
import { getBlockquoteElementStyles } from './BlockquoteElement.styles';

export const BlockquoteElement = (props: StyledElementProps) => {
  const { attributes, children, nodeProps } = props;

  const rootProps = getRootProps(props);
  const { root } = getBlockquoteElementStyles(props);

  return (
    <blockquote
      {...attributes}
      css={root.css}
      className={root.className}
      {...rootProps}
      {...nodeProps}
    >
      {children}
    </blockquote>
  );
};
