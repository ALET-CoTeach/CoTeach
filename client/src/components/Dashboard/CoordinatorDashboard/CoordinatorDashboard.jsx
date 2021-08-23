import React from 'react';
import 'antd/dist/antd.css';
import {
  Layout, Row, Col, Card, Statistic,
} from 'antd';

import UpcomingSchoolActivities from './CoordinatorDashboardComponents/UpcomingSchoolActivities';
import PostVerificationProgressFluid from './CoordinatorDashboardComponents/PostVerificationProgressFluid';
import DashboardSchoolStats from './CoordinatorDashboardComponents/DashboardSchoolStats';
import StudentFeedbackCoordinator from './CoordinatorDashboardComponents/StudentFeedbackCoordinator';


const { Content, Footer, Sider } = Layout;

const CoordinatorDashboard = () => (
  <Layout style={{ paddingTop: 45 }}>
    <Sider
      className="sidebar"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    />
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Content className="addLesson-content">
        <div className="site-layout-background">
          <h1 className="HeadingGrey centerText">Dashboard</h1>

          <Row gutter={[16, 16]}>
            <Col lg={24}>
              <Row gutter={[16, 24]}>
                <Col lg={5}>
                  <Row gutter={[16, 16]}>
                    <Col lg={24}>
                      <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                        <h1 className="SubHeadingGrey centerText"><a href="/CoordinatorEntries">Upcoming School Activities</a></h1>
                        <UpcomingSchoolActivities />
                      </Card>
                    </Col>
                    <Col lg={24}>
                      <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                        <h1 className="SubHeadingGrey centerText"><a href="/CoordinatorPostVerification">Pending Posts Verification</a></h1>
                        <PostVerificationProgressFluid />
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col lg={19}>
                  <Col lg={24}>
                    <Row  gutter={[16, 24]}>
                      <Col lg={24}>
                        <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                        <h1 className="SubHeadingGrey centerText">Overall School Statistics</h1>
                         <DashboardSchoolStats />
                        </Card>
                      </Col >
                      <Col lg={24}>
                        <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                          <h1 className="SubHeadingGrey centerText">Overall Student Feedback</h1>
                          <StudentFeedbackCoordinator />
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Col>

              </Row>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
    </Layout>
  </Layout>
);

export default CoordinatorDashboard;