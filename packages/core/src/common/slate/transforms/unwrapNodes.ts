import { Transforms } from 'slate';
import { TEditor, Value } from '../../../types/slate/TEditor';
import { getQueryOptions } from '../../queries/match';
import { ENodeMatchOptions } from '../../types/Editor.types';

export type UnwrapNodesOptions<V extends Value> = Parameters<
  typeof Transforms.unwrapNodes
>[1] &
  ENodeMatchOptions<V>;

/**
 * Unwrap the nodes at a location from a parent node, splitting the parent if
 * necessary to ensure that only the content in the range is unwrapped.
 */
export const unwrapNodes = <V extends Value>(
  editor: TEditor<V>,
  options?: UnwrapNodesOptions<V>
) => {
  Transforms.unwrapNodes(editor as any, getQueryOptions(editor, options));
};
