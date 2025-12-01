import React, { useState, useCallback } from "react";
import type { TreeViewItem, TreeViewAction } from "./TreeView";
import { Box } from "../Box";
import { IconButton } from "../IconButton";
import { Menu } from "../Menu";
import { MenuItem } from "../MenuItem";
import { MoreVertIcon } from "../../icons";

export interface TreeItemActionsProps {
  item: TreeViewItem;
  actions: TreeViewAction[];
}

export function TreeItemActions({ item, actions }: TreeItemActionsProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);

  const handleOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  if (actions.length === 0) {
    return null;
  }

  return (
    <>
      <Box
        className="tree-item-actions"
        sx={{
          ml: 1,
          opacity: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton size="small" onClick={handleOpen}>
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
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
            onClick={(event) => {
              event.stopPropagation();
              action.onClick(item);
              handleClose();
            }}
            disabled={action.disabled}
            divider={action.withDivider}
            sx={action.sx}
            startAdornment={
              action.icon ? (
                <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                  {action.icon}
                </Box>
              ) : undefined
            }
          >
            {action.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
