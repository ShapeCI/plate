import {
    createNodeHOC,
    createNodesHOC,
    isCollapsed,
    useEditorState
} from '@shapeci/plate-core';
import { Editor } from '@shapeci/slate';
import { useFocused, useSelected } from '@shapeci/slate-react';
import React from 'react';
import { getPlaceholderStyles } from './Placeholder.styles';
import { PlaceholderProps } from './Placeholder.types';

export const Placeholder = (props: PlaceholderProps) => {
  const {
    children,
    element,
    placeholder,
    hideOnBlur = true,
    nodeProps,
  } = props;

  const focused = useFocused();
  const selected = useSelected();
  const editor = useEditorState();

  const isEmptyBlock = Editor.isEmpty(editor, element);

  const enabled =
    isEmptyBlock &&
    (!hideOnBlur ||
      (isCollapsed(editor.selection) && hideOnBlur && focused && selected));

  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      className: child.props.className,
      nodeProps: {
        ...nodeProps,
        styles: getPlaceholderStyles({ enabled, ...props }),
        placeholder,
      },
    });
  });
};

export const withPlaceholder = createNodeHOC(Placeholder);
export const withPlaceholders = createNodesHOC(Placeholder);
