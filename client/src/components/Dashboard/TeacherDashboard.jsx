import React from 'react';
import 'antd/dist/antd.css';
import {
  Row, Col, Card,
} from 'antd';

import './teacher-dashboard.css';

import ProgressFluid from './Components/ProgressFluid';
import BookedActivities from './Components/BookedActivities';
import DashboardDepartmentStats from './Components/DepartmentStats';
import DepartmentBookingActivies from './Components/DepartmentBookingActivity';
import StudentFeedback from './Components/StudentFeedback';

import { NavLink } from 'react-router-dom';

const TeacherDashboard = () => (
  <Row gutter={[16, 16]}>
    <Col lg={24}>
      <Row gutter={[16, 24]}>
        <Col lg={5}>
          <Row gutter={[16, 16]}>
            <Col lg={24}>
              <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                <h1 className="SubHeadingGrey centerText"><NavLink to="/activitybookings">Upcoming Activities</NavLink></h1>
                <BookedActivities />
              </Card>
            </Col>
            <Col lg={24}>
              <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                <h1 className="SubHeadingGrey centerText"><NavLink to="/postcreation">Pending Posts List</NavLink></h1>
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
                  <h1 className="SubHeadingGrey centerText">Department Activity</h1>
                  <DashboardDepartmentStats />
                  <div className="topPadding" />
                  <hr />
                  <h1 className="SubHeadingGrey centerText headerPadding">Student&apos;s Comments</h1>
                  <StudentFeedback />
                </Card>
              </Col>
              <Col lg={24}>
                <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                  <h1 className="SubHeadingGrey centerText">Department Booking Activity</h1>
                  <DepartmentBookingActivies />
                </Card>
              </Col>
            </Row>
          </Col>
        </Col>

      </Row>
    </Col>
  </Row>
);

export default TeacherDashboard;
