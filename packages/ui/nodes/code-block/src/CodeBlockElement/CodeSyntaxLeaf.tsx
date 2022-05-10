import { PlatePluginComponent } from '@shapeci/plate-core';
import React from 'react';

export const CodeSyntaxLeaf: PlatePluginComponent = ({
  attributes,
  children,
  leaf,
}) => (
  <span {...attributes}>
    <span className={`prism-token token ${leaf.tokenType}`}>{children}</span>
  </span>
);
