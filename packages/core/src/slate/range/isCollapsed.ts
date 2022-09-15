import { Range } from '@shapeci/slate';

/**
 * See {@link Range.isCollapsed}.
 * Return false if `range` is not defined.
 */
export const isCollapsed = (range?: Range | null) =>
  !!range && Range.isCollapsed(range);
