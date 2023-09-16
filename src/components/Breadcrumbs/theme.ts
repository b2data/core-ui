import { ComponentThemeOverride } from "../types";

const breadcrumbsTheme: ComponentThemeOverride["MuiBreadcrumbs"] = {
  styleOverrides: {
    li: ({ theme }) => ({
      "& a": {
        display: "flex",
        alignItems: "center",
      },
      "& a>.MuiSvgIcon-root": {
        fontSize: "inherit",
        marginRight: 4,
      },
      "& a:not([href])": {
        cursor: "default",
        color: theme.palette.text.disabled,
      },
    }),
  },
  defaultProps: {},
};

export default breadcrumbsTheme;
