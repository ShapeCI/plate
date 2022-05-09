import { Editable } from '@shapeci/slate-react';
import React from 'react';
import { usePlate } from '../hooks/usePlate/usePlate';
import { PlateProps } from './Plate';

/**
 * {@link Editable} with plugins support.
 */
export const EditablePlugins = (props: Pick<PlateProps, 'id'>) => {
  const { editableProps } = usePlate(props);

  return <Editable {...editableProps} />;
};
