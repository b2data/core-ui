const baseFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 700;

export default {
  htmlFontSize: 14,
  pxToRem: (px: number) => `${px / 14}rem`,
  fontFamily: baseFontFamily,
  fontSize: 14,

  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold,

  h1: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: "1.5rem",
    letterSpacing: "-0.015em",
    lineHeight: 1.2,
  },

  h2: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: "1.4em",
    letterSpacing: "-0.015em",
    lineHeight: 1.2,
  },

  h3: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: "1.3em",
    letterSpacing: "-0.015em",
    lineHeight: 1.3,
  },

  h4: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: "1.2em",
    letterSpacing: "-0.015em",
    lineHeight: 1.4,
  },

  h5: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightMedium,
    fontSize: "1.1em",
    letterSpacing: "-0.015em",
    lineHeight: 1.5,
  },

  h6: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightMedium,
    fontSize: "1em",
    letterSpacing: "-0.015em",
    lineHeight: 1.5,
  },

  subtitle1: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: "1.125em",
    letterSpacing: "-0.015em",
    lineHeight: 1.1,
  },

  subtitle2: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightMedium,
    fontSize: "1em",
    letterSpacing: "-0.015em",
    lineHeight: 1.1,
  },

  body1: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: "1em",
    letterSpacing: "-0.015em",
    lineHeight: 1.1,
  },

  body2: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: "0.85em",
    letterSpacing: "-0.015em",
    lineHeight: 1.1,
  },

  button: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightMedium,
    fontSize: "1em",
    letterSpacing: "-0.015em",
    lineHeight: 1.1,
    textTransform: "none" as const,
  },

  caption: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: "0.85em",
    letterSpacing: "-0.015em",
    lineHeight: 1.1,
  },

  overline: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: "1em",
    letterSpacing: "-0.015em",
    lineHeight: 1.1,
    textTransform: "uppercase" as const,
  },
};
