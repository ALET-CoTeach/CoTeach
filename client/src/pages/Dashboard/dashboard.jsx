import React from 'react';
import './dashboard.css';

import { Layout } from 'antd';

import {
  TeacherDashboard,
  CoordinatorDashboard,
  EmployerDashboard,
  Footer,
} from '@components';

const { Content, Sider } = Layout;

const Dashboard = () => {
  const authLevel = 'employer';

  let dashboard;

  switch (authLevel) {
    case 'teacher':
      dashboard = <TeacherDashboard />;
      break;
    case 'coordinator':
      dashboard = <CoordinatorDashboard />;
      break;
    case 'employer':
      dashboard = <EmployerDashboard />;
      break;
    default:
      dashboard = null;
  }

  return (
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
            <h1 className=" centerText">Dashboard</h1>
            {dashboard}
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
