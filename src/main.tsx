import { Box, Typography } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import * as Components from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Fragment>
      <Typography variant="h1">Core UI Component</Typography>
      <Box
        display="grid"
        p="20px"
        gridTemplateColumns="1fr 3fr"
        alignItems="center"
      >
        {Object.entries(Components).map(([key, Component]) => (
          <React.Fragment key={key}>
            <Typography>{key}</Typography>
            <Component />
          </React.Fragment>
        ))}
      </Box>
    </React.Fragment>
  </React.StrictMode>,
);
