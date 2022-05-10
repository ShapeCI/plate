import { RenderFunction } from '@shapeci/plate-core';
import { StyledElementProps } from '@shapeci/plate-styled-components';
import { TableNodeData } from '@shapeci/plate-table';
import { PopoverProps } from '@shapeci/plate-ui-popover';
import { CSSProp } from 'styled-components';

export interface TableElementStyleProps extends TableElementProps {}

export interface TableElementStyles {
  tbody: CSSProp;
}

export interface TableElementProps
  extends StyledElementProps<TableNodeData, TableElementStyles> {
  /**
   * Transform node column sizes
   */
  popoverProps?: PopoverProps;

  transformColSizes?: (colSizes: number[]) => number[];

  /**
   * An override to render the table container.
   * @default TablePopover
   */
  onRenderContainer?: RenderFunction<TableElementProps>;
}
