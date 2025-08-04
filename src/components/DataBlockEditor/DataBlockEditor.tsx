import { forwardRef, memo, Ref } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import { DataBlockEditorRenderer } from "./components";
import {
  DataBlockBase,
  DataBlockEditorApi,
  DataBlockEditorProps,
} from "./models";
import { DataBlockEditorProvider } from "./store";

const EditorRaw = forwardRef(function DataBlockEditor<R extends DataBlockBase>(
  props: DataBlockEditorProps<R>,
  ref: Ref<DataBlockEditorApi>,
) {
  return (
    <DndProvider backend={HTML5Backend}>
      <DataBlockEditorProvider ref={ref} props={props}>
        <DataBlockEditorRenderer
          sx={props.sx}
          onScroll={props.onScroll}
          editable={props.editable}
          getDataBlockSx={props.getDataBlockSx}
        />
      </DataBlockEditorProvider>
    </DndProvider>
  );
});

export const DataBlockEditor = memo(EditorRaw);
