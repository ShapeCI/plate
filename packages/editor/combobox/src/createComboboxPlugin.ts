import { createPluginFactory } from '@shapeci/plate-core';
import { onChangeCombobox } from './onChangeCombobox';
import { onKeyDownCombobox } from './onKeyDownCombobox';

export const KEY_COMBOBOX = 'combobox';

export const createComboboxPlugin = createPluginFactory({
  key: KEY_COMBOBOX,
  handlers: {
    onChange: onChangeCombobox,
    onKeyDown: onKeyDownCombobox,
  },
});
