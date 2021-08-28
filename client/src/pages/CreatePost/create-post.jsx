import React from 'react';
import { Layout, Collapse } from 'antd';

import { CreatePostTable, CreatePostModal } from '@components';

const { Content, Footer, Sider } = Layout;

const { Panel } = Collapse;

const CreatePost = () => (
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
            <h1 className="centerText HeadingGrey">Post Creation Page</h1>
            <CreatePostTable />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ALET CoTeach 2021</Footer>
      </Layout>
    </Layout>
  </div>
);

export default CreatePost;
