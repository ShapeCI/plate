import { Path } from '@shapeci/slate';

/**
 * Is it the first child of the parent
 */
export const isFirstChild = (path: Path) => path[path.length - 1] === 0;
