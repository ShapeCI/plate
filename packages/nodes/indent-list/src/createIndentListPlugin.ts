import { createPluginFactory } from '@shapeci/plate-core';
import { injectIndentListComponent } from './injectIndentListComponent';
import { GetSiblingIndentListOptions } from './queries/getSiblingIndentList';
import { withIndentList } from './withIndentList';

export const KEY_LIST_STYLE_TYPE = 'listStyleType';
export const KEY_LIST_START = 'listStart';

export interface IndentListPlugin {
  getSiblingIndentListOptions?: GetSiblingIndentListOptions;
}

export const createIndentListPlugin = createPluginFactory<IndentListPlugin>({
  key: KEY_LIST_STYLE_TYPE,
  inject: {
    belowComponent: injectIndentListComponent,
  },
  withOverrides: withIndentList,
});
