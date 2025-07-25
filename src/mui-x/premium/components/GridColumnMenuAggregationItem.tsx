import * as React from "react";
import PropTypes from "prop-types";
import { GridColumnMenuItemProps, useGridSelector } from "@mui/x-data-grid-pro";
import useId from "@mui/utils/useId";
import { useGridApiContext } from "../hooks/utils/useGridApiContext";
import { useGridRootProps } from "../hooks/utils/useGridRootProps";
import {
  canColumnHaveAggregationFunction,
  getAggregationFunctionLabel,
  getAvailableAggregationFunctions,
} from "../hooks/features/aggregation/gridAggregationUtils";
import { gridAggregationModelSelector } from "../hooks/features/aggregation/gridAggregationSelectors";
import { GridAggregationModel } from "../hooks/features/aggregation/gridAggregationInterfaces";

function GridColumnMenuAggregationItem(props: GridColumnMenuItemProps) {
  const { colDef } = props;
  const apiRef = useGridApiContext();
  const inputRef = React.useRef<any>(null);
  const rootProps = useGridRootProps();
  const id = useId();
  const aggregationModel = useGridSelector(
    apiRef,
    gridAggregationModelSelector,
  );
  const availableAggregationFunctions = React.useMemo(
    () =>
      getAvailableAggregationFunctions({
        aggregationFunctions: rootProps.aggregationFunctions,
        colDef,
        isDataSource: !!rootProps.dataSource,
      }),
    [colDef, rootProps.aggregationFunctions, rootProps.dataSource],
  );
  const { native: isBaseSelectNative = false, ...baseSelectProps } =
    rootProps.slotProps?.baseSelect || {};

  const baseSelectOptionProps = rootProps.slotProps?.baseSelectOption || {};

  const selectedAggregationRule = React.useMemo(() => {
    if (!colDef || !aggregationModel[colDef.field]) {
      return "";
    }
    const aggregationFunctionName = aggregationModel[colDef.field];
    if (
      canColumnHaveAggregationFunction({
        colDef,
        aggregationFunctionName,
        aggregationFunction:
          rootProps.aggregationFunctions[aggregationFunctionName],
        isDataSource: !!rootProps.dataSource,
      })
    ) {
      return aggregationFunctionName;
    }

    return "";
  }, [
    rootProps.aggregationFunctions,
    rootProps.dataSource,
    aggregationModel,
    colDef,
  ]);

  const handleAggregationItemChange = (event: React.ChangeEvent<unknown>) => {
    const newAggregationItem =
      (event.target as HTMLSelectElement | null)?.value || undefined;
    const currentModel = gridAggregationModelSelector(apiRef);
    const { [colDef.field]: columnItem, ...otherColumnItems } = currentModel;
    const newModel: GridAggregationModel =
      newAggregationItem == null
        ? otherColumnItems
        : { ...otherColumnItems, [colDef?.field]: newAggregationItem };

    apiRef.current.setAggregationModel(newModel);
    apiRef.current.hideColumnMenu();
  };

  const label = apiRef.current.getLocaleText("aggregationMenuItemHeader");

  const handleMenuItemKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        inputRef.current.focus();
      }
    },
    [],
  );

  const handleSelectKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (
        event.key === "ArrowDown" ||
        event.key === "ArrowUp" ||
        event.key === " "
      ) {
        event.stopPropagation();
      }
    },
    [],
  );

  return (
    <rootProps.slots.baseMenuItem
      inert
      iconStart={<rootProps.slots.columnMenuAggregationIcon fontSize="small" />}
      onKeyDown={handleMenuItemKeyDown}
    >
      <rootProps.slots.baseSelect
        labelId={`${id}-label`}
        id={`${id}-input`}
        value={selectedAggregationRule}
        label={label}
        onChange={handleAggregationItemChange}
        onKeyDown={handleSelectKeyDown}
        onBlur={(event) => event.stopPropagation()}
        native={isBaseSelectNative}
        fullWidth
        size="small"
        style={{ minWidth: 150 }}
        slotProps={{
          htmlInput: {
            ref: inputRef,
          },
        }}
        {...baseSelectProps}
      >
        <rootProps.slots.baseSelectOption
          {...baseSelectOptionProps}
          native={isBaseSelectNative}
          value=""
        >
          ...
        </rootProps.slots.baseSelectOption>
        {availableAggregationFunctions.map((aggFunc) => (
          <rootProps.slots.baseSelectOption
            {...baseSelectOptionProps}
            key={aggFunc}
            value={aggFunc}
            native={isBaseSelectNative}
          >
            {getAggregationFunctionLabel({
              apiRef,
              aggregationRule: {
                aggregationFunctionName: aggFunc,
                aggregationFunction: rootProps.aggregationFunctions[aggFunc],
              },
            })}
          </rootProps.slots.baseSelectOption>
        ))}
      </rootProps.slots.baseSelect>
    </rootProps.slots.baseMenuItem>
  );
}

GridColumnMenuAggregationItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
} as any;

export { GridColumnMenuAggregationItem };
