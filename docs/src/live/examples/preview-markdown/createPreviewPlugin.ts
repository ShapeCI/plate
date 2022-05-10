import { createPluginFactory } from '@shapeci/plate';
import { decoratePreview } from './decoratePreview';

export const createPreviewPlugin = createPluginFactory({
  decorate: decoratePreview,
});
