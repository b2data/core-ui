import React from "react";

import { SvgIcon, SvgIconProps } from "../components";

export const ListNumberedIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <line
          x1="12"
          x2="19"
          y1="7"
          y2="7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <line
          x1="12"
          x2="19"
          y1="12"
          y2="12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <line
          x1="12"
          x2="19"
          y1="17"
          y2="17"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"
        />
      </svg>
    </SvgIcon>
  );
};
