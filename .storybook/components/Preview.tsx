import { AdapterDayjs, DatePickerProvider } from "../../src/components/DatePicker";
import React from "react";

export const Preview: React.FC<any> = ({ children, style }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "16px",
      width: "100%",
      ...style,
    }}
  >
    <DatePickerProvider dateAdapter={AdapterDayjs}>
      {children}
    </DatePickerProvider>
  </div>
);
