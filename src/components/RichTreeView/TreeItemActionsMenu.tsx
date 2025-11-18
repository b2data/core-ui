"use client";
import * as React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "../IconButton";
import { Menu } from "../Menu";
import { MenuItem, MenuItemProps } from "../MenuItem";
import { Box } from "@mui/material";

export interface TreeItemActionsMenuProps {
  actions: MenuItemProps[];
}

export function TreeItemActionsMenu({ actions }: TreeItemActionsMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const contentRef = React.useRef<HTMLElement | null>(null);

  if (!actions || actions.length === 0) {
    return null;
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    const content = event.currentTarget.closest(
      ".MuiTreeItem-content",
    ) as HTMLElement | null;
    if (content) {
      content.dataset.actionsOpen = "true";
      contentRef.current = content;
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (contentRef.current) {
      delete contentRef.current.dataset.actionsOpen;
      contentRef.current = null;
    }
  };

  const isMenuOpen = Boolean(anchorEl);

  React.useEffect(() => {
    return () => {
      if (contentRef.current) {
        delete contentRef.current.dataset.actionsOpen;
        contentRef.current = null;
      }
    };
  }, []);

  return (
    <Box
      className="MuiTreeItem-actionsMenu"
      sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        ...(isMenuOpen ? { opacity: 1 } : {}),
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
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {actions.map((action, index) => (
          <MenuItem
            key={action.id || `action-${index}`}
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
