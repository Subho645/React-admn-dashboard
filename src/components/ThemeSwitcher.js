import React from 'react';
import { Switch } from '@mui/material';

const ThemeSwitcher = ({ isDarkMode, toggleTheme }) => (
  <Switch checked={isDarkMode} onChange={toggleTheme} />
);

export default ThemeSwitcher;
