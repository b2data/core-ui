import { ComponentThemeOverride } from "src/types";

const typographyTheme: ComponentThemeOverride["MuiTypography"] = {
  styleOverrides: {
    paragraph: { marginBottom: 16 },
    gutterBottom: { marginBottom: 8 },
    root: ({ ownerState: { wrapLines } }) => {
      if (typeof wrapLines === "number" && wrapLines > 0) {
        return {
          display: "-webkit-box",
          "-webkit-line-clamp": `${wrapLines}`,
          "-webkit-box-orient": "vertical",
          whiteSpace: "normal"
        };
      }
      return undefined;
    }
  }
};

export default typographyTheme;
