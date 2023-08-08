import { Box, Typography } from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";

import * as Components from "./components";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Fragment>
      <Typography variant="h1">Core UI Component</Typography>
      <Box
        display="flex"
        p="16px"
        gap="32px"
        flexDirection="row"
        flexWrap="wrap"
      >
        {Object.keys(Components).map((key) => (
          <Typography>{key}</Typography>
        ))}
      </Box>
    </React.Fragment>
  </React.StrictMode>
);
