import { EditableProps } from '@shapeci/slate-react/dist/components/editable';
import omit from 'lodash/omit';
import { useMemo } from 'react';
import { useDeepCompareMemo } from 'use-deep-compare';
import { PlateProps } from '../../components/Plate';
import { usePlateSelectors } from '../../stores/plate/platesStore';
import { usePlateEditorRef } from '../../stores/plate/selectors/usePlateEditorRef';
import { DOM_HANDLERS } from '../../utils/dom-attributes';
import { pipeDecorate } from '../../utils/pipeDecorate';
import { pipeHandler } from '../../utils/pipeHandler';
import { pipeRenderElement } from '../../utils/pipeRenderElement';
import { pipeRenderLeaf } from '../../utils/pipeRenderLeaf';

export const useEditableProps = ({
  id = 'main',
}: Pick<PlateProps, 'id'>): EditableProps => {
  const editor = usePlateEditorRef(id);
  const keyPlugins = usePlateSelectors(id).keyPlugins();
  const editableProps = usePlateSelectors(id).editableProps();
  const storeDecorate = usePlateSelectors(id).decorate();
  const storeRenderLeaf = usePlateSelectors(id).renderLeaf();
  const storeRenderElement = usePlateSelectors(id).renderElement();

  const isValid = editor && !!keyPlugins;

  const decorate = useMemo(() => {
    if (!isValid) return;

    return pipeDecorate(editor, storeDecorate ?? editableProps?.decorate);
  }, [editableProps?.decorate, editor, isValid, storeDecorate]);

  const renderElement = useMemo(() => {
    if (!isValid) return;

    return pipeRenderElement(
      editor,
      storeRenderElement ?? editableProps?.renderElement
    );
  }, [editableProps?.renderElement, editor, isValid, storeRenderElement]);

  const renderLeaf = useMemo(() => {
    if (!isValid) return;

    return pipeRenderLeaf(editor, storeRenderLeaf ?? editableProps?.renderLeaf);
  }, [editableProps?.renderLeaf, editor, isValid, storeRenderLeaf]);

  const props: EditableProps = useDeepCompareMemo(() => {
    if (!isValid) return {};

    const _props: EditableProps = {
      decorate,
      renderElement,
      renderLeaf,
    };

    DOM_HANDLERS.forEach((handlerKey) => {
      const handler = pipeHandler(editor, {
        editableProps,
        handlerKey,
      }) as any;

      if (handler) {
        _props[handlerKey] = handler;
      }
    });

    return _props;
  }, [decorate, editableProps, isValid, renderElement, renderLeaf]);

  return useDeepCompareMemo(
    () => ({
      ...omit(editableProps, [...DOM_HANDLERS, 'renderElement', 'renderLeaf']),
      ...props,
    }),
    [editableProps, props]
  );
};
