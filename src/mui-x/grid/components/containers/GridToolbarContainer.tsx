import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, SxProps, Theme } from "@mui/system";
import composeClasses from "@mui/utils/composeClasses";
import { forwardRef } from "@mui/x-internals/forwardRef";
import { vars } from "../../constants/cssVariables";
import { getDataGridUtilityClass } from "../../constants/gridClasses";
import type { DataGridProcessedProps } from "../../models/props/DataGridProps";
import { useGridRootProps } from "../../hooks/utils/useGridRootProps";
import { Toolbar } from "../toolbarV8";

export type GridToolbarContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  sx?: SxProps<Theme>;
};

type OwnerState = DataGridProcessedProps;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ["toolbarContainer"],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridToolbarContainerRoot = styled(Toolbar, {
  name: "MuiDataGrid",
  slot: "ToolbarContainer",
  shouldForwardProp: (prop) => prop !== "ownerState",
})<{ ownerState: OwnerState }>({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: vars.spacing(1),
  padding: vars.spacing(0.5),
  minHeight: "auto",
});

/**
 * @deprecated Use the {@link https://mui.com/x/react-data-grid/components/toolbar/ Toolbar} component instead. This component will be removed in a future major release.
 */
const GridToolbarContainer = forwardRef<
  HTMLDivElement,
  GridToolbarContainerProps
>(function GridToolbarContainer(props, ref) {
  const { className, children, ...other } = props;
  const rootProps = useGridRootProps();
  const classes = useUtilityClasses(rootProps);
  if (!children) {
    return null;
  }

  return (
    <GridToolbarContainerRoot
      className={clsx(classes.root, className)}
      ownerState={rootProps}
      {...other}
      ref={ref}
    >
      {children}
    </GridToolbarContainerRoot>
  );
});

GridToolbarContainer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { GridToolbarContainer };
