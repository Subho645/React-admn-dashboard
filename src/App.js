// App.js
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChartComponent from './components/Chart';
import Calendar from './components/Calendar';
import Kanban from './components/Kanban';
import TableComponent from './components/TableComponent';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}>
        <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </Header>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main style={{ flexGrow: 1, padding: '20px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div style={{ flex: '1', marginRight: '10px' }}>
              <ChartComponent
                data={{
                  labels: ['Jan', 'Feb', 'Mar'],
                  datasets: [{ label: 'Sales', data: [300, 400, 200] }]
                }}
                options={{ responsive: true }}
              />
            </div>
            <div style={{ flex: '1', marginLeft: '10px' }}>
              <Calendar />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: '1', marginRight: '10px' }}>
              <TableComponent />
            </div>
            <div style={{ flex: '1', marginLeft: '10px' }}>
              <Kanban />
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
