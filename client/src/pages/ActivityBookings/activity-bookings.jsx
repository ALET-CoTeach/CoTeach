import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '/src/index.css';
import { Layout, Collapse } from 'antd';

import {
  AllAvailableActivities,
  AllBookedActivities,
  CompletedActivities,
  BookedActivities,
  AddActivityModal,
} from '@components';

const { Content, Footer, Sider } = Layout;

const { Panel } = Collapse;

const ActivityBookings = () => {
  const authLevel = 'teacher';

  let panels;
  /**
   * When authenticated as:
   * Teacher:
   * SLT/Coordinator:
   * Admin:
   * Employer/CompanyAdmin:
   */
  switch (authLevel) {
    case 'teacher':
      panels = (
        <>
          <Panel
            className="activityBooking-table-title"
            header="Your Booked Activities"
            key="1"
          >
            <BookedActivities />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="All Available Activities"
            key="2"
          >
            <AllAvailableActivities />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="Your Pending Requests"
            key="3"
          >
            <BookedActivities />
          </Panel>
          <Panel
            className="activityBooking-table-title"
            header="Your "
            key="4"
          >
            <AllBookedActivities />
          </Panel>
        </>
      );
      break;
    case 'slt':
    case 'coordinator':
      panels = (
        <>
          <Panel
            className="activityBooking-table-title"
            header="All Available Activities"
            key="1"
          >
            <AllBookedActivities />
          </Panel>
        </>
      );
      break;
    case 'admin':
      panels = (
        <>
          <Panel
            className="activityBooking-table-title"
            header="Your Booked Activity"
            key="1"
          />
        </>
      );
      break;
    case 'employer':
    case 'companyadmin':
      panels = (
        <>
          <Panel
            className="activityBooking-table-title"
            header="Your Booked Activity"
            key="1"
          />
        </>
      );
      break;
    default: panels = null;
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
      >
        <AddActivityModal />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content className="activityBooking-content">
          <div className="site-layout-background">
            <h1 className="centerText HeadingGrey" style={{ paddingTop: '1%' }}>Requests</h1>
            <Collapse bordered={false} defaultActiveKey={['1', '2', '3']} ghost>
              {panels}
            </Collapse>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
      </Layout>
    </Layout>
  );
};

export default ActivityBookings;
