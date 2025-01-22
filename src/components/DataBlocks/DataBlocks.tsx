import React, { forwardRef, Ref } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { DataBlockProps, BlockValidModel } from "./models";
import { useDataBlocksProps } from "./useDataBlocksProps";
import { useDataBlocksComponent } from "./useDataBlocksComponent";

const DataBlocksRaw = forwardRef(function DataBlocks<R extends BlockValidModel>(
  inProps: DataBlockProps<R>,
  ref: Ref<HTMLDivElement>,
) {
  const props = useDataBlocksProps(inProps);
  const privateApiRef = useDataBlocksComponent(props.apiRef, props);

  return (
    <DndProvider backend={HTML5Backend}>
      <DataBlockProvider privateApiRef={privateApiRef} props={props}>
        <DataBlockRenderer sx={props.sx} ref={ref} />
      </DataBlockProvider>
    </DndProvider>
  );
});

interface DataBlocksComponent {
  <R extends BlockValidModel = any>(
    props: DataBlockProps<R> & React.RefAttributes<HTMLDivElement>,
  ): React.JSX.Element;
}

export const DataBlocks = React.memo(DataBlocksRaw) as DataBlocksComponent;
