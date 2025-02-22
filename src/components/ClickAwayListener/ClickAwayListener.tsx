import {
  ClickAwayListener as MuiClickAwayListener,
  ClickAwayListenerProps as MuiClickAwayListenerProps,
} from "@mui/material";

export interface ClickAwayListenerProps extends MuiClickAwayListenerProps {}

export const ClickAwayListener = (props: ClickAwayListenerProps) => (
  <MuiClickAwayListener {...props} />
);
