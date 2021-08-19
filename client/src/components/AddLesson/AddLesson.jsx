import React from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Collapse } from 'antd';

import AllRequests from './Table/AllRequests';
import FulfilledRequests from './Table/FulfilledRequests';
import UnbookedRequests from './Table/UnbookedRequests';

import AddLessonModal from './Modal/Modal';

const { Content, Footer, Sider } = Layout;

const { Panel } = Collapse;

const AddLesson = () => (
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
      <AddLessonModal />
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Content className="addLesson-content">
        <div className="site-layout-background">
          <Collapse bordered={false} defaultActiveKey={['1', '2', '3']} ghost>
            <Panel className="addLesson-table-title" header="Unbooked Requests" key="1">
              <UnbookedRequests />
            </Panel>
            <Panel className="addLesson-table-title" header="Your Fulfilled Requests" key="2">
              <FulfilledRequests />
            </Panel>
            <Panel className="addLesson-table-title" header="All Fulfilled Requests" key="3">
              <AllRequests />
            </Panel>
          </Collapse>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
    </Layout>
  </Layout>
);

export default AddLesson;
