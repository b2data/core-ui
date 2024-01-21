import { ReactElement, useContext } from "react";

import { HeadingIcon, TextIcon } from "../../../../icons";
import { DataBlockType } from "../../model";
import { DataBlockEditorContext } from "../../store";

export const useBlocksOptions = () => {
  const { state } = useContext(DataBlockEditorContext);

  const options: Record<
    DataBlockType,
    {
      label: string;
      icon: ReactElement;
    }
  > = {
    [DataBlockType.Header]: {
      label: state.i18n.blocks[DataBlockType.Header],
      icon: <HeadingIcon />,
    },
    [DataBlockType.Paragraph]: {
      label: state.i18n.blocks[DataBlockType.Paragraph],
      icon: <TextIcon />,
    },
  };

  return options;
};
