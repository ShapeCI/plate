import {
  ErrorHandler,
  getNode,
  insertNodes,
  setNodes,
} from '@udecode/plate-common';
import {
  createPlugin,
  getPlugin,
  isElement,
  TElement,
  WithOverride,
} from '@udecode/plate-core';
import { Path } from 'slate';

interface Rule {
  /**
   * Force the type of the node at the given path
   */
  strictType?: string;
  /**
   * Type of the inserted node at the given path if `strictType` is not provided
   */
  type?: string;
  /**
   * Path where the rule applies
   */
  path: Path;
}

export interface NormalizeTypesPlugin extends ErrorHandler {
  /**
   * Set of rules for the types.
   * For each rule, provide a `path` and either `strictType` or `type`.
   * If there is no node existing at `path`:
   * insert a node with `strictType`.
   * If there is a node existing at `path` but its type is not `strictType` or `type`:
   * set the node type to `strictType` or `type`.
   */
  rules: Rule[];
}

export const KEY_NORMALIZE_TYPES = 'normalizeTypes';

export const withNormalizeTypes = (): WithOverride => (editor) => {
  const { normalizeNode } = editor;

  const { rules, onError } = getPlugin<NormalizeTypesPlugin>(
    editor,
    KEY_NORMALIZE_TYPES
  );

  editor.normalizeNode = ([currentNode, currentPath]) => {
    if (!currentPath.length) {
      const endCurrentNormalizationPass = rules.some(
        ({ strictType, type, path }) => {
          const node = getNode(editor, path);

          if (node) {
            if (strictType && isElement(node) && node.type !== strictType) {
              setNodes<TElement>(
                editor,
                { type: strictType },
                {
                  at: path,
                }
              );
              return true;
            }
          } else {
            try {
              insertNodes<TElement>(
                editor,
                {
                  type: strictType ?? type!,
                  children: [{ text: '' }],
                },
                { at: path }
              );
              return true;
            } catch (err) {
              onError?.(err);
            }
          }

          return false;
        }
      );

      if (endCurrentNormalizationPass) {
        return;
      }
    }

    return normalizeNode([currentNode, currentPath]);
  };

  return editor;
};

/**
 * @see {@link withNormalizeTypes}
 */
export const createNormalizeTypesPlugin = createPlugin<NormalizeTypesPlugin>({
  key: KEY_NORMALIZE_TYPES,
  withOverrides: withNormalizeTypes(),
  rules: [],
});