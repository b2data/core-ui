import { GridPushPinLeftIcon, GridPushPinRightIcon } from "./icons";

import type { GridIconSlotsComponentCustom } from "../models";

const iconSlots: GridIconSlotsComponentCustom = {
  ColumnMenuPinRightIcon: GridPushPinRightIcon,
  ColumnMenuPinLeftIcon: GridPushPinLeftIcon,
};

const materialSlots = {
  ...iconSlots,
};

export default materialSlots;
