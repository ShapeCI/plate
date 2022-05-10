import { getHandler } from '@shapeci/plate-core';
import { getRootProps } from '@shapeci/plate-styled-components';
import { useFocused, useSelected } from '@shapeci/slate-react';
import React from 'react';
import { getMentionInputElementStyles } from './MentionInputElement.styles';
import { MentionInputElementProps } from './MentionInputElement.types';

export const MentionInputElement = (props: MentionInputElementProps) => {
  const { attributes, children, nodeProps, element, as, onClick } = props;

  const rootProps = getRootProps(props);

  const selected = useSelected();
  const focused = useFocused();

  const styles = getMentionInputElementStyles({
    ...props,
    selected,
    focused,
  });

  return (
    <span
      {...attributes}
      as={as}
      data-slate-value={element.value}
      className={styles.root.className}
      css={styles.root.css}
      onClick={getHandler(onClick, element)}
      {...rootProps}
      {...nodeProps}
    >
      {children}
    </span>
  );
};
