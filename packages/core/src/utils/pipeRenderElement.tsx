import { DefaultElement } from '@shapeci/slate-react';
import { EditableProps } from '@shapeci/slate-react/dist/components/editable';
import React from 'react';
import { PlateEditor } from '../types/PlateEditor';
import { PlateRenderElementProps } from '../types/PlateRenderElementProps';
import { RenderElement } from '../types/RenderElement';
import { pipeInjectProps } from './pipeInjectProps';
import { pluginRenderElement } from './pluginRenderElement';

/**
 * @see {@link RenderElement}
 */
export const pipeRenderElement = (
  editor: PlateEditor,
  renderElementProp?: EditableProps['renderElement']
): EditableProps['renderElement'] => {
  const renderElements: RenderElement[] = [];

  editor.plugins.forEach((plugin) => {
    if (plugin.isElement) {
      renderElements.push(pluginRenderElement(editor, plugin));
    }
  });

  return (nodeProps) => {
    const props = pipeInjectProps<PlateRenderElementProps>(editor, nodeProps);

    let element;

    renderElements.some((renderElement) => {
      element = renderElement(props as any);
      return !!element;
    });

    if (element) return element;

    if (renderElementProp) {
      return renderElementProp(props);
    }

    return <DefaultElement {...props} />;
  };
};
