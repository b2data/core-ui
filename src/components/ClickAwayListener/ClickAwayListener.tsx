import {
  ClickAwayListener as MuiClickAwayListener,
  ClickAwayListenerProps as MuiClickAwayListenerProps,
} from "@mui/material";
import React from "react";

export interface ClickAwayListenerProps extends MuiClickAwayListenerProps {}

export const ClickAwayListener: React.FC<ClickAwayListenerProps> = (props) => (
  <MuiClickAwayListener {...props} />
);
