import { Stack as MuiStack, StackProps as MuiStackProps } from "@mui/material";
import { FC } from "react";

import { OverrideMuiProps } from "src/types";

export interface StackProps
  extends Omit<MuiStackProps, "classes" | "className"> {}

export const Stack: FC<StackProps> = (props) => <MuiStack {...props} />;
