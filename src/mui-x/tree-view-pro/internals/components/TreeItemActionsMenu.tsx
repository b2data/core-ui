"use client";
import * as React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "../../../../components/IconButton";
import { Menu } from "../../../../components/Menu";
import { MenuItem, MenuItemProps } from "../../../../components/MenuItem";
import { Box } from "@mui/material";

export interface TreeItemActionsMenuProps {
  actions: MenuItemProps[];
}

export function TreeItemActionsMenu({ actions }: TreeItemActionsMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  if (!actions || actions.length === 0) {
    return null;
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        opacity: isMenuOpen ? 1 : 0,
        transition: "opacity 0.2s",
        "&:hover": {
          opacity: 1,
        },
      }}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <IconButton
        size="small"
        onClick={handleClick}
        sx={{
          padding: "4px",
        }}
        aria-label="Item actions"
      >
        <MoreVertIcon fontSize="small" />
      </IconButton>
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={(e) => {
          e?.stopPropagation();
          e?.preventDefault();
          handleClose();
        }}
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
          <MenuItem
            key={index}
            {...action}
            onClick={(e) => {
              action.onClick?.(e);
              handleClose();
            }}
          />
        ))}
      </Menu>
    </Box>
  );
}
