import React from 'react';

import {
  Layout, Row, Col, Card,
} from 'antd';

import BookedActivities from './Components/BookedActivities';
import ProgressFluid from './Components/ProgressFluid';

import DashboardSchoolStats from './Components/DashboardSchoolStats';
import StudentFeedback from './Components/StudentFeedback';

const CoordinatorDashboard = () => (
  <Row gutter={[16, 16]}>
    <Col lg={24}>
      <Row gutter={[16, 24]}>
        <Col lg={5}>
          <Row gutter={[16, 16]}>
            <Col lg={24}>
              <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                <h1 className="SubHeadingGrey text-center"><a href="/CoordinatorEntries">Upcoming School Activities</a></h1>
                <BookedActivities />
              </Card>
            </Col>
            <Col lg={24}>
              <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                <h1 className="SubHeadingGrey text-center"><a href="/CoordinatorPostVerification">Pending Posts Verification</a></h1>
                <ProgressFluid percent={0.69} />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={19}>
          <Col lg={24}>
            <Row gutter={[16, 24]}>
              <Col lg={24}>
                <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                  <h1 className="SubHeadingGrey text-center">Overall School Statistics</h1>
                  <DashboardSchoolStats />
                </Card>
              </Col>
              <Col lg={24}>
                <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                  <h1 className="SubHeadingGrey text-center">Overall Student Feedback</h1>
                  <StudentFeedback />
                </Card>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default CoordinatorDashboard;
