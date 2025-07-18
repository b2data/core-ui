import { GridLocaleText } from "../models/api/gridLocaleTextApi";
import {
  getGridLocalization,
  Localization,
} from "../utils/getGridLocalization";

const elGRGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: "Δεν υπάρχουν καταχωρήσεις",
  noResultsOverlayLabel: "Δεν βρέθηκαν αποτελέσματα.",
  // noColumnsOverlayLabel: 'No columns',
  // noColumnsOverlayManageColumns: 'Manage columns',
  // emptyPivotOverlayLabel: 'Add fields to rows, columns, and values to create a pivot table',

  // Density selector toolbar button text
  toolbarDensity: "Ύψος σειράς",
  toolbarDensityLabel: "Ύψος σειράς",
  toolbarDensityCompact: "Συμπαγής",
  toolbarDensityStandard: "Προκαθορισμένο",
  toolbarDensityComfortable: "Πλατύ",

  // Columns selector toolbar button text
  toolbarColumns: "Στήλες",
  toolbarColumnsLabel: "Επιλέξτε στήλες",

  // Filters toolbar button text
  toolbarFilters: "Φίλτρα",
  toolbarFiltersLabel: "Εμφάνιση φίλτρων",
  toolbarFiltersTooltipHide: "Απόκρυψη φίλτρων",
  toolbarFiltersTooltipShow: "Εμφάνιση φίλτρων",
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} ενεργά φίλτρα` : `${count} ενεργό φίλτρο`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: "Αναζήτηση…",
  toolbarQuickFilterLabel: "Αναζήτηση",
  toolbarQuickFilterDeleteIconLabel: "Καθαρισμός",

  // Export selector toolbar button text
  toolbarExport: "Εξαγωγή",
  toolbarExportLabel: "Εξαγωγή",
  toolbarExportCSV: "Λήψη ως CSV",
  toolbarExportPrint: "Εκτύπωση",
  toolbarExportExcel: "Λήψη ως Excel",

  // Toolbar pivot button
  // toolbarPivot: 'Pivot',

  // Toolbar AI Assistant button
  // toolbarAssistant: 'AI Assistant',

  // Columns management text
  // columnsManagementSearchTitle: 'Search',
  // columnsManagementNoColumns: 'No columns',
  // columnsManagementShowHideAllText: 'Show/Hide All',
  // columnsManagementReset: 'Reset',
  // columnsManagementDeleteIconLabel: 'Clear',

  // Filter panel text
  filterPanelAddFilter: "Προσθήκη φίλτρου",
  filterPanelRemoveAll: "Αφαίρεση όλων",
  filterPanelDeleteIconLabel: "Διαγραφή",
  filterPanelLogicOperator: "Λογικός τελεστής",
  filterPanelOperator: "Τελεστές",
  filterPanelOperatorAnd: "Καί",
  filterPanelOperatorOr: "Ή",
  filterPanelColumns: "Στήλες",
  filterPanelInputLabel: "Τιμή",
  filterPanelInputPlaceholder: "Τιμή φίλτρου",

  // Filter operators text
  filterOperatorContains: "περιέχει",
  // filterOperatorDoesNotContain: 'does not contain',
  filterOperatorEquals: "ισούται",
  // filterOperatorDoesNotEqual: 'does not equal',
  filterOperatorStartsWith: "ξεκινάει με",
  filterOperatorEndsWith: "τελειώνει με",
  filterOperatorIs: "είναι",
  filterOperatorNot: "δεν είναι",
  filterOperatorAfter: "είναι μετά",
  filterOperatorOnOrAfter: "είναι ίσο ή μετά",
  filterOperatorBefore: "είναι πριν",
  filterOperatorOnOrBefore: "είναι ίσο ή πριν",
  filterOperatorIsEmpty: "είναι κενό",
  filterOperatorIsNotEmpty: "δεν είναι κενό",
  filterOperatorIsAnyOf: "είναι οποιοδήποτε από",
  "filterOperator=": "=",
  "filterOperator!=": "!=",
  "filterOperator>": ">",
  "filterOperator>=": ">=",
  "filterOperator<": "<",
  "filterOperator<=": "<=",

  // Header filter operators text
  headerFilterOperatorContains: "Περιέχει",
  // headerFilterOperatorDoesNotContain: 'Does not contain',
  headerFilterOperatorEquals: "Ισούται",
  // headerFilterOperatorDoesNotEqual: 'Does not equal',
  headerFilterOperatorStartsWith: "Ξεκινάει με",
  headerFilterOperatorEndsWith: "Τελειώνει με",
  headerFilterOperatorIs: "Είναι",
  headerFilterOperatorNot: "Δεν είναι",
  headerFilterOperatorAfter: "Είναι μετά",
  headerFilterOperatorOnOrAfter: "Είναι ίσο ή μετά",
  headerFilterOperatorBefore: "Είναι πριν",
  headerFilterOperatorOnOrBefore: "Είναι ίσο ή πριν",
  headerFilterOperatorIsEmpty: "Είναι κενό",
  headerFilterOperatorIsNotEmpty: "Δεν είναι κενό",
  headerFilterOperatorIsAnyOf: "Είναι οποιοδήποτε από",
  "headerFilterOperator=": "Ισούται",
  "headerFilterOperator!=": "Δεν ισούται",
  "headerFilterOperator>": "Μεγαλύτερο από",
  "headerFilterOperator>=": "Μεγαλύτερο ή ίσο με",
  "headerFilterOperator<": "Μικρότερο από",
  "headerFilterOperator<=": "Μικρότερο ή ίσο με",
  // headerFilterClear: 'Clear filter',

  // Filter values text
  filterValueAny: "οποιοδήποτε",
  filterValueTrue: "αληθές",
  filterValueFalse: "ψευδές",

  // Column menu text
  columnMenuLabel: "Μενού",
  // columnMenuAriaLabel: (columnName: string) => `${columnName} column menu`,
  columnMenuShowColumns: "Εμφάνιση στηλών",
  columnMenuManageColumns: "Διαχείριση στηλών",
  columnMenuFilter: "Φίλτρο",
  columnMenuHideColumn: "Απόκρυψη",
  columnMenuUnsort: "Απενεργοποίηση ταξινόμησης",
  columnMenuSortAsc: "Ταξινόμηση σε αύξουσα σειρά",
  columnMenuSortDesc: "Ταξινόμηση σε φθίνουσα σειρά",
  // columnMenuManagePivot: 'Manage pivot',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} ενεργά φίλτρα` : `${count} ενεργό φίλτρο`,
  columnHeaderFiltersLabel: "Εμφάνιση φίλτρων",
  columnHeaderSortIconLabel: "Ταξινόμηση",

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} επιλεγμένες γραμμές`
      : `${count.toLocaleString()} επιλεγμένη γραμμή`,

  // Total row amount footer text
  footerTotalRows: "Σύνολο Γραμμών:",

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} από ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: "Επιλογή πλαισίου ελέγχου",
  checkboxSelectionSelectAllRows: "Επιλέξτε όλες τις σειρές",
  checkboxSelectionUnselectAllRows: "Καταργήση επιλογής όλων των σειρών",
  checkboxSelectionSelectRow: "Επιλογή γραμμής",
  checkboxSelectionUnselectRow: "Καταργήση επιλογής γραμμής",

  // Boolean cell text
  booleanCellTrueLabel: "ναί",
  booleanCellFalseLabel: "όχι",

  // Actions cell more text
  actionsCellMore: "περισσότερα",

  // Column pinning text
  pinToLeft: "Καρφιτσώμα στα αριστερά",
  pinToRight: "Καρφιτσώμα στα δεξιά",
  unpin: "Ξεκαρφίτσωμα",

  // Tree Data
  treeDataGroupingHeaderName: "Ομαδοποίηση",
  treeDataExpand: "εμφάνιση περιεχομένων",
  treeDataCollapse: "απόκρυψη περιεχομένων",

  // Grouping columns
  groupingColumnHeaderName: "Ομαδοποίηση",
  groupColumn: (name) => `Ομαδοποίηση κατά ${name}`,
  unGroupColumn: (name) => `Διακοπή ομαδοποίησης κατά ${name}`,

  // Master/detail
  detailPanelToggle: "Εναλλαγή πίνακα λεπτομερειών",
  expandDetailPanel: "Ανάπτυξη",
  collapseDetailPanel: "Σύμπτυξη",

  // Pagination
  paginationRowsPerPage: "Γραμμές ανα σελίδα:",
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
      return "Πρώτη σελίδα";
    }
    if (type === "last") {
      return "Τελευταία σελίδα";
    }
    if (type === "next") {
      return "Επόμενη σελίδα";
    }

    // if (type === "previous") {
    return "Προηγούμενη σελίδα";
  },

  // Row reordering text
  rowReorderingHeaderName: "Αναδιάταξη γραμμών",

  // Aggregation
  aggregationMenuItemHeader: "Συσσωμάτωση",
  aggregationFunctionLabelSum: "άθροισμα",
  aggregationFunctionLabelAvg: "μέση τιμή",
  aggregationFunctionLabelMin: "ελάχιστο",
  aggregationFunctionLabelMax: "μέγιστο",
  aggregationFunctionLabelSize: "μέγεθος",

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

export const elGR: Localization = getGridLocalization(elGRGrid);
