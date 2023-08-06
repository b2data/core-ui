import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  styled
} from "@mui/material";

export interface TypographyProps
  extends Pick<
    MuiTypographyProps,
    | "align"
    | "children"
    | "component"
    | "gutterBottom"
    | "noWrap"
    | "paragraph"
    | "sx"
    | "color"
    | "variant"
    | "ref"
  > {
  /**
   * @default body1
   */
  variant?: MuiTypographyProps["variant"];
  /**
   * @default inherit
   */
  align?: MuiTypographyProps["align"];
  /**
   * Number of lines after that `...` is shown
   */
  wrapLines?: number;
}

export const Typography = styled(MuiTypography)<TypographyProps>(
  ({ wrapLines }) => ({
    ...(wrapLines && wrapLines > 0
      ? {
          display: "-webkit-box",
          "-webkit-line-clamp": `${wrapLines}`,
          "-webkit-box-orient": "vertical",

          whiteSpace: "normal"
        }
      : {})
  })
);
