import React from "react";

import { SvgIcon, SvgIconProps } from "../../components";

export const H1Icon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"
        />
      </svg>
    </SvgIcon>
  );
};
