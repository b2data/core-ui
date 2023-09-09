import { Chip as MuiChip, ChipProps as MuiChipProps } from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "../types";

export interface ChipProps
  extends OverrideMuiProps<
    MuiChipProps,
    | "avatar"
    | "clickable"
    | "deleteIcon"
    | "icon"
    | "label"
    | "onDelete"
    | "sx"
    | "disabled"
    | "color"
    | "size"
    | "variant"
    | "children"
    | "component"
  > {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: MuiChipProps["disabled"];
  /**
   * The color of the component.
   * @default default
   */
  color?: MuiChipProps["color"];
  /**
   * The size of the component.
   * @default medium
   */
  size?: MuiChipProps["size"];
  /**
   * The variant to use.
   * @default filled
   */
  variant?: MuiChipProps["variant"];
}

export const Chip: FC<ChipProps> = (props) => <MuiChip {...props} />;
