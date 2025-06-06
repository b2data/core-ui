import React from "react";

import { SvgIcon, SvgIconProps } from "../../components";

export const HeadingIcon: React.FC<SvgIconProps> = (props) => {
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
          d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"
        />
      </svg>
    </SvgIcon>
  );
};
