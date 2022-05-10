import {
    ComboboxState,
    ComboboxStateById,
    ComboboxStoreById,
    NoData,
    TComboboxItem
} from '@shapeci/plate-combobox';
import { RenderFunction } from '@shapeci/plate-core';
import { StyledProps } from '@shapeci/plate-styled-components';
import { CSSProp } from 'styled-components';

export interface ComboboxStyleProps<TData> extends ComboboxProps<TData> {
  highlighted?: boolean;
}

export interface ComboboxStyles {
  item: CSSProp;
  highlightedItem: CSSProp;
}

export interface ComboboxItemProps<TData> {
  item: TComboboxItem<TData>;
}

export interface ComboboxProps<TData = NoData>
  extends Partial<Pick<ComboboxState<TData>, 'items'>>,
    ComboboxStateById<TData>,
    StyledProps<ComboboxStyles> {
  /**
   * Render this component when the combobox is open (useful to inject hooks).
   */
  component?: RenderFunction<{ store: ComboboxStoreById }>;

  /**
   * Render combobox item.
   * @default text
   */
  onRenderItem?: RenderFunction<ComboboxItemProps<TData>>;
}
