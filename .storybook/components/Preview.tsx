import React from "react";

export const Preview: React.FC<any> = ({ children, style }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "16px",
      ...style,
    }}
  >
    {children}
  </div>
);
