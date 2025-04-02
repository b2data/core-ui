import path from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      ".storybook": path.resolve(__dirname, "./.storybook"),
      "@mui/x-data-grid": path.resolve(__dirname, "./src/mui-x/grid"),
      "@mui/x-data-grid-pro": path.resolve(__dirname, "./src/mui-x/pro"),
      "@mui/x-data-grid-premium": path.resolve(
        __dirname,
        "./src/mui-x/premium",
      ),
      "@mui/x-internals": path.resolve(__dirname, "./src/mui-x/internals"),
      "@mui/x-date-pickers": path.resolve(__dirname, "./src/mui-x/pickers"),
    },
  },
});
