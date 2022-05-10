import { createStyles, StyledProps } from '@shapeci/plate-styled-components';
// import { getButtonStyles } from '@shapeci/plate-ui-button';
import tw from 'twin.macro';
import { MenuButtonStyles } from './MenuButton.types';

export const getMenuButtonStyles = (props: StyledProps<MenuButtonStyles>) => {
  // const { root } = getButtonStyles(props);

  return createStyles(
    { prefixClassNames: 'MenuButton', ...props },
    {
      // root: [...root.css],
      root: [],
      chevron: tw`ml-1`,
    }
  );
};
