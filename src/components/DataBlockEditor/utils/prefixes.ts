import { DataBlockBase } from "../models";

const calcMaxPrefix = (prefixes: Record<string, string | null>): number => {
  return Math.max(
    1,
    ...Object.values(prefixes).flatMap((v) => (v ? [v.length] : [])),
  );
};

export const getPrefixesData = (blocks: DataBlockBase[]) => {
  const prefixes: Record<string, string | null> = {};
  const prev: Record<string, number> = {};

  blocks.forEach(({ id, offset, hidePrefix }, index) => {
    if (hidePrefix || offset - blocks[index - 1]?.offset > 1) {
      prefixes[id] = null;
      return;
    }

    const parentBlock = blocks
      .slice(0, index)
      .reverse()
      .find((block) => block.offset === offset - 1 && !block.hidePrefix);

    if (parentBlock) {
      const parentPrefix = prefixes[parentBlock.id] ?? "";
      const siblingCount = (prev[parentPrefix] ?? 0) + 1;
      prefixes[id] = parentPrefix
        ? `${parentPrefix}.${siblingCount}`
        : `${siblingCount}`;
      if (parentPrefix !== "") {
        prev[parentPrefix] = siblingCount;
      }
    } else {
      const siblingCount = (prev[""] ?? 0) + 1;
      prefixes[id] = `${siblingCount}`;
      prev[""] = siblingCount;
    }
  });

  return {
    prefixes,
    maxPrefixLength: calcMaxPrefix(prefixes),
  };
};
