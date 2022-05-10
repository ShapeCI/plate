import { StyledElementProps } from '@shapeci/plate-styled-components';

export interface PlaceholderProps extends StyledElementProps {
  placeholder: string;
  hideOnBlur?: boolean;
}
