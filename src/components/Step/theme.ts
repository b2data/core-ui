import { ComponentThemeOverride } from "../types";

const StepButtonOverride: ComponentThemeOverride["MuiStepButton"] = {
  styleOverrides: {
    root: {
      padding: "12px 8px",
      margin: "-12px -8px",
    },
  },
  defaultProps: {},
};

const StepContentOverride: ComponentThemeOverride["MuiStepContent"] = {
  styleOverrides: {
    root: {
      marginLeft: "10px",
      paddingLeft: "18px",
    },
  },
  defaultProps: {},
};

const StepConnectorOverride: ComponentThemeOverride["MuiStepConnector"] = {
  styleOverrides: {
    root: ({ownerState})=> ({
      marginLeft: ownerState.orientation=== "vertical"? "10px":undefined,
    }),
  },
  defaultProps: {},
};

export { StepButtonOverride, StepContentOverride, StepConnectorOverride };
