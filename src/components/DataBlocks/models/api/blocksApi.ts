import { BlocksState } from "../blocksState";
import { BlockCoreApi } from "./blocksCoreApi";

export interface BlocksApiCommon<State extends BlocksState = any>
  extends BlockCoreApi {}
// GridPipeProcessingApi,
// GridDensityApi,
// GridDimensionsApi,
// GridRowApi,
// GridRowsMetaApi,
// GridEditingApi,
// GridParamsApi,
// GridColumnApi,
// GridRowSelectionApi,
// GridSortApi,
// GridPaginationApi,
// GridCsvExportApi,
// GridFocusApi,
// GridFilterApi,
// GridColumnMenuApi,
// GridPreferencesPanelApi,
// GridPrintExportApi,
// GridVirtualizationApi,
// GridLocaleTextApi,
// GridScrollApi,
// GridColumnSpanningApi,
// GridStateApi<State>,
// GridStatePersistenceApi<GridInitialState>,
// GridColumnGroupingApi,
// GridHeaderFilteringApi,
// GridColumnResizeApi
//  {}

export interface GridPrivateOnlyApiCommon<
  Api extends GridApiCommon,
  PrivateApi extends GridPrivateApiCommon,
  Props extends DataGridProcessedProps,
> extends GridCorePrivateApi<Api, PrivateApi, Props>,
    GridStatePrivateApi<PrivateApi["state"]>,
    GridPipeProcessingPrivateApi,
    GridStrategyProcessingApi,
    GridColumnSpanningPrivateApi,
    GridRowsMetaPrivateApi,
    GridDimensionsPrivateApi,
    GridEditingPrivateApi,
    GridLoggerApi,
    GridFocusPrivateApi,
    GridHeaderFilteringPrivateApi,
    GridVirtualizationPrivateApi,
    GridRowProPrivateApi {}

export interface GridPrivateApiCommon
  extends GridApiCommon,
    GridPrivateOnlyApiCommon<
      GridApiCommon,
      GridPrivateApiCommon,
      DataGridProcessedProps
    > {}

export interface BlocksApi
  extends BlocksApiCommon<GridStateCommunity, GridInitialStateCommunity> {}

export interface BlocksPrivateApi
  extends BlocksApi,
    GridPrivateOnlyApiCommon<
      GridApiCommunity,
      GridPrivateApiCommunity,
      DataGridProcessedProps
    >,
    // APIs that are private in Community plan, but public in Pro and Premium plans
    GridRowMultiSelectionApi,
    GridColumnReorderApi,
    GridRowProApi {}
