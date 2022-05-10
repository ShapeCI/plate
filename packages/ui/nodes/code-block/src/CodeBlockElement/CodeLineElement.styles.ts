import {
    createStyles,
    StyledElementProps
} from '@shapeci/plate-styled-components';

export const getCodeLineElementStyles = (props: StyledElementProps) =>
  createStyles(
    { prefixClassNames: 'CodeLineElement', ...props },
    {
      root: [{}],
    }
  );
