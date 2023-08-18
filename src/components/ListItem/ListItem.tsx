import {
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps
} from "@mui/material";
import { cloneElement, FC, Fragment, ReactElement, useState } from "react";

import { MoreVertIcon } from "src/icons";
import { OverrideMuiProps } from "src/types";

import { IconButton } from "../IconButton";
import { ListItemAction } from "../ListItemAction";
import { ListItemAvatar } from "../ListItemAvatar";
import { ListItemText } from "../ListItemText";
import { ListItemButton } from "../ListItemButton";
import { ListItemIcon } from "../ListItemIcon";
import { Menu } from "../Menu";
import { MenuItem, MenuItemProps } from "../MenuItem";

export interface ListItemProps
  extends OverrideMuiProps<
    MuiListItemProps,
    | "children"
    | "disabled"
    | "disableGutters"
    | "disablePadding"
    | "selected"
    | "divider"
    | "sx"
    | "component",
    HTMLLIElement
  > {
  /**
   * If `true`, the `ListItem` will have children content wrapped by `ListItemButton`
   * @default false
   */
  asButton?: boolean;
  /**
   * The icon component, normally `SvgIcon`. The icon will be wrapped by `ListItemIcon`
   */
  icon?: ReactElement;
  /**
   * The avatar component, normally `Avatar`. The avatar will be wrapped by `ListItemAvatar`
   */
  avatar?: ReactElement;
  /**
   * The text component, normally `string`. The text will be wrapped by `ListItemText` using `primary` prop
   */
  text?: string | ReactElement;
  /**
   * The secondary text component, normally `string`. The secondary text will be wrapped by `ListItemText` using `secondary` prop
   */
  secondaryText?: string | ReactElement;
  /**
   * The action component, normally `IconButton`. The action will be wrapped by `ListItemAction`
   */
  action?: ReactElement;
  /**
   * The array of actions for menu options. The values will be wrapped by `MenuItem` and placed into `ListItemAction` menu.
   *
   */
  menuActions?: MenuItemProps[];
}

export const ListItem: FC<ListItemProps> = ({
  asButton,
  icon,
  avatar,
  text,
  secondaryText,
  action,
  menuActions,
  children,
  ...props
}) => {
  const [actionsAnchor, setActionsAnchor] = useState<HTMLButtonElement | null>(
    null
  );

  const content = (
    <Fragment>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {avatar && (
        <ListItemAvatar>
          {cloneElement(avatar, { size: "small" })}
        </ListItemAvatar>
      )}
      {(text || secondaryText) && (
        <ListItemText primary={text} secondary={secondaryText} />
      )}
      {children}
      {action && (
        <ListItemAction>
          {cloneElement(action, { size: "small", edge: "end" })}
        </ListItemAction>
      )}
      {!action && menuActions?.length && (
        <ListItemAction>
          <IconButton
            size="small"
            edge="end"
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
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
          >
            {menuActions.map((menuAction, index) => (
              <MenuItem key={index} {...menuAction} />
            ))}
          </Menu>
        </ListItemAction>
      )}
    </Fragment>
  );

  return asButton ? (
    <MuiListItem {...props} disablePadding>
      <ListItemButton>{content}</ListItemButton>
    </MuiListItem>
  ) : (
    <MuiListItem {...props}>{content}</MuiListItem>
  );
};
