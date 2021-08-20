import React from 'react';
import 'antd/dist/antd.css';
import {
  Layout, Row, Col, Card, Statistic,
} from 'antd';
const { Content, Footer, Sider } = Layout;

const EmployerDashboard = () => (
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
                      <h1 className="SubHeadingGrey centerText">Upcoming Activities</h1>

                    </Card>
                  </Col>
                  <Col lg={24}>
                    <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                      <h1 className="SubHeadingGrey centerText"><a href="/TeacherPostCreationPage">Pending Posts List</a></h1>

                    </Card>
                  </Col>
                  </Row>
                </Col>
                <Col lg={19}>
                  <Card style={{ boxShadow: '2px 4px 6px 2px rgba(0, 0, 0, 0.2)' }}>
                  <h1 className="SubHeadingGrey centerText">Department Activity</h1>

                  </Card>
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

export default EmployerDashboard;