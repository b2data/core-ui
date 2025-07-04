import * as React from "react";
import PropTypes from "prop-types";
import { forwardRef } from "@mui/x-internals/forwardRef";
import type { GridSlotProps } from "../../models/gridSlotsComponentsProps";
import { useGridRootProps } from "../../hooks/utils/useGridRootProps";
import { useGridApiContext } from "../../hooks/utils/useGridApiContext";
import {
  GridCsvExportOptions,
  GridPrintExportOptions,
} from "../../models/gridExport";
import { GridToolbarExportContainer } from "./GridToolbarExportContainer";

export interface GridExportDisplayOptions {
  /**
   * If `true`, this export option will be removed from the GridToolbarExport menu.
   * @default false
   */
  disableToolbarButton?: boolean;
}

export interface GridExportMenuItemProps<Options extends {}> {
  hideMenu?: () => void;
  options?: Options & GridExportDisplayOptions;
}

export type GridCsvExportMenuItemProps =
  GridExportMenuItemProps<GridCsvExportOptions>;

export type GridPrintExportMenuItemProps =
  GridExportMenuItemProps<GridPrintExportOptions>;

export interface GridToolbarExportProps {
  csvOptions?: GridCsvExportOptions & GridExportDisplayOptions;
  printOptions?: GridPrintExportOptions & GridExportDisplayOptions;
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps?: {
    button?: Partial<GridSlotProps["baseButton"]>;
    tooltip?: Partial<GridSlotProps["baseTooltip"]>;
  };
  // TODO v8: Remove this loophole
  // Refactored from: [key: string]: any;
  [x: `data-${string}`]: string;
}

function GridCsvExportMenuItem(props: GridCsvExportMenuItemProps) {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const { hideMenu, options, ...other } = props;

  return (
    <rootProps.slots.baseMenuItem
      onClick={() => {
        apiRef.current.exportDataAsCsv(options);
        hideMenu?.();
      }}
      {...other}
    >
      {apiRef.current.getLocaleText("toolbarExportCSV")}
    </rootProps.slots.baseMenuItem>
  );
}

GridCsvExportMenuItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  hideMenu: PropTypes.func,
  options: PropTypes.shape({
    allColumns: PropTypes.bool,
    delimiter: PropTypes.string,
    disableToolbarButton: PropTypes.bool,
    escapeFormulas: PropTypes.bool,
    fields: PropTypes.arrayOf(PropTypes.string),
    fileName: PropTypes.string,
    getRowsToExport: PropTypes.func,
    includeColumnGroupsHeaders: PropTypes.bool,
    includeHeaders: PropTypes.bool,
    shouldAppendQuotes: PropTypes.bool,
    utf8WithBom: PropTypes.bool,
  }),
} as any;

function GridPrintExportMenuItem(props: GridPrintExportMenuItemProps) {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const { hideMenu, options, ...other } = props;

  return (
    <rootProps.slots.baseMenuItem
      onClick={() => {
        apiRef.current.exportDataAsPrint(options);
        hideMenu?.();
      }}
      {...other}
    >
      {apiRef.current.getLocaleText("toolbarExportPrint")}
    </rootProps.slots.baseMenuItem>
  );
}

GridPrintExportMenuItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  hideMenu: PropTypes.func,
  options: PropTypes.shape({
    allColumns: PropTypes.bool,
    bodyClassName: PropTypes.string,
    copyStyles: PropTypes.bool,
    disableToolbarButton: PropTypes.bool,
    fields: PropTypes.arrayOf(PropTypes.string),
    fileName: PropTypes.string,
    getRowsToExport: PropTypes.func,
    hideFooter: PropTypes.bool,
    hideToolbar: PropTypes.bool,
    includeCheckboxes: PropTypes.bool,
    pageStyle: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  }),
} as any;

/**
 * @deprecated Use the {@link https://mui.com/x/react-data-grid/components/export/ Export} components instead. This component will be removed in a future major release.
 */
const GridToolbarExport = forwardRef<HTMLButtonElement, GridToolbarExportProps>(
  function GridToolbarExport(props, ref) {
    const {
      csvOptions = {},
      printOptions = {},
      excelOptions,
      ...other
    } = props as typeof props & { excelOptions: any };

    const apiRef = useGridApiContext();

    const preProcessedButtons = apiRef.current
      .unstable_applyPipeProcessors("exportMenu", [], {
        excelOptions,
        csvOptions,
        printOptions,
      })
      .sort((a, b) => (a.componentName > b.componentName ? 1 : -1));

    if (preProcessedButtons.length === 0) {
      return null;
    }

    return (
      <GridToolbarExportContainer {...other} ref={ref}>
        {preProcessedButtons.map((button, index) =>
          React.cloneElement(button.component, { key: index }),
        )}
      </GridToolbarExportContainer>
    );
  },
);

GridToolbarExport.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  csvOptions: PropTypes.object,
  printOptions: PropTypes.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.object,
} as any;

export { GridToolbarExport, GridCsvExportMenuItem, GridPrintExportMenuItem };
