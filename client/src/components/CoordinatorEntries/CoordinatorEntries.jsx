import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Layout, Collapse, Tooltip, Popover,
} from 'antd';

import AllBookedRequests from './Tables/AllBookedRequests';
import AllAvaiableRequests from './Tables/AllAvailableRequests';
import YourRequests from './Tables/YourRequests';
import YourFulfilledRequests from './Tables/YourFulfilledRequests';

const { Content, Footer, Sider } = Layout;
const { Panel } = Collapse;

const CoordinatorEntries = () => (
  <div>
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
        <Content className="bookingLesson-content">
          <div className="site-layout-background">

            <Collapse bordered={false} defaultActiveKey={['1', '2']} ghost>

              <Panel className="addLesson-table-title" header="All Booked Requests" key="1">
                <AllBookedRequests />
              </Panel>

              <Panel className="addLesson-table-title" header="All Available Requests" key="2">
                <AllAvaiableRequests />
              </Panel>
              <Panel className="addLesson-table-title" header="Your Requests" key="3">
                <YourRequests />
              </Panel>
              <Panel className="addLesson-table-title" header="Your Fulfilled Requests" key="4">
                <YourFulfilledRequests />
              </Panel>
            </Collapse>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
      </Layout>
    </Layout>
  </div>
);

export default CoordinatorEntries;
