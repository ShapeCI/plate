import { createPluginFactory } from '@shapeci/plate-core';
import { decorateFindReplace } from './decorateFindReplace';
import { FindReplacePlugin } from './types';

export const MARK_SEARCH_HIGHLIGHT = 'search_highlight';

export const createFindReplacePlugin = createPluginFactory<FindReplacePlugin>({
  key: MARK_SEARCH_HIGHLIGHT,
  isLeaf: true,
  decorate: decorateFindReplace,
});
