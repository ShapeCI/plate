import { Editor, Location, Point } from '@shapeci/slate';
import { TEditor } from '../../types/slate/TEditor';

/**
 * {@link Editor.isStart}. If point is null, return false.
 */
export const isStart = (
  editor: TEditor,
  point: Point | null | undefined,
  at: Location
): boolean => !!point && Editor.isStart(editor, point, at);
