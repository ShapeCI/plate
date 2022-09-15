import React from 'react';
import { Value } from '@udecode/plate-core';
import {
    getRootProps,
    StyledElementProps
} from '@shapeci/plate-styled-components';
import React from 'react';
import { getBlockquoteElementStyles } from './BlockquoteElement.styles';

export const BlockquoteElement = <V extends Value>(
  props: StyledElementProps<V>
) => {
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
