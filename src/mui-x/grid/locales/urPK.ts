import { GridLocaleText } from "../models/api/gridLocaleTextApi";
import {
  getGridLocalization,
  Localization,
} from "../utils/getGridLocalization";

const urPKGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: "کوئی قطاریں نہیں",
  noResultsOverlayLabel: "کوئی نتائج نہیں",
  // noColumnsOverlayLabel: 'No columns',
  // noColumnsOverlayManageColumns: 'Manage columns',

  // Density selector toolbar button text
  toolbarDensity: "کثافت",
  toolbarDensityLabel: "کثافت",
  toolbarDensityCompact: "تنگ",
  toolbarDensityStandard: "درمیانہ",
  toolbarDensityComfortable: "مناسب",

  // Columns selector toolbar button text
  toolbarColumns: "کالمز",
  toolbarColumnsLabel: "کالمز کو منتخب کریں",

  // Filters toolbar button text
  toolbarFilters: "فلٹرز",
  toolbarFiltersLabel: "فلٹرز دکھائیں",
  toolbarFiltersTooltipHide: "فلٹرز چھپائیں",
  toolbarFiltersTooltipShow: "فلٹرز دکھائیں",
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} فعال فلٹرز` : `${count} فلٹرز فعال`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: "تلاش کریں۔۔۔",
  toolbarQuickFilterLabel: "تلاش کریں",
  toolbarQuickFilterDeleteIconLabel: "کلئیر کریں",

  // Prompt toolbar field
  // toolbarPromptControlPlaceholder: 'Type a prompt…',
  // toolbarPromptControlWithRecordingPlaceholder: 'Type or record a prompt…',
  // toolbarPromptControlRecordingPlaceholder: 'Listening for prompt…',
  // toolbarPromptControlLabel: 'Prompt input',
  // toolbarPromptControlRecordButtonDefaultLabel: 'Record',
  // toolbarPromptControlRecordButtonActiveLabel: 'Stop recording',
  // toolbarPromptControlSendActionLabel: 'Send',
  // toolbarPromptControlSendActionAriaLabel: 'Send prompt',
  // toolbarPromptControlErrorMessage: 'An error occurred while processing the request. Please try again with a different prompt.',

  // Export selector toolbar button text
  toolbarExport: "ایکسپورٹ",
  toolbarExportLabel: "ایکسپورٹ",
  toolbarExportCSV: "CSV کے طور پر ڈاوٴنلوڈ کریں",
  toolbarExportPrint: "پرنٹ کریں",
  toolbarExportExcel: "ایکسل کے طور پر ڈاوٴنلوڈ کریں",

  // Columns management text
  columnsManagementSearchTitle: "تلاش",
  columnsManagementNoColumns: "کوئی کالم نہیں",
  columnsManagementShowHideAllText: "تمام دکھائیں/چھپائیں",
  columnsManagementReset: "ریسیٹ",
  columnsManagementDeleteIconLabel: "کلئیر",

  // Filter panel text
  filterPanelAddFilter: "نیا فلٹر",
  filterPanelRemoveAll: "سارے ختم کریں",
  filterPanelDeleteIconLabel: "ختم کریں",
  filterPanelLogicOperator: "لاجک آپریٹر",
  filterPanelOperator: "آپریٹر",
  filterPanelOperatorAnd: "اور",
  filterPanelOperatorOr: "یا",
  filterPanelColumns: "کالمز",
  filterPanelInputLabel: "ویلیو",
  filterPanelInputPlaceholder: "ویلیو کو فلٹر کریں",

  // Filter operators text
  filterOperatorContains: "شامل ہے",
  filterOperatorDoesNotContain: "موجود نہیں ہے",
  filterOperatorEquals: "برابر ہے",
  filterOperatorDoesNotEqual: "برابر نہیں ہے",
  filterOperatorStartsWith: "شروع ہوتا ہے",
  filterOperatorEndsWith: "ختم ہوتا ہے",
  filterOperatorIs: "ہے",
  filterOperatorNot: "نہیں",
  filterOperatorAfter: "بعد میں ہے",
  filterOperatorOnOrAfter: "پر یا بعد میں ہے",
  filterOperatorBefore: "پہلے ہے",
  filterOperatorOnOrBefore: "پر یا پہلے ہے",
  filterOperatorIsEmpty: "خالی ہے",
  filterOperatorIsNotEmpty: "خالی نہیں ہے",
  filterOperatorIsAnyOf: "ان میں سے کوئی ہے",
  "filterOperator=": "=",
  "filterOperator!=": "!=",
  "filterOperator>": ">",
  "filterOperator>=": ">=",
  "filterOperator<": "<",
  "filterOperator<=": "<=",

  // Header filter operators text
  headerFilterOperatorContains: "شامل ہے",
  headerFilterOperatorDoesNotContain: "موجود نہیں ہے",
  headerFilterOperatorEquals: "برابر ہے",
  headerFilterOperatorDoesNotEqual: "برابر نہیں ہے",
  headerFilterOperatorStartsWith: "شروع ہوتا ہے",
  headerFilterOperatorEndsWith: "ختم ہوتا ہے",
  headerFilterOperatorIs: "ہے",
  headerFilterOperatorNot: "نہیں ہے",
  headerFilterOperatorAfter: "بعد میں ہے",
  headerFilterOperatorOnOrAfter: "پر یا بعد میں ہے",
  headerFilterOperatorBefore: "پہلے ہے",
  headerFilterOperatorOnOrBefore: "پر یا پہلے ہے",
  headerFilterOperatorIsEmpty: "خالی ہے",
  headerFilterOperatorIsNotEmpty: "خالی نہیں ہے",
  headerFilterOperatorIsAnyOf: "ان میں سے کوئی ہے",
  "headerFilterOperator=": "برابر ہے",
  "headerFilterOperator!=": "برابر نہیں ہے",
  "headerFilterOperator>": "ذیادہ ہے",
  "headerFilterOperator>=": "ذیادہ یا برابر ہے",
  "headerFilterOperator<": "کم ہے",
  "headerFilterOperator<=": "کم یا برابر ہے",
  // headerFilterClear: 'Clear filter',

  // Filter values text
  filterValueAny: "کوئی بھی",
  filterValueTrue: "صحیح",
  filterValueFalse: "غلط",

  // Column menu text
  columnMenuLabel: "مینیو",
  // columnMenuAriaLabel: (columnName: string) => `${columnName} column menu`,
  columnMenuShowColumns: "کالم دکھائیں",
  columnMenuManageColumns: "کالم مینج کریں",
  columnMenuFilter: "فلٹر",
  columnMenuHideColumn: "چھپائیں",
  columnMenuUnsort: "sort ختم کریں",
  columnMenuSortAsc: "ترتیب صعودی",
  columnMenuSortDesc: "ترتیب نزولی",

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} فعال فلٹرز` : `${count} فلٹرز فعال`,
  columnHeaderFiltersLabel: "فلٹرز دکھائیں",
  columnHeaderSortIconLabel: "Sort",

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} منتخب قطاریں`
      : `${count.toLocaleString()} منتخب قطار`,

  // Total row amount footer text
  footerTotalRows: "کل قطاریں:",

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${totalCount.toLocaleString()} میں سے ${visibleCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: "چیک باکس منتخب کریں",
  checkboxSelectionSelectAllRows: "تمام قطاریں منتخب کریں",
  checkboxSelectionUnselectAllRows: "تمام قطاریں نامنتخب کریں ",
  checkboxSelectionSelectRow: "قطار منتخب کریں",
  checkboxSelectionUnselectRow: "قطار نامنتخب کریں",

  // Boolean cell text
  booleanCellTrueLabel: "ہاں",
  booleanCellFalseLabel: "نہیں",

  // Actions cell more text
  actionsCellMore: "ذیادہ",

  // Column pinning text
  pinToLeft: "بائیں جانب pin کریں",
  pinToRight: "دائیں جانب pin کریں",
  unpin: "pin ختم کریں",

  // Tree Data
  treeDataGroupingHeaderName: "گروپ",
  treeDataExpand: "شاخیں دیکھیں",
  treeDataCollapse: "شاخیں چھپائیں",

  // Grouping columns
  groupingColumnHeaderName: "گروپ",
  groupColumn: (name) => `${name} سے گروپ کریں`,
  unGroupColumn: (name) => `${name} سے گروپ ختم کریں`,

  // Master/detail
  detailPanelToggle: "ڈیٹیل پینل کھولیں / بند کریں",
  expandDetailPanel: "پھیلائیں",
  collapseDetailPanel: "تنگ کریں",

  // Pagination
  paginationRowsPerPage: "ایک صفحے پر قطاریں:",
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
      return "پہلے صفحے پر جائیں";
    }
    if (type === "last") {
      return "آخری صفحے پر جائیں";
    }
    if (type === "next") {
      return "اگلے صفحے پر جائیں";
    }
    // if (type === 'previous') {
    return "پچھلے صفحے پر جائیں";
  },

  // Row reordering text
  // rowReorderingHeaderName: 'Row reordering',

  // Aggregation
  aggregationMenuItemHeader: "ایگریگیشن",
  aggregationFunctionLabelSum: "کل",
  aggregationFunctionLabelAvg: "اوسط",
  aggregationFunctionLabelMin: "کم از کم",
  aggregationFunctionLabelMax: "زیادہ سے زیادہ",
  aggregationFunctionLabelSize: "سائز",
};

export const urPK: Localization = getGridLocalization(urPKGrid);
