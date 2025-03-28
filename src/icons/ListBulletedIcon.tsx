import React from "react";

import { SvgIcon, SvgIconProps } from "../components";

export const ListBulletedIcon: React.FC<SvgIconProps> = (props) => {
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
          x1="9"
          x2="19"
          y1="7"
          y2="7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <line
          x1="9"
          x2="19"
          y1="12"
          y2="12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <line
          x1="9"
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
          d="M5.00001 17H4.99002"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="M5.00001 12H4.99002"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="M5.00001 7H4.99002"
        />
      </svg>
    </SvgIcon>
  );
};
