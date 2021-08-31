import React from 'react';

import {
  Layout, Row, Col, Card, Statistic,
} from 'antd';

import BookedActivities from './Components/BookedActivities';
import StudentFeedback from './Components/StudentFeedback';

const EmployerDashboard = () => (
  <Row gutter={[16, 16]}>
    <Col lg={24}>
      <Row gutter={[16, 24]}>
        <Col lg={7}>
          <Row gutter={[16, 16]}>
            <Col lg={24}>
              <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                <h1 className="SubHeadingGrey centerText"><a href="/LessonBooking">Upcoming Bookings</a></h1>
                <BookedActivities />
              </Card>
            </Col>
            <Col lg={24}>
              <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                <h1 className="SubHeadingGrey centerText"><a href="/LessonBooking">Your Organisation Activity</a></h1>
                {
                          // Add this back in
                        }
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={17}>
          <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
            <Row>
              <Col lg={14}>
                <h1 className="SubHeadingGrey centerText">Student's Comments</h1>
                <StudentFeedback />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default EmployerDashboard;
