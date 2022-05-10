import {
    getSelectionText,
    isSelectionExpanded,
    useEditorState,
    useEventEditorSelectors
} from '@shapeci/plate-core';
import {
    getSelectionBoundingClientRect,
    usePopperPosition,
    UsePopperPositionOptions
} from '@shapeci/plate-ui-popper';
import { useFocused } from '@shapeci/slate-react';
import { useEffect, useState } from 'react';

export const useBalloonToolbarPopper = (options: UsePopperPositionOptions) => {
  const focusedEditorId = useEventEditorSelectors.focus();
  const editor = useEditorState();
  const focused = useFocused();

  const [isHidden, setIsHidden] = useState(true);

  const selectionExpanded = editor && isSelectionExpanded(editor);
  const selectionText = editor && getSelectionText(editor);

  useEffect(() => {
    if (
      !selectionExpanded ||
      !selectionText ||
      !focused ||
      editor.id !== focusedEditorId
    ) {
      setIsHidden(true);
    } else if (selectionText && selectionExpanded) {
      setIsHidden(false);
    }
  }, [
    editor.id,
    editor.selection,
    focused,
    focusedEditorId,
    selectionExpanded,
    selectionText,
  ]);

  const popperResult = usePopperPosition({
    isHidden,
    getBoundingClientRect: getSelectionBoundingClientRect,
    ...options,
  });

  const selectionTextLength = selectionText?.length ?? 0;
  const { update } = popperResult;

  useEffect(() => {
    if (selectionTextLength > 0) {
      update?.();
    }
  }, [selectionTextLength, update]);

  return popperResult;
};
