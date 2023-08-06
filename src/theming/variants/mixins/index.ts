import { CSSProperties } from "@mui/material/styles/createMixins";
import scrollbars from "./scrollbars";

export default {
  scrollbars,
};

declare module "@mui/material/styles" {
  interface Mixins {
    scrollbars?: CSSProperties;
  }
}
