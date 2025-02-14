import { FC, ReactNode } from "react";

import { SymbolsKey } from "../../../hooks";
import { SvgIconProps } from "../../SvgIcon";

import { DataBlockBase, DataBlockVariant } from "./blocks";

export type DataBlockTool = {
  title: string;
  icon?: FC<SvgIconProps>;
  defaultValue?: string;
  shortcut?: SymbolsKey[];
  renderMenu?: (data: {
    block: Omit<DataBlockBase, "variants">;
    variant: Omit<DataBlockVariant, "votes">;
    onChange: (
      blockChanges?: Partial<DataBlockBase>,
      variantChanges?: Partial<DataBlockVariant["data"]>,
    ) => void;
  }) => ReactNode;
};
