import React, { Component, useState } from 'react';
import {
  Calendar, Button, Modal, Row, Col, Card,
} from 'antd';
import 'antd/dist/antd.css';

const LessonBookingCalendar = () => {
  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  return (
    <div className="site-calendar-demo-card">

      <Row>
        <Col lg={8}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </Col>
      </Row>

    </div>
  );
};

export default LessonBookingCalendar;
