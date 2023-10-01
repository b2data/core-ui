import React, { Fragment, useState } from "react";
import { default as MoreVertIcon } from "@mui/icons-material/MoreVert";

import { MenuItem, MenuItemProps } from "../MenuItem";
import { Tooltip } from "../Tooltip";
import { IconButton } from "../IconButton";
import { Menu } from "../Menu";
import { Button } from "../Button";

export interface SectionTitleActionProps {
  /**
   * Defines if the action will be shown or not
   */
  hidden?: boolean;
  /**
   * The label text of the action.
   */
  label?: string | React.ReactNode;
  /**
   * Defines if the action will be shown as `IconButton` with `icon` inside.
   */
  icon?: React.ReactNode;
  /**
   * `onClick` callback when user clicks on the action.
   */
  onClick?: (e: React.MouseEvent) => void;
  /**
   * If set, the tooltip will be shown when hover on the action.
   */
  tooltip?: string | React.ReactNode;
  /**
   * The array of actions for menu options. The values will be wrapped by `MenuItem` and placed into `ListItemAction` menu.
   *
   */
  menuActions?: MenuItemProps[];
}

export const SectionTitleAction: React.FC<SectionTitleActionProps> = ({
  label,
  icon,
  onClick,
  tooltip,
  menuActions,
  ...props
}) => {
  const [actionsAnchor, setActionsAnchor] = useState<HTMLButtonElement | null>(
    null,
  );

  if (menuActions) {
    return (
      <Fragment>
        <IconButton
          size="small"
          onClick={(e) => setActionsAnchor(e.currentTarget)}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          open={Boolean(actionsAnchor)}
          anchorEl={actionsAnchor}
          onClose={() => setActionsAnchor(null)}
          onClick={() => setActionsAnchor(null)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {menuActions.map((menuAction, index) => (
            <MenuItem key={index} {...menuAction} />
          ))}
        </Menu>
      </Fragment>
    );
  }

  return (
    <Tooltip text={tooltip}>
      {icon ? (
        <IconButton size="small" onClick={onClick} {...props}>
          {icon}
        </IconButton>
      ) : (
        <Button onClick={onClick} {...props}>
          {label}
        </Button>
      )}
    </Tooltip>
  );
};
