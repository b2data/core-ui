import React from "react";

import { SvgIcon, SvgIconProps } from "../../components";

export const H6Icon: React.FC<SvgIconProps> = (props) => {
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
          d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"
        />
      </svg>
    </SvgIcon>
  );
};
