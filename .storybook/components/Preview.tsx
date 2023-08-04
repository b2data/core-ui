import React from "react";

export const Preview: React.FC<any> = ({ children, style }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "10px",
      ...style,
    }}
  >
    {children}
  </div>
);
