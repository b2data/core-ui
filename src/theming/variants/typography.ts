import { tablet } from "./breakpoints";

const baseFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 700;

export default {
  htmlFontSize: 14,
  fontFamily: baseFontFamily,
  fontSize: 14,

  [`@media (max-width:${tablet}px)`]: {
    fontSize: 12,
  },

  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold,

  h1: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightLight,
    fontSize: 40,
    [`@media (max-width:${tablet}px)`]: {
      fontSize: 28,
    },
    letterSpacing: 0,
    lineHeight: 1.2,
  },

  h2: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightLight,
    fontSize: 32,
    [`@media (max-width:${tablet}px)`]: {
      fontSize: 24,
    },
    letterSpacing: 0,
    lineHeight: 1.2,
  },

  h3: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 28,
    [`@media (max-width:${tablet}px)`]: {
      fontSize: 22,
    },
    letterSpacing: 0,
    lineHeight: 1.2,
  },

  h4: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 24,
    [`@media (max-width:${tablet}px)`]: {
      fontSize: 20,
    },
    letterSpacing: 0,
    lineHeight: 1.1,
  },

  h5: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 20,
    [`@media (max-width:${tablet}px)`]: {
      fontSize: 16,
    },
    letterSpacing: 0,
    lineHeight: 1.1,
  },

  h6: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightMedium,
    fontSize: 16,
    [`@media (max-width:${tablet}px)`]: {
      fontSize: 14,
    },
    letterSpacing: 0,
    lineHeight: 1.1,
  },

  subtitle1: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 16,
    [`@media (max-width:${tablet}px)`]: {
      fontSize: 14,
    },
    letterSpacing: 0,
    lineHeight: 1.1,
  },

  subtitle2: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightMedium,
    fontSize: 14,
    [`@media (max-width:${tablet}px)`]: {
      fontSize: 12,
    },
    letterSpacing: 0,
    lineHeight: 1.1,
  },

  body1: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 14,
    [`@media (max-width:${tablet}px)`]: {
      fontSize: 12,
    },
    letterSpacing: 0,
    lineHeight: 1.1,
  },

  body2: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 12,
    [`@media (max-width:${tablet}px)`]: {
      fontSize: 10,
    },
    letterSpacing: 0,
    lineHeight: 1.1,
  },

  button: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightMedium,
    fontSize: 14,
    [`@media (max-width:${tablet}px)`]: {
      fontSize: 12,
    },
    letterSpacing: 0,
    lineHeight: 1.1,
    textTransform: "none" as const,
  },

  caption: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 12,
    [`@media (max-width:${tablet}px)`]: {
      fontSize: 10,
    },
    letterSpacing: 0,
    lineHeight: 1.1,
  },

  overline: {
    fontFamily: baseFontFamily,
    fontWeight: fontWeightRegular,
    fontSize: 14,
    [`@media (max-width:${tablet}px)`]: {
      fontSize: 12,
    },
    letterSpacing: 0,
    lineHeight: 1.1,
    textTransform: "uppercase" as const,
  },
};
