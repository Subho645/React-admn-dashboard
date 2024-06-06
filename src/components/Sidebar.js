// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './sidestyles.css'; // Import CSS file

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar>
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <List className="sidebar-list">
        <ListItem button className="sidebar-item">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button className="sidebar-item">
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button className="sidebar-item">
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
