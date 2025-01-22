import { useMemo } from "react";
import { DataBlockProps, BlockValidModel } from "./models";

const DEFAULT_I18N = {};

const DEFAULT_TOOLS = {};

const DEFAULT_PROPS = {
  // disableMultipleColumnsFiltering: true,
  // disableMultipleColumnsSorting: true,
  // throttleRowsMs: undefined,
  // hideFooterRowCount: false,
  // pagination: true,
  // checkboxSelectionVisibleOnly: false,
  // disableColumnReorder: true,
  // keepColumnPositionIfDraggedOutside: false,
  // signature: "DataGrid",
  // unstable_listView: false,
};

export const useDataBlocksProps = <R extends BlockValidModel>(
  inProps: DataBlockProps<R>,
) => {
  const i18n = useMemo(
    () => ({ ...DEFAULT_I18N, ...inProps.i18n }),
    [inProps.i18n],
  );

  const tools = useMemo(
    () => ({ ...DEFAULT_TOOLS, ...inProps.tools }),
    [inProps.tools],
  );

  return useMemo<DataBlockProps<R>>(
    () => ({
      i18n,
      tools,
      ...DEFAULT_PROPS,
    }),
    [i18n, tools],
  );
};
