import { Fragment, MouseEvent, ReactNode, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { MenuItem, MenuItemProps } from "../MenuItem";
import { Tooltip } from "../Tooltip";
import { IconButton } from "../IconButton";
import { Menu } from "../Menu";
import { Button, ButtonProps } from "../Button";
import { ButtonGroup } from "../ButtonGroup";

export interface SectionTitleActionProps extends ButtonProps {
  /**
   * Defines if the action will be shown or not
   */
  hidden?: boolean;
  /**
   * The label text of the action.
   */
  label?: string | ReactNode;
  /**
   * Defines if the action will be shown as `IconButton` with `icon` inside.
   */
  icon?: ReactNode;
  /**
   * `onClick` callback when user clicks on the action.
   */
  onClick?: (e: MouseEvent) => void;
  /**
   * If set, the tooltip will be shown when hover on the action.
   */
  tooltip?: string | ReactNode;
  /**
   * The array of actions for menu options. The values will be wrapped by `MenuItem` and placed into `ListItemAction` menu.
   *
   */
  menuActions?: MenuItemProps[];
  /**
   * The array of actions for `ButtonGroup`.
   */
  actions?: MenuItemProps[];
}

export const SectionTitleAction = ({
  label,
  icon,
  onClick,
  tooltip,
  menuActions,
  actions,
  ...props
}: SectionTitleActionProps) => {
  const [actionsAnchor, setActionsAnchor] = useState<HTMLButtonElement | null>(
    null,
  );

  if (menuActions) {
    return (
      <Fragment>
        <Tooltip text={tooltip}>
          <IconButton
            size={props.size || "small"}
            onClick={(e) => setActionsAnchor(e.currentTarget)}
            {...props}
          >
            {icon || <MoreVertIcon />}
          </IconButton>
        </Tooltip>
        <Menu
          open={Boolean(actionsAnchor)}
          anchorEl={actionsAnchor}
          onClose={() => setActionsAnchor(null)}
          onClick={() => setActionsAnchor(null)}
          anchorOrigin={{
            vertical: "bottom",
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
  if (actions) {
    return (
      <Fragment>
        <ButtonGroup
          color={props.color === "default" ? undefined : props.color}
          size={props.size || "small"}
          variant={props.variant}
          disabled={props.disabled}
        >
          <Button onClick={onClick} {...props}>
            {label}
          </Button>
          <Button onClick={(e) => setActionsAnchor(e.currentTarget)}>
            <ArrowDropDownIcon fontSize={props.size} />
          </Button>
        </ButtonGroup>
        <Menu
          open={Boolean(actionsAnchor)}
          anchorEl={actionsAnchor}
          onClose={() => setActionsAnchor(null)}
          onClick={() => setActionsAnchor(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {actions.map((action, index) => (
            <MenuItem key={index} {...action} />
          ))}
        </Menu>
      </Fragment>
    );
  }

  const content = icon ? (
    <IconButton size={props.size || "small"} onClick={onClick} {...props}>
      {icon}
    </IconButton>
  ) : (
    <Button onClick={onClick} {...props}>
      {label}
    </Button>
  );

  return (
    <Tooltip text={tooltip}>
      {props.disabled ? <span>{content}</span> : content}
    </Tooltip>
  );
};
