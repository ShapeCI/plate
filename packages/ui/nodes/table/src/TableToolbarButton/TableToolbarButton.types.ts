import { PlateEditor } from '@shapeci/plate-core';
import { TablePluginOptions } from '@shapeci/plate-table';
import { ToolbarButtonProps } from '@shapeci/plate-ui-toolbar';

export interface TableToolbarButtonProps
  extends ToolbarButtonProps,
    TablePluginOptions {
  transform: (editor: PlateEditor, options: { header?: boolean }) => void;
}
