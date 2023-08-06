import { ComponentsOverrides, ComponentsProps } from "@mui/material";
import { Theme } from "@mui/system";
import { TypographyProps } from "./Typography";

export default {
  styleOverrides: {
    paragraph: { marginBottom: 16 },
    gutterBottom: { marginBottom: 8 },
    noWrap: ({
      ownerState: { wrapLines },
    }: {
      ownerState: TypographyProps;
    }) => ({
      ...(wrapLines && wrapLines > 0
        ? {
            display: "-webkit-box",
            "-webkit-line-clamp": `${wrapLines}`,
            "-webkit-box-orient": "vertical",

            whiteSpace: "normal",
          }
        : {}),
    }),
  } as ComponentsOverrides<Theme>["MuiTypography"],
  defaultProps: {} as ComponentsProps["MuiTypography"],
};
