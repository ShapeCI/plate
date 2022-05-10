import {
    CodeBlockPlugin, CODE_BLOCK_LANGUAGES,
    CODE_BLOCK_LANGUAGES_POPULAR, ELEMENT_CODE_BLOCK
} from '@shapeci/plate-code-block';
import { getPluginOptions, useEditorRef } from '@shapeci/plate-core';
import { useReadOnly } from '@shapeci/slate-react';
import React from 'react';
import { CSSProp } from 'styled-components';

export const CodeBlockSelectElement = ({
  lang,
  onChange,
  ...props
}: {
  lang?: string;
  onChange: Function;
  className?: string;
  css?: CSSProp;
}) => {
  const [value, setValue] = React.useState(lang);
  const editor = useEditorRef();

  if (useReadOnly()) return null;

  const { syntaxPopularFirst } = getPluginOptions<CodeBlockPlugin>(
    editor,
    ELEMENT_CODE_BLOCK
  );

  return (
    <select
      value={value}
      style={{ float: 'right' }}
      onClick={(e) => {
        e.stopPropagation();
      }}
      onChange={(e) => {
        onChange(e.target.value);
        setValue(e.target.value);
      }}
      contentEditable={false}
      {...props}
    >
      <option value="">Plain text</option>
      {syntaxPopularFirst &&
        Object.entries(CODE_BLOCK_LANGUAGES_POPULAR).map(([key, val]) => (
          <option key={key} value={key}>
            {val}
          </option>
        ))}
      {Object.entries(CODE_BLOCK_LANGUAGES).map(([key, val]) => (
        <option key={key} value={key}>
          {val}
        </option>
      ))}
    </select>
  );
};
