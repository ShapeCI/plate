import { ToggleMarkPlugin, WithPlatePlugin } from '@shapeci/plate-core';
import { ToolbarButtonProps } from '../ToolbarButton/ToolbarButton.types';

export interface MarkToolbarButtonProps
  extends ToolbarButtonProps,
    Pick<WithPlatePlugin, 'type'>,
    Pick<ToggleMarkPlugin, 'clear'> {}
