import React from 'react';
import 'antd/dist/antd.css';
import '../../../index.css';
import { Calendar } from 'antd';

const onPanelChange = (value, mode) => {
  console.log(value, mode);
}

const CalendarComponent = () => (
  <div className="site-calendar-demo-card">
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>
);

export default CalendarComponent;
