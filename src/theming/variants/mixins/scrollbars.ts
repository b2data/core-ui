const trackColor = "#FAFAFA";

export default {
  "&::-webkit-scrollbar": {
    backgroundColor: "#fff",
    width: 16,
    height: 16
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: trackColor
  },

  "&::-webkit-scrollbar-thumb": {
    border: `5px solid ${trackColor}`,
    borderRadius: 16,
    backgroundColor: "#C4C4C4",
    minHeight: 40,
    minWidth: 40,

    "&:hover": {
      backgroundColor: "#a0a0a5",
      border: `4px solid ${trackColor}`
    }
  },

  "&::-webkit-scrollbar-button": {
    display: "none"
  }
};
