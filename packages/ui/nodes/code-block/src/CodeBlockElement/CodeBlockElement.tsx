import {
    CodeBlockNodeData,
    CodeBlockPlugin,
    ELEMENT_CODE_BLOCK
} from '@shapeci/plate-code-block';
import { getPluginOptions, setNodes, TElement } from '@shapeci/plate-core';
import {
    getRootProps,
    StyledElementProps
} from '@shapeci/plate-styled-components';
import { ReactEditor } from '@shapeci/slate-react';
import React from 'react';
import { getCodeBlockElementStyles } from './CodeBlockElement.styles';
import { CodeBlockSelectElement } from './CodeBlockSelectElement';

export const CodeBlockElement = (props: StyledElementProps) => {
  const { attributes, children, nodeProps, element, editor } = props;

  const rootProps = getRootProps(props);

  const { lang } = element;
  const { root } = getCodeBlockElementStyles(props);
  const { syntax } = getPluginOptions<CodeBlockPlugin>(
    editor,
    ELEMENT_CODE_BLOCK
  );
  const codeClassName = lang ? `${lang} language-${lang}` : '';

  return (
    <>
      <pre
        {...attributes}
        css={root.css}
        className={root.className}
        {...rootProps}
        {...nodeProps}
      >
        {syntax && (
          <CodeBlockSelectElement
            data-testid="CodeBlockSelectElement"
            lang={lang}
            onChange={(val: string) => {
              const path = ReactEditor.findPath(editor, element);
              setNodes<TElement<CodeBlockNodeData>>(
                editor,
                { lang: val },
                { at: path }
              );
            }}
          />
        )}
        <code className={codeClassName}>{children}</code>
      </pre>
    </>
  );
};
