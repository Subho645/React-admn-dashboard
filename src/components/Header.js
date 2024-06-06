// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ children, onToggleSidebar, isSidebarOpen }) => (
  <AppBar position="static">
    <Toolbar>
      {!isSidebarOpen && (
        <IconButton
          color="inherit"
          aria-label="open sidebar"
          edge="start"
          onClick={onToggleSidebar}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Admin Dashboard
      </Typography>
      {children}
    </Toolbar>
  </AppBar>
);

export default Header;
