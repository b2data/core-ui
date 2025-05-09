import {
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps,
} from "@mui/material";
import React, {
  cloneElement,
  Fragment,
  ReactElement,
  useCallback,
  useState,
} from "react";
import { default as MoreVertIcon } from "@mui/icons-material/MoreVert";
import { OverrideMuiProps } from "../types";
import { IconButton, IconButtonProps } from "../IconButton";
import { ListItemAvatar } from "../ListItemAvatar";
import { ListItemText, ListItemTextProps } from "../ListItemText";
import { ListItemButton } from "../ListItemButton";
import { ListItemIcon } from "../ListItemIcon";
import { Menu } from "../Menu";
import { MenuItem, MenuItemProps } from "../MenuItem";
import { AvatarProps } from "../Avatar";

export interface ListItemProps
  extends OverrideMuiProps<
    MuiListItemProps,
    "disableGutters" | "disablePadding" | "divider" | "sx" | "component",
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
  avatar?: ReactElement<AvatarProps>;
  /**
   * The text component, normally `string`. The text will be wrapped by `ListItemText` using `primary` prop
   */
  text?: string | ReactElement;
  /**
   * The secondary text component, normally `string`. The secondary text will be wrapped by `ListItemText` using `secondary` prop
   */
  secondaryText?: string | ReactElement;
  /**
   * Properties for `ListItemText` component
   */
  textProps?: ListItemTextProps;
  /**
   * The action component, normally `IconButton`.
   */
  action?: ReactElement<IconButtonProps>;
  /**
   * The array of actions for menu options. The values will be wrapped by `MenuItem`.
   *
   */
  menuActions?: MenuItemProps[];
  /**
   * Disables `ripple` for ListItemButton
   */
  disableRipple?: boolean;
  /**
   * Pass to `ListItemButton`
   */
  selected?: boolean;
  /**
   * Applies `disabled` styles for ListItemButton
   */
  disabled?: boolean;
}

export const ListItem = React.forwardRef(
  (
    {
      asButton,
      icon,
      avatar,
      text,
      secondaryText,
      textProps,
      action,
      menuActions,
      children,
      disableRipple,
      selected,
      disabled,
      onClick,
      ...props
    }: ListItemProps,
    ref: React.Ref<HTMLLIElement>,
  ) => {
    const [actionsAnchor, setActionsAnchor] =
      useState<HTMLButtonElement | null>(null);

    const [contextMenu, setContextMenu] = React.useState<{
      mouseX: number;
      mouseY: number;
    } | null>(null);

    const handleRightClick = useCallback(
      (e: React.MouseEvent) => {
        e.preventDefault();
        if (menuActions?.length) {
          setContextMenu(
            contextMenu === null
              ? {
                  mouseX: e.clientX + 100,
                  mouseY: e.clientY + 5,
                }
              : null,
          );
        }
      },
      [menuActions, contextMenu],
    );

    const handleClose = () => {
      setActionsAnchor(null);
      setContextMenu(null);
    };

    const content = (
      <Fragment>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        {avatar && (
          <ListItemAvatar>
            {cloneElement(avatar, { size: "small", sx: { fontSize: "1rem" } })}
          </ListItemAvatar>
        )}
        {(text || secondaryText) && (
          <ListItemText
            primary={text}
            secondary={secondaryText}
            {...textProps}
          />
        )}
        {children}
      </Fragment>
    );

    const secondaryAction =
      action || menuActions?.length ? (
        <Fragment>
          {!!action && cloneElement(action, { size: "small", edge: "end" })}
          {!!menuActions?.length && (
            <Fragment>
              <IconButton
                size="small"
                edge="end"
                className="MenuActions"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActionsAnchor(e.currentTarget);
                }}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                open={Boolean(actionsAnchor) || Boolean(contextMenu)}
                anchorEl={actionsAnchor ? actionsAnchor : undefined}
                onClose={handleClose}
                onClick={(e) => {
                  e?.stopPropagation();
                  e?.preventDefault();
                  handleClose();
                }}
                anchorReference={contextMenu ? "anchorPosition" : "anchorEl"}
                anchorPosition={
                  contextMenu !== null
                    ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                    : undefined
                }
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
          )}
        </Fragment>
      ) : undefined;

    return asButton ? (
      <MuiListItem
        ref={ref}
        {...props}
        disablePadding
        onClick={disabled ? undefined : onClick}
        secondaryAction={secondaryAction}
        onContextMenu={handleRightClick}
      >
        <ListItemButton
          disabled={disabled}
          selected={selected}
          disableRipple={disableRipple}
          disableGutters={props.disableGutters}
        >
          {content}
        </ListItemButton>
      </MuiListItem>
    ) : (
      <MuiListItem
        ref={ref}
        {...props}
        onClick={disabled ? undefined : onClick}
        secondaryAction={secondaryAction}
        onContextMenu={handleRightClick}
      >
        {content}
      </MuiListItem>
    );
  },
);
