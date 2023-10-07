import { GridPushPinLeftIcon, GridPushPinRightIcon } from "./icons";

import type { GridIconSlotsComponent } from "../models/gridIconSlotsComponent";

const iconSlots: GridIconSlotsComponent = {
  ColumnMenuPinRightIcon: GridPushPinRightIcon,
  ColumnMenuPinLeftIcon: GridPushPinLeftIcon,
};

const materialSlots = {
  ...iconSlots,
};

export default materialSlots;
