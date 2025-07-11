import { GridLocaleText } from "../models/api/gridLocaleTextApi";
import {
  getGridLocalization,
  Localization,
} from "../utils/getGridLocalization";

const svSEGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: "Inga rader",
  noResultsOverlayLabel: "Inga resultat funna.",
  // noColumnsOverlayLabel: 'No columns',
  // noColumnsOverlayManageColumns: 'Manage columns',
  // emptyPivotOverlayLabel: 'Add fields to rows, columns, and values to create a pivot table',

  // Density selector toolbar button text
  toolbarDensity: "Densitet",
  toolbarDensityLabel: "Densitet",
  toolbarDensityCompact: "Kompakt",
  toolbarDensityStandard: "Standard",
  toolbarDensityComfortable: "Luftig",

  // Columns selector toolbar button text
  toolbarColumns: "Kolumner",
  toolbarColumnsLabel: "Välj kolumner",

  // Filters toolbar button text
  toolbarFilters: "Filter",
  toolbarFiltersLabel: "Visa filter",
  toolbarFiltersTooltipHide: "Dölj filter",
  toolbarFiltersTooltipShow: "Visa filter",
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} aktiva filter` : `${count} aktivt filter`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: "Sök…",
  toolbarQuickFilterLabel: "Sök",
  toolbarQuickFilterDeleteIconLabel: "Rensa",

  // Export selector toolbar button text
  toolbarExport: "Exportera",
  toolbarExportLabel: "Exportera",
  toolbarExportCSV: "Ladda ner som CSV",
  toolbarExportPrint: "Skriv ut",
  toolbarExportExcel: "Ladda ner som Excel",

  // Toolbar pivot button
  // toolbarPivot: 'Pivot',

  // Toolbar AI Assistant button
  // toolbarAssistant: 'AI Assistant',

  // Columns management text
  columnsManagementSearchTitle: "Sök",
  columnsManagementNoColumns: "Inga kolumner",
  columnsManagementShowHideAllText: "Visa/Dölj alla",
  columnsManagementReset: "Återställ",
  // columnsManagementDeleteIconLabel: 'Clear',

  // Filter panel text
  filterPanelAddFilter: "Lägg till filter",
  filterPanelRemoveAll: "Ta bort alla",
  filterPanelDeleteIconLabel: "Ta bort",
  filterPanelLogicOperator: "Logisk operator",
  filterPanelOperator: "Operator",
  filterPanelOperatorAnd: "Och",
  filterPanelOperatorOr: "Eller",
  filterPanelColumns: "Kolumner",
  filterPanelInputLabel: "Värde",
  filterPanelInputPlaceholder: "Filtervärde",

  // Filter operators text
  filterOperatorContains: "innehåller",
  filterOperatorDoesNotContain: "innehåller inte",
  filterOperatorEquals: "lika med",
  filterOperatorDoesNotEqual: "inte lika med",
  filterOperatorStartsWith: "börjar med",
  filterOperatorEndsWith: "slutar med",
  filterOperatorIs: "är",
  filterOperatorNot: "är inte",
  filterOperatorAfter: "är efter",
  filterOperatorOnOrAfter: "är på eller efter",
  filterOperatorBefore: "är innan",
  filterOperatorOnOrBefore: "är på eller innan",
  filterOperatorIsEmpty: "är tom",
  filterOperatorIsNotEmpty: "är inte tom",
  filterOperatorIsAnyOf: "är någon av",
  "filterOperator=": "=",
  "filterOperator!=": "!=",
  "filterOperator>": ">",
  "filterOperator>=": ">=",
  "filterOperator<": "<",
  "filterOperator<=": "<=",

  // Header filter operators text
  headerFilterOperatorContains: "Innehåller",
  headerFilterOperatorDoesNotContain: "Innehåller inte",
  headerFilterOperatorEquals: "Lika med",
  headerFilterOperatorDoesNotEqual: "Inte lika med",
  headerFilterOperatorStartsWith: "Börjar med",
  headerFilterOperatorEndsWith: "Slutar med",
  headerFilterOperatorIs: "Är",
  headerFilterOperatorNot: "Är inte",
  headerFilterOperatorAfter: "Är efter",
  headerFilterOperatorOnOrAfter: "Är på eller efter",
  headerFilterOperatorBefore: "Är innan",
  headerFilterOperatorOnOrBefore: "Är på eller innan",
  headerFilterOperatorIsEmpty: "Är tom",
  headerFilterOperatorIsNotEmpty: "Är inte tom",
  headerFilterOperatorIsAnyOf: "Innehåller någon av",
  "headerFilterOperator=": "Lika med",
  "headerFilterOperator!=": "Inte lika med",
  "headerFilterOperator>": "Större än",
  "headerFilterOperator>=": "Större eller lika med",
  "headerFilterOperator<": "Mindre än",
  "headerFilterOperator<=": "Mindre eller lika med",
  // headerFilterClear: 'Clear filter',

  // Filter values text
  filterValueAny: "något",
  filterValueTrue: "sant",
  filterValueFalse: "falskt",

  // Column menu text
  columnMenuLabel: "Meny",
  // columnMenuAriaLabel: (columnName: string) => `${columnName} column menu`,
  columnMenuShowColumns: "Visa kolumner",
  columnMenuManageColumns: "Hantera kolumner",
  columnMenuFilter: "Filtrera",
  columnMenuHideColumn: "Dölj",
  columnMenuUnsort: "Ta bort sortering",
  columnMenuSortAsc: "Sortera stigande",
  columnMenuSortDesc: "Sortera fallande",
  // columnMenuManagePivot: 'Manage pivot',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} aktiva filter` : `${count} aktivt filter`,
  columnHeaderFiltersLabel: "Visa filter",
  columnHeaderSortIconLabel: "Sortera",

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} rader markerade`
      : `${count.toLocaleString()} rad markerad`,

  // Total row amount footer text
  footerTotalRows: "Totalt antal rader:",

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} av ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: "Markering med kryssruta",
  checkboxSelectionSelectAllRows: "Markera alla rader",
  checkboxSelectionUnselectAllRows: "Avmarkera alla rader",
  checkboxSelectionSelectRow: "Markera rad",
  checkboxSelectionUnselectRow: "Avmarkera rad",

  // Boolean cell text
  booleanCellTrueLabel: "ja",
  booleanCellFalseLabel: "nej",

  // Actions cell more text
  actionsCellMore: "mer",

  // Column pinning text
  pinToLeft: "Lås till vänster",
  pinToRight: "Lås till höger",
  unpin: "Lås upp",

  // Tree Data
  treeDataGroupingHeaderName: "Grupp",
  treeDataExpand: "visa underordnade",
  treeDataCollapse: "dölj underordnade",

  // Grouping columns
  groupingColumnHeaderName: "Grupp",
  groupColumn: (name) => `Gruppera efter ${name}`,
  unGroupColumn: (name) => `Sluta gruppera efter ${name}`,

  // Master/detail
  detailPanelToggle: "Växla detaljpanel",
  expandDetailPanel: "Expandera",
  collapseDetailPanel: "Kollapsa",

  // Pagination
  paginationRowsPerPage: "Rader per sida:",
  // paginationDisplayedRows: ({
  //   from,
  //   to,
  //   count,
  //   estimated
  // }) => {
  //   if (!estimated) {
  //     return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
  //   }
  //   const estimatedLabel = estimated && estimated > to ? `around ${estimated}` : `more than ${to}`;
  //   return `${from}–${to} of ${count !== -1 ? count : estimatedLabel}`;
  // },
  paginationItemAriaLabel: (type) => {
    if (type === "first") {
      return "Gå till första sidan";
    }
    if (type === "last") {
      return "Gå till sista sidan";
    }
    if (type === "next") {
      return "Gå till nästa sida";
    }
    // if (type === 'previous') {
    return "Gå till föregående sida";
  },

  // Row reordering text
  rowReorderingHeaderName: "Ordna om rader",

  // Aggregation
  aggregationMenuItemHeader: "Aggregering",
  aggregationFunctionLabelSum: "summa",
  aggregationFunctionLabelAvg: "medel",
  aggregationFunctionLabelMin: "min",
  aggregationFunctionLabelMax: "max",
  aggregationFunctionLabelSize: "antal",

  // Pivot panel
  // pivotToggleLabel: 'Pivot',
  // pivotRows: 'Rows',
  // pivotColumns: 'Columns',
  // pivotValues: 'Values',
  // pivotCloseButton: 'Close pivot settings',
  // pivotSearchButton: 'Search fields',
  // pivotSearchControlPlaceholder: 'Search fields',
  // pivotSearchControlLabel: 'Search fields',
  // pivotSearchControlClear: 'Clear search',
  // pivotNoFields: 'No fields',
  // pivotMenuMoveUp: 'Move up',
  // pivotMenuMoveDown: 'Move down',
  // pivotMenuMoveToTop: 'Move to top',
  // pivotMenuMoveToBottom: 'Move to bottom',
  // pivotMenuRows: 'Rows',
  // pivotMenuColumns: 'Columns',
  // pivotMenuValues: 'Values',
  // pivotMenuOptions: 'Field options',
  // pivotMenuAddToRows: 'Add to Rows',
  // pivotMenuAddToColumns: 'Add to Columns',
  // pivotMenuAddToValues: 'Add to Values',
  // pivotMenuRemove: 'Remove',
  // pivotDragToRows: 'Drag here to create rows',
  // pivotDragToColumns: 'Drag here to create columns',
  // pivotDragToValues: 'Drag here to create values',
  // pivotYearColumnHeaderName: '(Year)',
  // pivotQuarterColumnHeaderName: '(Quarter)',

  // AI Assistant panel
  // aiAssistantPanelTitle: 'AI Assistant',
  // aiAssistantPanelClose: 'Close AI Assistant',
  // aiAssistantPanelNewConversation: 'New conversation',
  // aiAssistantPanelConversationHistory: 'Conversation history',
  // aiAssistantPanelEmptyConversation: 'No prompt history',
  // aiAssistantSuggestions: 'Suggestions',

  // Prompt field
  // promptFieldLabel: 'Prompt',
  // promptFieldPlaceholder: 'Type a prompt…',
  // promptFieldPlaceholderWithRecording: 'Type or record a prompt…',
  // promptFieldPlaceholderListening: 'Listening for prompt…',
  // promptFieldSpeechRecognitionNotSupported: 'Speech recognition is not supported in this browser',
  // promptFieldSend: 'Send',
  // promptFieldRecord: 'Record',
  // promptFieldStopRecording: 'Stop recording',

  // Prompt
  // promptRerun: 'Run again',
  // promptProcessing: 'Processing…',
  // promptAppliedChanges: 'Applied changes',

  // Prompt changes
  // promptChangeGroupDescription: (column: string) => `Group by ${column}`,
  // promptChangeAggregationLabel: (column: string, aggregation: string) => `${column} (${aggregation})`,
  // promptChangeAggregationDescription: (column: string, aggregation: string) => `Aggregate ${column} (${aggregation})`,
  // promptChangeFilterLabel: (column: string, operator: string, value: string) => {
  //   if (operator === 'is any of') {
  //     return `${column} is any of: ${value}`;
  //   }
  //   return `${column} ${operator} ${value}`;
  // },
  // promptChangeFilterDescription: (column: string, operator: string, value: string) => {
  //   if (operator === 'is any of') {
  //     return `Filter where ${column} is any of: ${value}`;
  //   }
  //   return `Filter where ${column} ${operator} ${value}`;
  // },
  // promptChangeSortDescription: (column: string, direction: string) => `Sort by ${column} (${direction})`,
  // promptChangePivotEnableLabel: 'Pivot',
  // promptChangePivotEnableDescription: 'Enable pivot',
  // promptChangePivotColumnsLabel: (count: number) => `Columns (${count})`,
  // promptChangePivotColumnsDescription: (column: string, direction: string) => `${column}${direction ? ` (${direction})` : ''}`,
  // promptChangePivotRowsLabel: (count: number) => `Rows (${count})`,
  // promptChangePivotValuesLabel: (count: number) => `Values (${count})`,
  // promptChangePivotValuesDescription: (column: string, aggregation: string) => `${column} (${aggregation})`,
};

export const svSE: Localization = getGridLocalization(svSEGrid);
