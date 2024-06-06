// Calendar.js
import React from 'react';
import { Paper } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './styles.css'; // Import CSS file

const Calendar = () => (
  <Paper elevation={3} className="calendar-container">
    <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
  </Paper>
);

export default Calendar;
