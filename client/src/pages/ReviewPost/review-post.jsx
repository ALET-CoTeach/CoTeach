import React from 'react';
import { Layout, Collapse } from 'antd';

import { VerifyPostTable } from '@components';

const { Content, Footer, Sider } = Layout;

const { Panel } = Collapse;

const VerifyPost = () => (
  <div>
    <Layout style={{ paddingTop: 45 }}>
      <Layout className="site-layout" style={{ height: '100vh'}}>
        <Content className="addLesson-content">
          <div className="site-layout-background" style={{ margin:"1%" }}>
            <h1 className="centerText HeadingGrey" style={{ marginBottom: 20}}>Post Verification Page</h1>
            <VerifyPostTable />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
      </Layout>
    </Layout>
  </div>

);

export default VerifyPost;
