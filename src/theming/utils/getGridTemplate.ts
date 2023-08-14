export const getGridTemplate = (gridTemplate: (string | number)[]) => {
  return gridTemplate
    .map((item) => (typeof item === "number" ? `${item}px` : item))
    .join(" ");
};
