import { setNodes, TElement } from '@shapeci/plate-core';
import { TodoListItemNodeData } from '@shapeci/plate-list';
import { getRootProps } from '@shapeci/plate-styled-components';
import { ReactEditor, useReadOnly } from '@shapeci/slate-react';
import clsx from 'clsx';
import React from 'react';
import { getTodoListElementStyles } from './TodoListElement.styles';
import { TodoListElementProps } from './TodoListElement.types';

export const TodoListElement = (props: TodoListElementProps) => {
  const { attributes, children, nodeProps, element, editor } = props;

  const rootProps = getRootProps(props);

  const readOnly = useReadOnly();

  const { checked } = element;

  const styles = getTodoListElementStyles({ ...props, checked });

  return (
    <div
      {...attributes}
      css={styles.root.css}
      {...rootProps}
      className={clsx(
        styles.root.className,
        styles.rootChecked?.className,
        rootProps?.className
      )}
    >
      <div
        contentEditable={false}
        css={styles.checkboxWrapper?.css}
        className={styles.checkboxWrapper?.className}
      >
        <input
          data-testid="TodoListElementCheckbox"
          css={styles.checkbox?.css}
          className={styles.checkbox?.className}
          type="checkbox"
          checked={!!checked}
          onChange={(e) => {
            const path = ReactEditor.findPath(editor, element);

            setNodes<TElement<TodoListItemNodeData>>(
              editor,
              { checked: e.target.checked },
              {
                at: path,
              }
            );
          }}
          {...nodeProps}
        />
      </div>
      <span
        css={styles.text?.css}
        className={styles.text?.className}
        contentEditable={!readOnly}
        suppressContentEditableWarning
      >
        {children}
      </span>
    </div>
  );
};
