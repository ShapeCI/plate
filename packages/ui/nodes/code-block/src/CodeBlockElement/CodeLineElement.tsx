import {
    getRootProps,
    StyledElementProps
} from '@shapeci/plate-styled-components';
import React from 'react';
import { getCodeLineElementStyles } from './CodeLineElement.styles';

export const CodeLineElement = (props: StyledElementProps) => {
  const { attributes, children, nodeProps } = props;

  const rootProps = getRootProps(props);
  const { root } = getCodeLineElementStyles(props);

  return (
    <div
      {...attributes}
      css={root.css}
      className={root.className}
      {...rootProps}
      {...nodeProps}
    >
      {children}
    </div>
  );
};
