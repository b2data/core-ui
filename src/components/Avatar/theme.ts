import { ComponentsOverrides } from "@mui/material";
import { Theme } from "@mui/system";

const sizes: Record<string, number> = {
  small: 24,
  medium: 32,
  large: 38,
};

export default {
  styleOverrides: {
    root: ({ ownerState: { size } }) => ({
      width: sizes[(size as string) || "medium"],
      height: sizes[(size as string) || "medium"],
    }),
  } as ComponentsOverrides<Theme>["MuiAvatar"],
};
