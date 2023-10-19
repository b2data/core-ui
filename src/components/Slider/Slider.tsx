import {
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
} from "@mui/material";
import React from "react";

export interface SliderProps extends MuiSliderProps {}

export const Slider = (props: SliderProps) => <MuiSlider {...props} />;
