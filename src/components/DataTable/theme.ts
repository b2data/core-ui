import "@mui/x-data-grid/themeAugmentation";

import { ComponentThemeOverride } from "src/types";

const collapseTheme: ComponentThemeOverride["MuiDataGrid"] = {
  styleOverrides: {
    root: {}
  },
  defaultProps: {}
};

export default collapseTheme;
