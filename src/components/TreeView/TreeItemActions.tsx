import React, { useState, useCallback } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import type { TreeViewItem, TreeViewAction } from "./TreeView";

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
            onClick={() => {
              action.onClick(item);
              handleClose();
            }}
            disabled={action.disabled}
          >
            {action.icon && (
              <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                {action.icon}
              </Box>
            )}
            {action.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
