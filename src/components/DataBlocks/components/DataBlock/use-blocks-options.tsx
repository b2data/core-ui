import { ReactElement, useContext } from "react";

import { HeadingIcon, TextIcon } from "../../../../icons";
import { DataBlockType } from "../../model";
import { DataBlockContext } from "../../store";
import { useDevice } from "../../../../hooks";

export const useBlocksOptions = () => {
  const { state } = useContext(DataBlockContext);
  const { Symbols } = useDevice();

  const options: Record<
    DataBlockType,
    {
      label: string;
      icon: ReactElement;
      action?: string;
    }
  > = {
    [DataBlockType.Header]: {
      label: state.i18n.blocks[DataBlockType.Header],
      icon: <HeadingIcon />,
    },
    [DataBlockType.Paragraph]: {
      label: state.i18n.blocks[DataBlockType.Paragraph],
      icon: <TextIcon />,
      action: `${Symbols.CMD} + ${Symbols.ENTER}`,
    },
  };

  return options;
};
