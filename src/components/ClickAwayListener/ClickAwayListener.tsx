import {
  ClickAwayListener as MuiClickAwayListener,
  ClickAwayListenerProps as MuiClickAwayListenerProps
} from "@mui/material";
import { FC } from "react";

export interface ClickAwayListenerProps extends MuiClickAwayListenerProps {}

export const ClickAwayListener: FC<ClickAwayListenerProps> = (props) => (
  <MuiClickAwayListener {...props} />
);
