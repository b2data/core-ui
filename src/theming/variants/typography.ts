const baseFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 700;

export default {
  htmlFontSize: 14,
  fontFamily: baseFontFamily,
  fontSize: 14,

  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold,

  h1: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightLight,
    fontSize: 40,
    letterSpacing: 0,
    lineHeight: "normal",
  },

  h2: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightLight,
    fontSize: 32,
    letterSpacing: 0,
    lineHeight: "normal",
  },

  h3: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 28,
    letterSpacing: 0,
    lineHeight: "normal",
  },

  h4: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: "normal",
  },

  h5: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: "normal",
  },

  h6: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightMedium,
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: "normal",
  },

  subtitle1: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: "normal",
  },

  subtitle2: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightMedium,
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: "normal",
  },

  body1: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: "normal",
  },

  body2: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: "normal",
  },

  button: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightMedium,
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: "normal",
    textTransform: "none" as const,
  },

  caption: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: "normal",
  },

  overline: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: "normal",
    textTransform: "uppercase" as const,
  },
};
