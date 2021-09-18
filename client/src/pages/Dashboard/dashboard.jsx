import React, { useEffect } from 'react';
import './dashboard.css';

import { Layout } from 'antd';

import { useSelector } from 'react-redux';
import apiHooks from '@services/hooks';

import {
  TeacherDashboard,
  CoordinatorDashboard,
  EmployerDashboard,
  Footer,
} from '@components';

const {
  usePrefetch,
} = apiHooks;

const { Content, Sider } = Layout;

const Dashboard = () => {
  const { authLevel } = useSelector((state) => state.auth);

  const prefetchAllActivities = usePrefetch('getActivityRequests', undefined, { force: true });
  useEffect(() => {
    prefetchAllActivities();
  }, []);

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
