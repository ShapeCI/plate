import {
    getPluginInjectProps,
    isCollapsed,
    someNode,
    useEventPlateId,
    usePlateEditorState,
    withPlateEventProvider
} from '@shapeci/plate-core';
import { KEY_LINE_HEIGHT, setLineHeight } from '@shapeci/plate-line-height';
import {
    ToolbarButton,
    ToolbarButtonProps,
    ToolbarDropdown
} from '@shapeci/plate-ui-toolbar';
import { ReactEditor } from '@shapeci/slate-react';
import React, { useCallback } from 'react';

export const LineHeightToolbarDropdown = withPlateEventProvider(
  (props: ToolbarButtonProps) => {
    let { id } = props;
    id = useEventPlateId(id);
    const editor = usePlateEditorState(id)!;

    const [open, setOpen] = React.useState(false);

    const { validNodeValues } = getPluginInjectProps(editor, KEY_LINE_HEIGHT);

    const onToggle = useCallback(() => {
      setOpen(!open);
    }, [open, setOpen]);

    const selectHandler = useCallback(
      (lineHeight) => {
        if (editor) {
          ReactEditor.focus(editor);

          setLineHeight(editor, {
            value: lineHeight,
          });
        }
      },
      [editor]
    );

    return (
      <ToolbarDropdown
        control={
          <ToolbarButton
            active={
              isCollapsed(editor?.selection) &&
              someNode(editor!, {
                match: (n) => n[KEY_LINE_HEIGHT] !== undefined,
              })
            }
            {...props}
          />
        }
        open={open}
        onOpen={onToggle}
        onClose={onToggle}
      >
        {validNodeValues &&
          validNodeValues.map((lineHeight) => (
            <div
              style={{ cursor: 'pointer' }}
              key={lineHeight}
              onClick={() => selectHandler(lineHeight)}
            >
              {lineHeight}
            </div>
          ))}
      </ToolbarDropdown>
    );
  }
);
