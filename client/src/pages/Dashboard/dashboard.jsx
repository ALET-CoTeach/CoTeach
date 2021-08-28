import React from 'react';
import { Redirect } from 'react-router-dom';

// import TeacherDashboard from './TeacherDashboard';
// import EmployerDashboard from './EmployerDashboard';
// import CoordinatorDashboard from './CoordinatorDashboard';

import { Layout } from 'antd';

import {
  TeacherDashboard,
  CoordinatorDashboard,
  EmployerDashboard,
} from '@components';

const { Content, Footer, Sider } = Layout;

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
            <h1 className="HeadingGrey centerText">Dashboard</h1>
            {dashboard}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
