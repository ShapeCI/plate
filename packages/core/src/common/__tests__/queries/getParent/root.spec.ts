import { createEditor } from '@shapeci/slate';
import { getParent } from '../../../queries/getParent';

it('should be', () => {
  expect(getParent(createEditor(), [])).toEqual(undefined);
});
