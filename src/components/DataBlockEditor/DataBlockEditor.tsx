import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import { DataBlockEditorRenderer } from "./components";
import { DataBlockEditorProps, DataBlockEditorRef } from "./model";
import { DataBlockEditorProvider } from "./store";

export const DataBlockEditor = React.forwardRef<
  DataBlockEditorRef,
  DataBlockEditorProps
>((props, ref) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DataBlockEditorProvider ref={ref} {...props}>
        <DataBlockEditorRenderer sx={props.sx} />
      </DataBlockEditorProvider>
    </DndProvider>
  );
});
