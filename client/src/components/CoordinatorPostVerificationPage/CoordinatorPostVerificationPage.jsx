import React from 'react';
import { Layout, Collapse } from 'antd';
import styles from './Tables/table-style.css';

import PostVerificationTable from './Tables/PostVerificationTable';

const { Content, Footer, Sider } = Layout;

const { Panel } = Collapse;

const CoordinatorPostVerificationPage = () => (
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
        <Content className="addLesson-content">
          <div className="site-layout-background">
            <h1 className="centerText HeadingGrey">Post Verification Page</h1>
            <PostVerificationTable />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
      </Layout>
    </Layout>
  </div>

);

export default CoordinatorPostVerificationPage;
